"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

//? Luego lo moveré a un schema de zod
interface Post {
  slug: string;
  frontmatter: {
    title: string;
    author: string;
    image: string;
    publishDate: string;
    description: string;
    avatar: string;
  };
}

interface CategoryPageContentProps {
  category: string;
  posts: Post[];
}

export default function CategoryPageContent({
  category,
  posts,
}: Readonly<CategoryPageContentProps>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 p-4 dark:bg-gray-900 sm:p-6 md:p-8 lg:p-10"
    >
      <div className="mx-auto mt-12 max-w-7xl">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="mb-8 text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl"
        >
          Categoría: {category.toUpperCase()}
        </motion.h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800"
            >
              <Link href={`/blog/post/${post.slug}`}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.frontmatter.image}
                      alt={post.frontmatter.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center">
                      <Image
                        src={post.frontmatter.avatar}
                        alt={post.frontmatter.author}
                        width={40}
                        height={40}
                        className="mr-3 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-white">
                          {post.frontmatter.author}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {post.frontmatter.publishDate}
                        </p>
                      </div>
                    </div>
                    <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                      {post.frontmatter.title}
                    </h2>
                    <p className="mt-2 text-gray-700 dark:text-gray-200">
                      {post.frontmatter.description.length > 100
                        ? `${post.frontmatter.description.substring(0, 100)}...`
                        : post.frontmatter.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
