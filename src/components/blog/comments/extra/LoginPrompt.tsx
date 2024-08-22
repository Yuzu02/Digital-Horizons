"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { formCommentsVariants } from "@/utils/animations/CommentsVariants";

export const LoginPrompt = ({ pathname }: Readonly<{ pathname: string }>) => {
  return (
    <motion.div
      variants={formCommentsVariants}
      className="mt-6 text-center sm:mt-8"
    >
      <p className="mb-4 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
        Por favor inicia sesión para comentar
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href={`/login?returnUrl=${encodeURIComponent(pathname)}`}
          className="inline-block rounded bg-blue-500 px-4 py-2 text-sm font-bold text-white transition duration-300 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 sm:text-base"
        >
          Iniciar Sesión
        </Link>
      </motion.div>
    </motion.div>
  );
};
