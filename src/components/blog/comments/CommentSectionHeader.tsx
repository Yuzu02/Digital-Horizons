"use client";

import { motion } from "framer-motion";

export const CommentSectionHeader = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4 text-center text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl"
    >
      Comentarios
    </motion.h2>
  );
};
