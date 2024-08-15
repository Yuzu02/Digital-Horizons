"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Frontmatter } from "@/schemas/blog";
import { truncateText } from "@/lib/utils";

const PostCard: React.FC<Frontmatter> = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.3 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="perspective-1000"
    >
      <Card className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl dark:bg-slate-800">
        <Link
          href={`/blog/post/${post.slug}`}
          className="absolute inset-0 z-10"
          prefetch={false}
        >
          <span className="sr-only">Leer mas acerca de {post.title}</span>
        </Link>
        <div className="relative h-60 w-full overflow-hidden">
          <motion.div variants={imageVariants} className="h-full w-full">
            <Image
              src={post.image}
              alt={`${post.title} - Blog post image`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out"
            />
          </motion.div>
          <motion.div
            variants={overlayVariants}
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-4 flex items-center"
          >
            <Image
              src={post.avatar}
              alt={`${post.author} avatar`}
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <span className="ml-2 text-sm font-medium text-white">
              {post.author}
            </span>
          </motion.div>
        </div>
        <div className="relative z-20 bg-white p-6 dark:bg-gray-800">
          <motion.h3
            variants={contentVariants}
            className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
          >
            {post.title}
          </motion.h3>
          <motion.p
            variants={contentVariants}
            className="mb-4 text-sm text-gray-600 dark:text-gray-400"
          >
            Fecha de publicación:{" "}
            {new Date(post.publishDate).toLocaleDateString()}
          </motion.p>
          <motion.div
            variants={contentVariants}
            className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"
          />
          <motion.p
            variants={contentVariants}
            className="text-sm text-gray-700 dark:text-gray-300"
          >
            {truncateText(post.description, 150)}
          </motion.p>
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 right-4 rounded-full bg-blue-600 p-3 text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default PostCard;
