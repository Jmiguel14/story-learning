import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  SortingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./sorteable-item";

type RenderWordsProps = {
  items: string[];
  id: string;
  strategy?: SortingStrategy;
  orientation?: "vertical" | "horizontal";
  withBadge?: boolean;
  withBorder?: boolean;
};

export default function RenderWords({
  items,
  id,
  strategy = verticalListSortingStrategy,
  orientation = "vertical",
  withBadge = false,
  withBorder = false,
}: RenderWordsProps) {
  const { setNodeRef } = useDroppable({ id });

  const windowWidth = window.innerWidth;
  const isMobile = windowWidth < 768;

  // Add scroll classes if it's horizontal
  const orientationClass =
    orientation === "vertical"
      ? "flex-col"
      : "flex-row overflow-x-auto max-w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-y-hidden";

  return (
    <div
      className={`flex justify-center ${isMobile ? orientationClass : ''} gap-4 ${
        withBorder
          ? "border-2 border-gray-300 dark:border-white rounded-4xl p-4 min-w-32 md:min-w-48 h-full shadow-md shadow-gray-300 dark:shadow-white"
          : ""
      }`}
      ref={setNodeRef}
      style={
        orientation === "horizontal"
          ? { WebkitOverflowScrolling: "touch" }
          : undefined
      }
    >
      <SortableContext id={id} items={items} strategy={strategy}>
        {items.map((itemId, index) => (
          <SortableItem
            key={itemId}
            id={itemId}
            withBadge={withBadge}
            index={index}
          />
        ))}
      </SortableContext>
    </div>
  );
}