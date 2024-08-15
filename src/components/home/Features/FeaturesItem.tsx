"use client";

import { motion } from "framer-motion";

// Todo : @Nova034 - Mejorar con la paleta de colores de la página

export const FeatureItem = ({
  icon,
  title,
  description,
  index,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      className="flex items-center space-x-4 py-5"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <div className="flex-1">
        <motion.h3
          className="mb-1 text-lg font-semibold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-darkMode/80 dark:text-lightMode/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};
