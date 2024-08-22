import React, { useState, useEffect } from "react";
import { Like } from "@/schemas/likes";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  userLikesItemVariants,
  userLikesVariants,
} from "@/utils/animations/DashBoardVariants";

interface UserLikesProps {
  email: string;
}

const UserLikes: React.FC<UserLikesProps> = ({ email }) => {
  const [likes, setLikes] = useState<Like[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetch(`/api/likes/${email}`);
        if (!response.ok) {
          throw new Error("Failed to fetch likes");
        }
        const data = await response.json();
        setLikes(data);
      } catch (error) {
        console.error("Error fetching likes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikes();
  }, [email]);

  if (loading) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-gray-600 dark:text-gray-400"
      >
        Cargando posts que te han gustado...
      </motion.p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="scrollbar max-h-[452px] overflow-y-auto"
    >
      <h2 className="mb-4 text-xl font-semibold dark:text-white">
        Posts que te han gustado
      </h2>
      {likes.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600 dark:text-gray-400"
        >
          Aún no te han gustado posts.
        </motion.p>
      ) : (
        <motion.div
          className="space-y-4"
          variants={userLikesVariants}
          initial="hidden"
          animate="show"
        >
          {likes.map((like) => (
            <motion.div key={like.id} variants={userLikesItemVariants}>
              <Link href={`/blog/post/${like.postSlug}`}>
                <div className="cursor-pointer rounded-lg bg-gray-100 p-4 shadow transition-shadow duration-300 hover:shadow-md dark:bg-gray-700 dark:hover:bg-gray-600">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-lg font-semibold dark:text-white">
                      {like.postSlug}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(like.createdAt).toLocaleString()}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default UserLikes;
