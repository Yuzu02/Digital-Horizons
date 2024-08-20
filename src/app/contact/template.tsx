"use client";

import { motion } from "framer-motion";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      {children}
    </motion.main>
  );
}
