"use client";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { categories } from "@/utils/data/categories/constants";
import { motion } from "framer-motion";

// TODO : Mejora la paleta de colores de la sección de categorías @Nova034

const CategoriesSection = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-8 lg:p-2 lg:pt-6">
      <Card className="w-full max-w-7xl border-none bg-lightMode p-4 dark:border-none dark:bg-darkMode sm:p-6 md:p-8">
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
                <Link
                  href={`${category.href}`}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">Ver Categoría</span>
                </Link>
                <motion.div
                  className="flex h-full flex-col items-center justify-center gap-3 bg-white p-4 text-center transition-all duration-300 group-hover:bg-primary group-hover:text-white dark:bg-gray-800 dark:text-lightMode/80 dark:group-hover:bg-primary-dark"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-blue-500 dark:bg-gray-700 dark:group-hover:bg-blue-600"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="h-7 w-7 text-gray-600 transition-all duration-300 group-hover:text-white dark:text-gray-300 dark:group-hover:text-white" />
                  </motion.div>
                  <h3 className="text-lg font-medium tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-lightMode/80 dark:text-gray-300 dark:group-hover:text-white">
                    {category.description}
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Card>
    </div>
  );
};

export default CategoriesSection;
