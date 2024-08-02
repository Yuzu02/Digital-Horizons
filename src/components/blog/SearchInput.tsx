"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Blog } from "@/schemas/blog";

export default function SearchBar() {
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

    const timeoutId = setTimeout(searchBlogs, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div className="mx-auto w-full max-w-md">
      <input
        type="text"
        placeholder="Buscar blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {filteredBlogs.length > 0 && (
        <ul className="mt-4 rounded-md border border-gray-300 bg-white shadow-lg">
          {filteredBlogs.map((blog) => (
            <li key={blog.slug} className="border-b last:border-b-0">
              <Link href={`/blog/post/${blog.slug}`}>
                <span className="block px-4 py-2 hover:bg-gray-100">
                  <h3 className="font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-600">{blog.author}</p>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
