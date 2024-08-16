"use client";
import { motion } from "framer-motion";

export const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex items-center justify-center p-8"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      }}
      className="h-8 w-8 rounded-full border-t-2 border-primary"
    />
  </motion.div>
);
