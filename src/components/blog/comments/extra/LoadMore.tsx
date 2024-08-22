"use client";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export const LoadMore = ({ load }: { load: () => void }) => {
  return (
    <motion.button
      onClick={load}
      className="mt-4 flex w-full items-center justify-center space-x-2 rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition duration-300 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>Cargar más comentarios</span>
      <FaChevronDown />
    </motion.button>
  );
};
