"use client";

import { DashboardTemplateVariants } from "@/utils/animations/TemplateVariants";
import { motion } from "framer-motion";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.main
      variants={DashboardTemplateVariants}
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
