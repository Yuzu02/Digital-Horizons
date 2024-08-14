"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="m-4 rounded-lg bg-white/10 shadow-lg backdrop-blur-md dark:bg-gray-800/30"
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-sm text-gray-600 dark:text-gray-300 sm:text-center"
        >
          © 2024 -{" "}
          <Link href="/" className="hover:underline">
            Digital Horizons™
          </Link>
          . All Rights Reserved.
        </motion.span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-600 dark:text-gray-300 sm:mt-0">
          {["Home", "Blog", "Contact"].map((item, index) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <Link
                href="#"
                className={`hover:underline ${index < 3 ? "me-4 md:me-6" : ""}`}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.footer>
  );
}
