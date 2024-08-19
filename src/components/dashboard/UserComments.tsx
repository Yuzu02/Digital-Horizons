import React, { useState, useEffect } from "react";
import { Comment } from "@/schemas/comment";
import { cleanString } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

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
        className="text-center text-gray-600 dark:text-gray-400"
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
    >
      <h2 className="mb-4 text-xl font-semibold dark:text-white">
        Tus Comentarios
      </h2>
      {comments.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600 dark:text-gray-400"
        >
          Aún no has hecho ningún comentario.
        </motion.p>
      ) : (
        <motion.div
          className="space-y-4"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Link href={`/blog/post/${comment.postSlug}`}>
                <div className="cursor-pointer rounded-lg bg-gray-100 p-4 shadow transition-shadow duration-300 hover:shadow-md dark:bg-gray-700 dark:hover:bg-gray-600">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-lg font-semibold dark:text-white">
                      Post: {cleanString(comment.postSlug)}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(comment.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
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
