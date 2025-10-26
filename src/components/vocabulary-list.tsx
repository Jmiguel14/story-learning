import { VOCABULARY } from "../utils/constants/vacabulary";

export default function VocabularyList() {
  return (
    <div className="container mx-auto">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {VOCABULARY.map(({ id, name, description, example }) => (
          <li key={id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col gap-2">
            <h2 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{name}</h2>
            <p className="text-gray-700 dark:text-gray-300 overflow-hidden text-ellipsis line-clamp-2" title={description}>{description}</p>
            <div className="flex flex-col gap-2 mt-6">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Ejemplo: </span>
              <p className="text-gray-700 dark:text-gray-300 overflow-hidden text-ellipsis line-clamp-2" title={example}>{example}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}