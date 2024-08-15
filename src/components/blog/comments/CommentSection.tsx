"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import CommentForm from "./CommentForm";
import { Comment, CommentSchema } from "@/schemas/comment";
import { z } from "zod";
import { addComment } from "@/services/commentActions";
import { FaChevronDown } from "react-icons/fa";

interface CommentSectionProps {
  slug: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const commentVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const formVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
};

export default function CommentSection({
  slug,
}: Readonly<CommentSectionProps>) {
  const { data: session } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);
  const [visibleComments, setVisibleComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comments/${slug}`);
        const data = await res.json();
        const parsedComments = z.array(CommentSchema).safeParse(data);
        if (parsedComments.success) {
          const sortedComments = parsedComments.data.toSorted(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          );
          setComments(sortedComments);
          setVisibleComments(sortedComments.slice(0, 2));
        } else {
          console.error("Error parsing comments:", parsedComments.error);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [slug]);

  const handleAddComment = async (content: string) => {
    const newComments = await addComment(slug, content, session);
    if (newComments) {
      const sortedComments = newComments.toSorted(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      setComments(sortedComments);
      setVisibleComments(sortedComments.slice(0, 2));
    }
  };

  const loadMoreComments = () => {
    const currentLength = visibleComments.length;
    const nextComments = comments.slice(currentLength, currentLength + 2);
    setVisibleComments([...visibleComments, ...nextComments]);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto mt-8 max-w-2xl rounded-lg bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 sm:mt-12 sm:p-6 md:p-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-center text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl"
      >
        Comentarios
      </motion.h2>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center"
          >
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900 dark:border-white"></div>
          </motion.div>
        ) : (
          <>
            {renderComments(visibleComments)}
            {visibleComments.length < comments.length && (
              <motion.button
                onClick={loadMoreComments}
                className="mt-4 flex w-full items-center justify-center space-x-2 rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition duration-300 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Cargar más comentarios</span>
                <FaChevronDown />
              </motion.button>
            )}
          </>
        )}
      </AnimatePresence>
      {session ? (
        <motion.div variants={formVariants}>
          <CommentForm onSubmit={handleAddComment} />
        </motion.div>
      ) : (
        <motion.div
          variants={formVariants}
          className="mt-6 text-center sm:mt-8"
        >
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
            Por favor inicia sesión para comentar
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/login"
              className="inline-block rounded bg-blue-500 px-4 py-2 text-sm font-bold text-white transition duration-300 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 sm:text-base"
            >
              Iniciar sesión
            </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

const renderComments = (comments: Comment[]) => {
  if (comments.length > 0) {
    return comments.map((comment) => (
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
              <p className="text-sm text-gray-800 dark:text-gray-200">
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
