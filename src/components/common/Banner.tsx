"use client";

import { trendingCategories } from "@/utils/data/categories/topTrending";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const TrendingCategoryBanner: React.FC = () => {
  return (
    <div className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 p-4 shadow-lg dark:from-purple-900 dark:to-indigo-900 md:p-6">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <motion.h2
          className="mb-4 text-center text-2xl font-bold text-white md:mb-0 md:text-left md:text-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Categorías en Tendencia
        </motion.h2>
        <motion.a
          href="/blog/categories"
          className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-600 shadow-md transition-all duration-300 hover:bg-purple-100 hover:shadow-lg dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700 md:justify-start md:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Ver todas las categorías
          <FaArrowRight className="ml-2" />
        </motion.a>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {trendingCategories.map((category, index) => (
          <motion.div
            key={category.name}
            className="overflow-hidden rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-3 flex items-center">
              <motion.div
                className="mr-3 text-3xl text-purple-600 dark:text-purple-400"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <category.icon />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {category.name}
              </h3>
            </div>
            <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
              {category.description}
            </p>
            <motion.a
              href={category.href}
              className="group inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              Descubre más
              <FaArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCategoryBanner;
