"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cleanString } from "@/lib/utils";
import { blogCardParticleVariants } from "@/utils/animations/BlogVariants";

interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    author: string;
    avatar: string;
    publishDate: string;
    image: string;
    description: string;
    category: string;
  };
}

interface AnimatedBlogCardProps {
  blog: BlogPost;
  index: number;
}

// Todo : @Nova034 te toca acomodarla con la paleta de colores , esta complicado combinar ese  purple con rosa

const AnimatedBlogCard: React.FC<AnimatedBlogCardProps> = ({ blog, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      <div className="relative h-64 w-full overflow-hidden sm:h-72 md:h-80">
        <Image
          src={blog.frontmatter.image}
          alt={blog.frontmatter.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg"
        >
          {cleanString(blog.frontmatter.category)}
        </motion.div>
      </div>
      <div className="p-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-3 text-3xl font-bold text-gray-800 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 md:text-lg"
        >
          {blog.frontmatter.title}
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-4 flex items-center text-sm text-gray-600 dark:text-gray-400"
        >
          <Image
            src={blog.frontmatter.avatar}
            alt={blog.frontmatter.author}
            width={32}
            height={32}
            className="mr-3 rounded-full"
          />
          <span className="mr-4 font-medium">{blog.frontmatter.author}</span>
          <span className="text-gray-500 dark:text-gray-400">
            {new Date(blog.frontmatter.publishDate).toLocaleDateString()}
          </span>
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-300"
        >
          {blog.frontmatter.description}
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <Link
            href={`/blog/post/${blog.slug}`}
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 dark:bg-blue-500 dark:hover:bg-blue-600 dark:hover:shadow-blue-400/50"
          >
            <span className="relative z-10">Leer mas</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ x: -5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
            <motion.div
              className="absolute inset-0 z-0 bg-blue-700 dark:bg-blue-600"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      </div>
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(10)].map((post, i) => (
              <motion.div
                key={post + i}
                className="absolute h-2 w-2 rounded-full bg-blue-500"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={blogCardParticleVariants}
                transition={{
                  delay: i * 0.02,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default AnimatedBlogCard;
