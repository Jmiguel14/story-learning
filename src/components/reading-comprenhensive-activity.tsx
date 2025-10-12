"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { STORIES } from "../utils/constants/stories";
import Input from "./input";
import { Button } from "@headlessui/react";
import { useEffect, useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import ConfettiExplosion from "react-confetti-explosion";

type AnswerState = {
  value: string;
  isCorrect: boolean;
};

export default function ReadingComprenhensiveActivity() {
  const searchParams = useSearchParams();
  const storyId = searchParams.get("storyId") || "";
  const story = STORIES.find((story) => story.id === parseInt(storyId));
  const [answersState, setAnswersState] = useState<AnswerState[]>([]);
  const [isExploding, setIsExploding] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0.5);
  const router = useRouter();


  if (!story) {
    return <div>Leyenda no encontrada</div>;
  }

  if (!story.withReadingComprehensionActivity) {
    return <div>Esta leyenda no tiene actividad de comprensión lectora</div>;
  }

  const answers = story.questionsAndAnswers.map((question) => question.answer);

  const handleAnswerChange = (index: number, value: string) => {
    setAnswersState((prev) => {
      const newAnswersState = [...prev];
      const rightAnswer = answers[index];
      const isCorrect =
        value.toLowerCase().trim() === rightAnswer.toLowerCase().trim();
      newAnswersState[index] = { value, isCorrect };
      return newAnswersState;
    });
  };

  const hasErrors = answersState.some((answer) => !answer.isCorrect);

  const hasAllAnswers = answersState.every((answer) => Boolean(answer.value)) && answersState.length >= answers.length;

  useEffect(() => {
    if (!hasErrors && hasAllAnswers) {
      setIsExploding(true);
    } else {
      setIsExploding(false);
    }
  }, [hasErrors, hasAllAnswers]);

  useEffect(() => {
    setRandomNumber(Math.random());
  }, []);

  const randomAnswers = answers.toSorted(() => randomNumber - 0.5);
  
  const handleGoBack = () => {
    router.push(`/story/${storyId}`);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      {isExploding && (
        <ConfettiExplosion
          duration={3000}
          particleCount={200}
          width={1600}
          height={900}
        />
      )}
      <h1 className="text-2xl font-bold">Comprensión Lectora</h1>
      <div className="flex flex-col md:flex-row gap-20 justify-center w-full items-center p-4">
        <div className="flex flex-col gap-4">
          {story.questionsAndAnswers.map((question, index) => (
            <div key={question.question} className="flex flex-col gap-2">
              <h2>{question.question}</h2>
              <div className="flex flex-row gap-2 items-center">
                <Input
                  className="w-full"
                  value={answersState?.[index]?.value || ""}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                />
                {answersState[index]?.isCorrect && (
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                )}
                {!answersState[index]?.isCorrect &&
                  answersState[index]?.value && (
                    <XCircleIcon className="w-6 h-6 text-red-500" />
                  )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 justify-center border-2 border-gray-300 dark:border-white rounded-md p-4">
          <ol className="list-decimal list-inside">
            {randomAnswers
              .map((answer) => (
                <li key={answer} className="">
                  <span>{answer}</span>
                </li>
            ))}
          </ol>
        </div>
      </div>
      <Button
        type="button"
        className="cursor-pointer mt-4 px-4 py-2 bg-transparent text-gray-500 rounded hover:text-gray-700 border border-gray-500 transition-colors"
        onClick={handleGoBack}
      >
        Regresar a la leyenda
      </Button>
    </div>
  );
}
