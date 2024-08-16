"use client";

import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export const NotFoundCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center p-8 text-center text-gray-500 dark:text-gray-400"
    >
      <FaSearch className="mr-2 text-2xl" />
      <span>No se ha encontrado ningún post</span>
    </motion.div>
  );
};
