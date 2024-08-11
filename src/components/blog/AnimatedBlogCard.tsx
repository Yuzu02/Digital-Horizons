"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    author: string;
    publishDate: string;
    image: string;
  };
}

interface AnimatedBlogCardProps {
  blog: BlogPost;
  index: number;
}

const ClientAnimatedBlogCard: React.FC<AnimatedBlogCardProps> = ({
  blog,
  index,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-800"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={blog.frontmatter.image}
          alt={blog.frontmatter.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-semibold text-gray-800 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {blog.frontmatter.title}
        </h2>
        <div className="mb-4 flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="mr-4">{blog.frontmatter.author}</span>
          <span>
            {new Date(blog.frontmatter.publishDate).toLocaleDateString()}
          </span>
        </div>
        <Link
          href={`/blog/post/${blog.slug}`}
          className="inline-block rounded-full bg-blue-500 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-md dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Read More
        </Link>
      </div>
    </motion.article>
  );
};

export default ClientAnimatedBlogCard;
