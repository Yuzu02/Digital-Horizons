"use client";
import { motion } from "framer-motion";
import { BlogTemplateVariants } from "@/utils/animations/TemplateVariants";

// Page transition animation for the /blog route
export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.main
      variants={BlogTemplateVariants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      {children}
    </motion.main>
  );
}
