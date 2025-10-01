"use client";

import React, { useState, useEffect } from "react";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  rectIntersection,
  closestCenter,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import RenderWords from "./render-words";

export default function SortWordActivity() {
  const [initialWords, setInitialWords] = useState(["lus", "cojer", "vez"]);
  const [wrongWords, setWrongWords] = useState(["hola", "sorro", "haver"]);
  const [rightWords, setRightWords] = useState([
    "ay",
    "perseguir",
    "conversar",
  ]);
  const [isMounted, setIsMounted] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragOver={handleDragOver}
    >
      <div className="my-7 mx-7">
        <RenderWords
          items={initialWords}
          id="top-side"
          strategy={horizontalListSortingStrategy}
          orientation="horizontal"
        />
      </div>
      <div className="flex justify-center gap-7">
        <RenderWords items={leftSide} id="left-side" />
        <RenderWords items={rightSide} id="right-side" />
      </div>
    </DndContext>
  );

  function handleDragOver(event: DragEndEvent) {
    const { active, over } = event;

    const activeContainerId = active?.data.current?.sortable?.containerId;
    const overContainerId = over?.data.current?.sortable?.containerId;

    const id = active?.id as string;
    const overId = over?.id as string;

    if (id !== overId) {
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
      } else if (activeContainerId === "top-side" && overContainerId === "top-side") {
        setInitialWords((words) => arrayMove(words, activeIndex, overIndex));
        return;
      }

      if (activeContainerId === "left-side" && overId === "right-side") {
        setWrongWords((words) => words.toSpliced(activeIndex, 1));
        setRightWords((words) => words.toSpliced(overIndex, 0, id));
      } else if (activeContainerId === "right-side" && overId === "left-side") {
        setRightWords((words) => words.toSpliced(activeIndex, 1));
        setWrongWords((words) => words.toSpliced(overIndex, 0, id));
      }
    }
  }
}
