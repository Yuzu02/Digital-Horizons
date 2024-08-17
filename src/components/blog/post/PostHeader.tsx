"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { cleanString } from "@/lib/utils";
import { PostHeaderProps } from "@/schemas/blog";

const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  author,
  avatar,
  publishDate,
  category,
}) => {
  const PostPublishDate = new Date(publishDate).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 border-b border-gray-200 pb-8 dark:border-gray-700"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl"
      >
        {title}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-6 flex flex-wrap items-center space-x-4 text-sm text-gray-500 dark:text-gray-400"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center space-x-2"
        >
          <Avatar>
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{author}</span>
        </motion.div>
        <span className="hidden sm:inline">•</span>
        <time dateTime={publishDate} className="hidden sm:inline">
          {PostPublishDate}
        </time>
        <span className="hidden sm:inline">•</span>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            className="rounded-full bg-gray-100 px-3 py-1 font-medium transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            href={`/blog/categories/${category}`}
          >
            {cleanString(category)}
          </Link>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default PostHeader;
