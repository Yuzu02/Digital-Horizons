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
      className="m-4 rounded-lg bg-white/10 shadow-lg backdrop-blur-md dark:bg-gray-800/30"
    >
      <div className="mx-auto w-full max-w-screen-xl p-4">
        <div className="flex flex-row items-center justify-between text-xs sm:text-sm">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="whitespace-nowrap text-gray-600 dark:text-gray-300"
          >
            © {footerData.year} -{" "}
            <Link href="/" className="hover:underline">
              {footerData.name}
            </Link>
          </motion.span>
          <ul className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 sm:space-x-4">
            {footerItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-purple-500"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.footer>
  );
}
