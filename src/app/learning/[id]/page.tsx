"use client";

import { useParams } from "next/navigation";
import { LEARNING_RESOURCES } from "@/src/utils/constants/learning-resources";

export default function LearningResourcePage() {
  const { id } = useParams<{ id: string }>();
  const resource = LEARNING_RESOURCES.find((resource) => resource.id === parseInt(id || ""));

  if (!resource) {
    return <div>Recurso no encontrado</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold">{resource.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: resource.htmlContent || "" }} className="text-gray-700 dark:text-gray-300 w-full p-4" />
    </div>
  );
}