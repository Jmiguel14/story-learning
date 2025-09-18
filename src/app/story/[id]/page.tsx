import { STORIES } from "../../../utils/constants/stories"

export default function StoryPage({ params }: { params: { id: string } }) {
  const currentStory = STORIES.find((story) => story.id === parseInt(params.id));

  if (!currentStory) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Historia no encontrada</h2>
        <p className="text-gray-500 dark:text-gray-300">No pudimos encontrar la historia solicitada.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
        {currentStory.title}
      </h1>
      <p className="max-w-2xl text-lg text-center text-gray-700 dark:text-gray-200">
        {currentStory.description}
      </p>
    </div>
  );
}