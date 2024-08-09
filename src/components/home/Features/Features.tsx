const Features = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="p-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-lg bg-gray-100 p-10 dark:bg-gray-900">
            <div className="mb-5 flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
                <i className="fas fa-robot text-black"></i>
              </div>
              <h2 className="ml-4 text-2xl font-bold">Digitals Horizons</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Manténgase informado con nuestra sección de blog dedicada a la
              tecnología futura.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-lg bg-gray-200 p-5 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">Cantidad</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Más de 1,000 artículos sobre tendencias tecnológicas emergentes
                y avances.
              </p>
            </div>
            <div className="rounded-lg bg-gray-200 p-5 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">Variedad</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Los artículos cubren campos como IA, robótica, biotecnología y
                más.
              </p>
            </div>
            <div className="rounded-lg bg-gray-200 p-5 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">Frecuencia</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Contenido fresco agregado diariamente para mantenerlo
                actualizado.
              </p>
            </div>
            <div className="rounded-lg bg-gray-200 p-5 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">Autoridad</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Escrito por nuestro equipo de expertos en tecnología y
                profesionales de la industria.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-lg bg-gray-100 p-10 dark:bg-gray-900">
            <div className="mb-5 flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
                <i className="fas fa-flask text-black"></i>
              </div>
              <h2 className="ml-4 text-2xl font-bold">
                Blogs de Investigación y Perspectivas
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Sumérgete en conceptos de tecnología futura con nuestra sección de
              investigación.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-lg bg-gray-200 p-5 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">Profundidad</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Más de 500 artículos de investigación para comprensión en
                profundidad.
              </p>
            </div>
            <div className="rounded-lg bg-gray-200 p-5 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">Gráficos</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ayudas visuales e informarías para mejorar la comprensión.
              </p>
            </div>
            <div className="rounded-lg bg-gray-200 p-5 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">Tendencias</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explora las tendencias emergentes en la investigación de
                tecnología futura.
              </p>
            </div>
            <div className="rounded-lg bg-gray-200 p-5 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">Colaboradores</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Contribuciones de investigadores y académicos tecnológicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
