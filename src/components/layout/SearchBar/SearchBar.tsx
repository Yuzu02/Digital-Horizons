// SearchBar.tsx

"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useSearchBlogs } from "@/hooks/useSearchBlogs";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import {
  SearchResult,
  NotFoundCard,
  LoadingSpinner,
} from "@/components/layout/SearchBar/Cards";

interface SearchBarProps {
  onClose: () => void;
}

export default function SearchBar({ onClose }: Readonly<SearchBarProps>) {
  const { searchTerm, setSearchTerm, filteredBlogs, isLoading } =
    useSearchBlogs();
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handlePostClick = () => {
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-24 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-2xl px-4"
      >
        <div className="relative">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Buscar blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="w-full rounded-full border-2 border-primary bg-white py-3 pl-12 pr-12 text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute right-4 top-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <FaTimes className="text-xl" />
          </motion.button>
        </div>
        <AnimatePresence>
          {isFocused && searchTerm.trim() !== "" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-4 max-h-[60vh] overflow-y-auto rounded-2xl bg-white shadow-xl dark:bg-gray-800"
            >
              {isLoading ? (
                <LoadingSpinner />
              ) : filteredBlogs.length > 0 ? (
                <SearchResult
                  filteredBlogs={filteredBlogs}
                  onClick={handlePostClick}
                />
              ) : (
                <NotFoundCard />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
