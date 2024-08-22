"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { commentVariants } from "@/utils/animations/CommentsVariants";
import { CommentProps } from "@/schemas/components/comments-props";

export const CommentItem = ({
  comment,
}: Readonly<{ comment: CommentProps }>) => {
  return (
    <motion.div
      key={comment.id}
      variants={commentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="mb-4 sm:mb-6"
    >
      <div className="flex items-start space-x-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex-shrink-0 self-center"
        >
          <Image
            src={comment.authorImage}
            alt={comment.author}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
        </motion.div>
        <div className="flex-grow">
          <p className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-200">
            {comment.author}
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg bg-gray-100 p-3 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <p className="long-text-handler text-sm text-gray-800 dark:text-gray-200">
              {comment.content}
            </p>
          </motion.div>
          <p className="mt-2 text-left text-xs text-gray-500 dark:text-gray-400">
            Publicado el{" "}
            {new Date(comment.createdAt).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
