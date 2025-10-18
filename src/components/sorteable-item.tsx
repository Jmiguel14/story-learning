"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Item } from "./item";
import { Badge } from "./badge";

export function SortableItem(props: { id: string; withBadge?: boolean; index?: number }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {props.withBadge ? (
        <Badge>
          <Item
            style={style}
            id={props.id}
          />
        </Badge>
      ) : (
        <Item
          style={style}
          id={props.id}
        />
      )}
    </div>
  );
}
