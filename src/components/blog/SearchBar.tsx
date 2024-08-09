"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useSearchBlogs } from "@/hooks/useSearchBlogs";

export default function SearchBar() {
  const { searchTerm, setSearchTerm, filteredBlogs } = useSearchBlogs();

  // TODO: Mejorar el diseño de la barra de búsqueda

  return (
    <div className="relative w-full max-w-md">
      <Input
        type="text"
        placeholder="Buscar blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
      />
      {filteredBlogs.length > 0 && (
        <ul className="absolute z-10 mt-3 w-full rounded-md border border-gray-300 bg-white shadow-lg dark:bg-gray-800">
          {filteredBlogs.map((blog) => (
            <li
              key={blog.slug?.toString()}
              className="mr-2 border-b last:border-b-0 dark:border-gray-700"
            >
              <Link href={`/blog/post/${blog.slug}`}>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <h3 className="font-semibold dark:text-white">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {blog.author}
                  </p>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
