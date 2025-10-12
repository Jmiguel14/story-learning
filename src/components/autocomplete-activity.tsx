"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { STORIES } from "@/src/utils/constants/stories";
import ConfettiExplosion from "react-confetti-explosion";
import Input from "./input";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@headlessui/react";
import { Badge } from "./badge";

const getInitialResult = (wordsLength: number) => {
  return Array.from({ length: wordsLength }, () => ({
    word: "",
    error: false,
  }));
};

export default function AutocompleteActivity() {
  const [isExploding, setIsExploding] = useState(false);
  const searchParams = useSearchParams();
  const storyId = searchParams.get("storyId") || "";
  const story = STORIES.find((story) => story.id === parseInt(storyId));
  const [result, setResult] = useState<{ word: string; error: boolean }[]>(
    getInitialResult((story?.splittedDescription?.length || 0) - 1 || 0)
  );
  const router = useRouter();

  const handleVerify = () => {
    const newResult = result.map((word, index) => {
      if (
        word.word.toLowerCase().trim() !==
        story?.wordsToCompleteWithSinonim?.[index]?.[1].toLowerCase().trim()
      ) {
        const newWordSet = { ...word };
        newWordSet.error = true;
        return newWordSet;
      }
      return { ...word, error: false };
    });

    const hasErrors = newResult.some((word) => word.error);
    if (!hasErrors) {
      setIsExploding(true);
    } else {
      setIsExploding(false);
    }

    setResult(newResult);
  };

  const handleGoBack = () => {
    router.push(`/story/${storyId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 max-w-2xl mx-auto">
      {isExploding && (
        <ConfettiExplosion
          duration={3000}
          particleCount={200}
          width={1600}
          height={900}
        />
      )}
      {/* Information Banner */}
      <div className="w-full mb-4">
        <div
          className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 px-4 py-3 rounded"
          role="status"
        >
          <span className="font-semibold">Nota:</span> Usa la lista de sinónimos para completar el sinónimo de cada palabra en negrita.
        </div>
      </div>
      <div className="w-full my-4 flex flex-wrap gap-2 justify-center">
        {
          [...(story?.wordsToCompleteWithSinonim || [])].sort().map((pair, index) => (
            <Badge key={index}>{pair[1]}</Badge>
          ))
        }
      </div>
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
        {story?.title}
      </h1>
      <div className="max-w-2xl text-lg text-center text-gray-700 dark:text-gray-200 leading-relaxed">
        {story?.splittedDescription?.map((sentence, index) => (
          <span key={index}>
            <span>{sentence} </span>
            {index !== story?.splittedDescription?.length - 1 && (
              <div className="inline-flex items-baseline gap-2 px-2">
                <span className="inline-flex items-center font-bold">
                  {story.wordsToCompleteWithSinonim?.[index]?.[0]}{" "}
                </span>
                <Input
                  type="text"
                  className="mx-1 w-32 inline-block align-baseline"
                  onChange={(e) => {
                    setResult((prev) => {
                      const newResult = [...prev];
                      newResult[index] = {
                        word: e.target.value,
                        error: newResult[index].error,
                      };
                      return newResult;
                    });
                  }}
                  value={result[index].word}
                />
                {result[index].error ? (
                  <XCircleIcon className="size-4 text-red-500" />
                ) : (
                  <CheckCircleIcon className="size-4 text-green-500" />
                )}
              </div>
            )}
          </span>
        ))}
      </div>
      <Button
        type="button"
        className="cursor-pointer w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
        onClick={handleVerify}
      >
        Verificar
      </Button>
      <Button
        type="button"
        className="cursor-pointer w-full mt-4 px-4 py-2 bg-transparent text-gray-500 rounded hover:text-gray-700 border border-gray-500 transition-colors"
        onClick={handleGoBack}
      >
        Regresar a la leyenda
      </Button>
    </div>
  );
}