"use client";

import { useRouter } from "next/navigation";
import { FaGlobe, FaRobot, FaTools } from "react-icons/fa";

const CategoriesPage: React.FC = () => {
  const router = useRouter();

  const categories = [
    { name: "Web", icon: <FaGlobe />, path: "Web" },
    { name: "AI", icon: <FaRobot />, path: "AI" },
    { name: "Tools", icon: <FaTools />, path: "Tools" },
  ];

  const handleNavigation = (path: string) => {
    router.push(`/blog/categories/${path}`);
  };

  return (
    <section className="min-h-screen bg-gray-100 p-8 dark:bg-gray-800">
      <div className="container mx-auto">
        <h1 className="mb-12 text-center text-5xl font-bold text-gray-800 dark:text-white">
          Categorías
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="cursor-pointer rounded-lg bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl dark:bg-gray-700"
              onClick={() => handleNavigation(category.path)}
            >
              <div className="flex flex-col items-center justify-center space-y-4 p-8">
                <div className="text-6xl text-gray-600 transition-colors duration-300 ease-in-out hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                  {category.icon}
                </div>
                <span className="text-xl font-semibold text-gray-800 dark:text-white">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
