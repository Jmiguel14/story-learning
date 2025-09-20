"use client";

import { Button } from "@headlessui/react";
import { STORIES } from "../../../utils/constants/stories";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function StoryPage() {
  const { id } = useParams<{ id: string }>();
  const currentStory = STORIES.find((story) => story.id === parseInt(id || ""));

  if (!currentStory) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          Historia no encontrada
        </h2>
        <p className="text-gray-500 dark:text-gray-300">
          No pudimos encontrar la historia solicitada.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <Link href="/" className="self-start">
        <Button
          type="button"
          className="cursor-pointer my-4 px-4 py-2 bg-transparent text-gray-500 rounded hover:text-gray-700 border border-gray-500 transition-colors"
        >
          <ArrowLeftIcon className="size-4" />
        </Button>
      </Link>
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
        {currentStory.title}
      </h1>
      <p className="max-w-2xl text-lg text-center text-gray-700 dark:text-gray-200">
        {currentStory.description}
      </p>
      <div className="flex flex-col items-center my-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4 self-start">
          Actividades
        </h1>
        <Link href={`/activity/autocomplete?storyId=${id}`}>
          <Button
            type="button"
            className="cursor-pointer w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Autocompletar
          </Button>
        </Link>
      </div>
    </div>
  );
}
