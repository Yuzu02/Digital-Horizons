import React, { useState, useEffect } from "react";
import { Comment } from "@/schemas/comment";
import { cleanString } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  userCommentItemVariants,
  userCommentVariants,
} from "@/utils/animations/DashBoardVariants";

interface UserCommentsProps {
  email: string;
}

interface CommentWithPost extends Comment {
  postSlug: string;
}

const UserComments: React.FC<UserCommentsProps> = ({ email }) => {
  const [comments, setComments] = useState<CommentWithPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/user/${email}`);
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [email]);

  if (loading) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-sm text-gray-600 dark:text-gray-400 sm:text-base"
      >
        Cargando comentarios...
      </motion.p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="scrollbar max-h-[400px] overflow-y-auto sm:max-h-[452px]"
    >
      <h2 className="mb-4 text-center text-xl font-medium tracking-tighter md:text-left md:text-2xl">
        Tus Comentarios
      </h2>
      {comments.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-gray-600 dark:text-gray-400 sm:text-base"
        >
          Aún no has hecho ningún comentario.
        </motion.p>
      ) : (
        <motion.div
          className="space-y-4"
          variants={userCommentVariants}
          initial="hidden"
          animate="show"
        >
          {comments.map((comment) => (
            <motion.div key={comment.id} variants={userCommentItemVariants}>
              <Link href={`/blog/post/${comment.postSlug}`}>
                <div className="cursor-pointer rounded-lg bg-gray-100 p-3 shadow transition-shadow duration-300 hover:shadow-md dark:bg-gray-700 dark:hover:bg-gray-600 sm:p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-base font-semibold dark:text-white sm:text-lg">
                      {cleanString(comment.postSlug)}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                      {new Date(comment.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="max-h-24 overflow-hidden text-sm text-gray-700 dark:text-gray-300 sm:text-base">
                    {comment.content}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default UserComments;
