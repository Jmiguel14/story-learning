"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
  DragOverEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import RenderWords from "./render-words";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import { STORIES } from "../utils/constants/stories";
import Link from "next/link";
import { Button } from "@headlessui/react";
import ConfettiExplosion from "react-confetti-explosion";

export default function SortWordActivity() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const storyId = searchParams.get("storyId") || "";
  const story = STORIES.find((story) => story.id === parseInt(storyId));

  const defaultInitialWords =
    story?.rightWords?.concat(story?.wrongWords).toSorted() || [];

  const [initialWords, setInitialWords] = useState(defaultInitialWords);
  const [wrongWords, setWrongWords] = useState<string[]>([]);
  const [rightWords, setRightWords] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const verifyWords = useCallback(() => {
    const wrongWordsContainerisGood = story?.wrongWords.every((word) => wrongWords.includes(word)) && story?.wrongWords.length === wrongWords.length;
    const rightWordsContainerisGood = story?.rightWords.every((word) => rightWords.includes(word)) && story?.rightWords.length === rightWords.length;

    return wrongWordsContainerisGood && rightWordsContainerisGood;
  }, [wrongWords, rightWords, story?.wrongWords, story?.rightWords]);

  useEffect(() => {
    if (verifyWords()) {
      setIsExploding(true);
    } else {
      setIsExploding(false);
    }
  }, [verifyWords]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent hydration mismatch by only rendering drag-and-drop after client-side mount
  if (!isMounted) {
    return (
      <div>
        {wrongWords.map((id: string) => (
          <div
            key={id}
            style={{ padding: "8px", margin: "4px", border: "1px solid #ccc" }}
          >
            Elemento {id}
          </div>
        ))}
      </div>
    );
  }

  const leftSide = wrongWords;
  const rightSide = rightWords;

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    const activeContainerId = active?.data.current?.sortable?.containerId;
    const overContainerId = over?.data.current?.sortable?.containerId;

    const id = active?.id?.toString();
    const overId = over?.id?.toString();

    if (id && overId && id !== overId) {
      const activeIndex = active?.data.current?.sortable?.index;
      const overIndex = over?.data.current?.sortable?.index;
      if (
        activeContainerId === "left-side" &&
        overContainerId === "right-side"
      ) {
        setRightWords((words) => words.toSpliced(overIndex, 0, id));
        setWrongWords((words) => words.toSpliced(activeIndex, 1));
        return;
      } else if (
        activeContainerId === "right-side" &&
        overContainerId === "left-side"
      ) {
        setRightWords((words) => words.toSpliced(activeIndex, 1));
        setWrongWords((words) => words.toSpliced(overIndex, 0, id));
        return;
      }
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    const activeContainerId = active?.data.current?.sortable?.containerId;
    const overContainerId = over?.data.current?.sortable?.containerId;

    const id = active?.id as string;
    const overId = over?.id as string;

    if (id !== overId) {
      const activeIndex = active?.data.current?.sortable?.index;
      const overIndex = over?.data.current?.sortable?.index;

      if (activeContainerId === "top-side" && overContainerId === "left-side") {
        setWrongWords((words) => words.toSpliced(overIndex, 0, id));
        setInitialWords((words) => words.toSpliced(activeIndex, 1));
        return;
      }
      if (activeContainerId === "left-side" && overContainerId === "top-side") {
        setInitialWords((words) => words.toSpliced(overIndex, 0, id));
        setWrongWords((words) => words.toSpliced(activeIndex, 1));
        return;
      }
      if (
        activeContainerId === "top-side" &&
        overContainerId === "right-side"
      ) {
        setRightWords((words) => words.toSpliced(overIndex, 0, id));
        setInitialWords((words) => words.toSpliced(activeIndex, 1));
        return;
      }
      if (
        activeContainerId === "right-side" &&
        overContainerId === "top-side"
      ) {
        setInitialWords((words) => words.toSpliced(overIndex, 0, id));
        setRightWords((words) => words.toSpliced(activeIndex, 1));
        return;
      }

      // move words within the same container
      if (
        activeContainerId === "left-side" &&
        overContainerId === "left-side"
      ) {
        setWrongWords((words) => arrayMove(words, activeIndex, overIndex));
        return;
      } else if (
        activeContainerId === "right-side" &&
        overContainerId === "right-side"
      ) {
        setRightWords((words) => arrayMove(words, activeIndex, overIndex));
        return;
      } else if (
        activeContainerId === "top-side" &&
        overContainerId === "top-side"
      ) {
        setInitialWords((words) => arrayMove(words, activeIndex, overIndex));
        return;
      }

      // handle empty containers
      if (activeContainerId === "left-side" && overId === "right-side") {
        setWrongWords((words) => words.toSpliced(activeIndex, 1));
        setRightWords((words) => words.toSpliced(overIndex, 0, id));
      } else if (activeContainerId === "right-side" && overId === "left-side") {
        setRightWords((words) => words.toSpliced(activeIndex, 1));
        setWrongWords((words) => words.toSpliced(overIndex, 0, id));
      } else if (activeContainerId === "left-side" && overId === "top-side") {
        setInitialWords((words) => words.toSpliced(overIndex, 0, id));
        setWrongWords((words) => words.toSpliced(activeIndex, 1));
      } else if (activeContainerId === "right-side" && overId === "top-side") {
        setInitialWords((words) => words.toSpliced(overIndex, 0, id));
        setRightWords((words) => words.toSpliced(activeIndex, 1));
      } else if (activeContainerId === "top-side" && overId === "right-side") {
        setRightWords((words) => words.toSpliced(overIndex, 0, id));
        setInitialWords((words) => words.toSpliced(activeIndex, 1));
      } else if (activeContainerId === "top-side" && overId === "left-side") {
        setWrongWords((words) => words.toSpliced(overIndex, 0, id));
        setInitialWords((words) => words.toSpliced(activeIndex, 1));
      }
    }
  }

  const handleGoBack = () => {
    router.push(`/story/${storyId}`);
  };

  if (!story) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <h2 className="text-2xl font-bold">Leyenda no encontrada</h2>
        <Link href="/" className="text-blue-500">
          Regresar a la lista de leyendas
        </Link>
      </div>
    );
  }

  return (
    <div className="p-3 flex flex-col justify-start h-screen items-center gap-4">
      {/* Information Banner */}
      <div className="w-full mb-4">
        <div
          className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 px-4 py-3 rounded"
          role="status"
        >
          <span className="font-semibold">Nota:</span> Usa la lista de palabras
          correctas e incorrectas y arrastra cada una a su correspondiente
          contenedor. Siempre puedes volver a la leyenda para recordar las
          palabras correctas e incorrectas.
          Cuando hayas completado la actividad exitosamente, verás un gran explosión de confeti.
        </div>
      </div>
      {isExploding && (
        <ConfettiExplosion
          duration={3000}
          particleCount={200}
          width={1600}
          height={900}
        />
      )}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      >
        <div className="my-7 mx-7 mb-3 max-w-full">
          <RenderWords
            items={initialWords}
            id="top-side"
            strategy={horizontalListSortingStrategy}
            orientation="horizontal"
            withBadge
          />
        </div>
        <div className="flex justify-center gap-7 min-h-40">
          <div className="flex flex-col gap-4 items-center">
            <XMarkIcon className="w-8 h-8 text-red-500" />
            <RenderWords items={leftSide} id="left-side" withBorder withBadge />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <CheckIcon className="w-8 h-8 text-green-500" />
            <RenderWords
              items={rightSide}
              id="right-side"
              withBorder
              withBadge
            />
          </div>
        </div>
      </DndContext>
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
