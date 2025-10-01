import { useDroppable } from "@dnd-kit/core";
import { SortableContext, SortingStrategy, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "./sorteable-item";

type RenderWordsProps = {
  items: string[];
  id: string;
  strategy?: SortingStrategy;
  orientation?: "vertical" | "horizontal";
};

export default function RenderWords ({items, id, strategy = verticalListSortingStrategy, orientation = "vertical"}: RenderWordsProps) {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div
      className={`flex justify-center ${orientation === "vertical" ? 'flex-col' : 'flex-row'} gap-4 border-2 border-gray-300 dark:border-white rounded-md p-4 min-w-48`}
      ref={setNodeRef}
    >
      <SortableContext
        id={id}
        items={items}
        strategy={strategy}
      >
        {items.map((itemId) => (
          <SortableItem key={itemId} id={itemId} />
        ))}
      </SortableContext>
    </div>
  );
};