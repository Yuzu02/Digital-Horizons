"use client";

import { RegisterTemplateVariants } from "@/utils/animations/TemplateVariants";
import { motion } from "framer-motion";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.main
      variants={RegisterTemplateVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.main>
  );
}
