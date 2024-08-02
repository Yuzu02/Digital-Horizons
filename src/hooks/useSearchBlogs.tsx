"use client";
import { useState, useEffect } from "react";
import { Blog } from "@/schemas/blog";

export function useSearchBlogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const searchBlogs = async () => {
      if (searchTerm.length < 2) {
        setFilteredBlogs([]);
        return;
      }

      const response = await fetch(
        `/api/search?q=${encodeURIComponent(searchTerm)}`,
      );
      if (response.ok) {
        const blogs = await response.json();
        setFilteredBlogs(blogs);
      }
    };

    const timeoutId = setTimeout(searchBlogs, 200);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return { searchTerm, setSearchTerm, filteredBlogs };
}
