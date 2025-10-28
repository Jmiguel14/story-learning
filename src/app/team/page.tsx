export default function TeamPage() {
  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl font-bold">Conoce nuestro equipo</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Nuestro equipo desarrolló una página web educativa que busca facilitar
        el aprendizaje de Lengua y Literatura mediante actividades didácticas,
        lúdicas y personalizadas. A través de leyendas, juegos interactivos y ejercicios dinámicos, se promueve el desarrollo de la lectura, la escritura y la comprensión de una forma entretenida y accesible.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
          <img src="/images/team/Joel.jpeg" alt="Joel Vaca" className="w-52 h-52 object-cover rounded-full mb-4 self-center" />
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Joel Vaca</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Estudiante... creativo y proactivo.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
          <img src="/images/team/Sofia.jpeg" alt="Sofia Chica" className="w-52 h-52 object-cover rounded-full mb-4 self-center" />
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Sofia Chica</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Estudiante... creativo y proactivo.
          </p>
        </div>
      </div>
    </div>
  );
}
