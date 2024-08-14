// SearchBar.tsx

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useSearchBlogs } from "@/hooks/useSearchBlogs";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
  onClose: () => void;
}

export default function SearchBar({ onClose }: Readonly<SearchBarProps>) {
  const { searchTerm, setSearchTerm, filteredBlogs } = useSearchBlogs();
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      {/* Blurred background */}
      <button
        className="fixed inset-0 z-40 hidden backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="fixed left-1/2 top-24 z-50 w-full max-w-md -translate-x-1/2 transform">
        <div className="relative">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Buscar blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:focus:ring-primary-dark"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          ></motion.button>
        </div>
        <AnimatePresence>
          {isFocused && filteredBlogs.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              {filteredBlogs.map((blog) => (
                <motion.li
                  key={blog.slug?.toString()}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="border-b last:border-b-0 dark:border-gray-700"
                >
                  <Link href={`/blog/post/${blog.slug}`}>
                    <span className="flex items-start gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      {blog.avatar && (
                        <Image
                          src={blog.avatar}
                          alt={`${blog.author}'s avatar`}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      )}
                      <div>
                        <h3 className="font-semibold dark:text-white">
                          {blog.title}
                        </h3>
                        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                          {blog.description}
                        </p>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          Por {blog.author}
                        </p>
                      </div>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
