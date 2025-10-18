import { Button } from "@headlessui/react";
import { LEARNING_RESOURCES } from "@/src/utils/constants/learning-resources";
import Link from "next/link";

export default function LearningResourcesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {LEARNING_RESOURCES.map((resource) => (
        <div
          key={resource.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col"
        >
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            {resource.title}
          </h2>
          <p
            className="text-gray-700 dark:text-gray-300 overflow-hidden text-ellipsis line-clamp-2"
            title={resource.description}
          >
            {resource.description}
          </p>
          <Link href={`/learning/${resource.id}`}>
            <Button
              type="button"
              className="cursor-pointer self-end mt-3 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
              aria-label={`Ver más sobre ${resource.title}`}
            >
              Ver más
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
