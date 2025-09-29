"use client";

import React, {useState, useEffect} from 'react';
import {
  closestCenter,
  DndContext, 
  DragEndEvent, 
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import {SortableItem} from './sorteable-item';
import {Item} from './item';

export default function SortWordActivity() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [wrongWords, setWrongWords] = useState(['hola', 'sorro', 'haver']);
  const [rightWords, setRightWords] = useState(['ay', 'perseguir', 'conversar']);
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
          <div key={id} style={{ padding: '8px', margin: '4px', border: '1px solid #ccc' }}>
            Elemento {id}
          </div>
        ))}
      </div>
    );
  }

  const renderWords = (items: string[], id: string) => {
    return (
      <div className="flex flex-col gap-4 border-2 border-gray-300 dark:border-white rounded-md p-4">
        <SortableContext
          id={id}
          items={items}
          strategy={verticalListSortingStrategy}
        >
          {items.map(id => <SortableItem key={id} id={id} />)}
        </SortableContext>
      </div>
    )
  }

  const leftSide = wrongWords
  const rightSide = rightWords

  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
    >
      <div className="flex justify-center gap-7">
        {renderWords(leftSide, 'left-side')}
        {renderWords(rightSide, 'right-side')}
      </div>
    </DndContext>
  );
  
  function handleDragStart(event: DragStartEvent) {
    const {active} = event;

    const id = active?.id as string;
    
    setActiveId(id);
  }
  
  function handleDragOver(event: DragEndEvent) {
    const {active, over} = event;

    const activeContainerId = active?.data.current?.sortable?.containerId;
    const overContainerId = over?.data.current?.sortable?.containerId;

    console.log({active, over});
    
    const id = active?.id as string;
    const overId = over?.id as string;
    
    if (id !== overId) {
      const activeIndex = active?.data.current?.sortable?.index;
      const overIndex = over?.data.current?.sortable?.index;
      if (activeContainerId === 'left-side' && overContainerId === 'right-side') {
        setRightWords((words) => words.toSpliced(overIndex, 0, id))
        setWrongWords((words) => words.toSpliced(activeIndex, 1))
      } else if (activeContainerId === 'right-side' && overContainerId === 'left-side') {
        setRightWords((words) => words.toSpliced(activeIndex, 1))
        setWrongWords((words) => words.toSpliced(overIndex, 0, id))
      }

      if (activeContainerId === 'left-side' && overContainerId === 'left-side') {
        setWrongWords((words) => arrayMove(words, activeIndex, overIndex))
      } else if (activeContainerId === 'right-side' && overContainerId === 'right-side') {
        setRightWords((words) => arrayMove(words, activeIndex, overIndex))
      }
    }
    
    setActiveId(null);
  }
}