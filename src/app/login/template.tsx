"use client";

import { LoginTemplateVariants } from "@/utils/animations/TemplateVariants";
import { motion } from "framer-motion";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.main
      variants={LoginTemplateVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
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
