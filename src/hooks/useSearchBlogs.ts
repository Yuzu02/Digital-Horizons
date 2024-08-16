"use client";
import { useState, useEffect } from "react";
import { Blog } from "@/schemas/blog";

export function useSearchBlogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce search term
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // Perform search
  useEffect(() => {
    const searchBlogs = async () => {
      if (debouncedSearchTerm.length < 2) {
        setFilteredBlogs([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(debouncedSearchTerm)}`,
        );
        if (response.ok) {
          const blogs = await response.json();
          setFilteredBlogs(blogs);
        } else {
          console.error("Error fetching search results");
          setFilteredBlogs([]);
        }
      } catch (error) {
        console.error("Error during search:", error);
        setFilteredBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    searchBlogs();
  }, [debouncedSearchTerm]);

  return { searchTerm, setSearchTerm, filteredBlogs, isLoading };
}
