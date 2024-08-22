"use client";

import { Blog } from "@/schemas/blog";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

interface SearchResultProps {
  filteredBlogs: Blog[];
  onClick: () => void;
}

export const SearchResult = ({ filteredBlogs, onClick }: SearchResultProps) => {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {filteredBlogs.map((blog) => (
        <motion.li
          key={blog.slug?.toString()}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden"
        >
          <Link href={`/blog/post/${blog.slug}`} onClick={onClick}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-6 p-6 transition-all duration-300 ease-in-out"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full shadow-lg"
              >
                {blog.avatar && (
                  <Image
                    src={blog.avatar}
                    alt={`${blog.author}'s avatar`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                )}
              </motion.div>
              <div className="flex-1 space-y-2">
                <motion.h3
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold text-gray-900 group-hover:text-primary-hover dark:text-white"
                >
                  {blog.title}
                </motion.h3>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  {blog.description}
                </motion.p>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-between"
                >
                  <span className="flex items-center text-sm font-semibold text-primary dark:text-primary-dark">
                    <FaUser className="mr-2" />
                    {blog.author}
                  </span>
                  <span className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                    <FaCalendarAlt className="mr-2" />
                    {blog.publishDate}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </Link>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute bottom-0 right-0 top-0 w-16 bg-gradient-to-l from-primary to-transparent"
          />
        </motion.li>
      ))}
    </ul>
  );
};
