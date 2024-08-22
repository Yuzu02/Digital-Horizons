"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { footerItems, footerData } from "@/utils/data/layout/constants";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 shadow-lg backdrop-blur-md dark:from-indigo-900/60 dark:via-sky-900/50 dark:to-indigo-900/60"
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 sm:p-6">
        <div className="flex flex-col items-center justify-between text-sm sm:flex-row">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="mb-2 text-center text-gray-700 dark:text-gray-200 sm:mb-0"
          >
            © {footerData.year}{" "}
            <Link
              href="/"
              className="font-semibold transition-colors duration-200 hover:text-purple-500 dark:hover:text-purple-400"
            >
              {footerData.name}
            </Link>
          </motion.span>
          <ul className="flex flex-wrap justify-center space-x-4 text-gray-700 dark:text-gray-200">
            {footerItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="group relative transition-colors duration-200 hover:text-purple-500 dark:hover:text-purple-400"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-500 transition-all duration-200 group-hover:w-full dark:bg-purple-400"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.footer>
  );
}
