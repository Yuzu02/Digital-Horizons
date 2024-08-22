"use client";

import { motion } from "framer-motion";
import { CommentProps } from "@/schemas/components/comments-props";
import { CommentItem } from "@/components/blog/comments";

export const CommentList = (comments: CommentProps[]) => {
  if (comments.length > 0) {
    return comments.map((comment) => (
      <CommentItem key={comment.id} comment={comment} />
    ));
  } else {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm text-gray-600 dark:text-gray-400"
      >
        Sé el primero en comentar
      </motion.p>
    );
  }
};
