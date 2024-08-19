"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CommentFormProps {
  // eslint-disable-next-line
  onSubmit: (content: string) => Promise<void>;
}

export default function CommentForm({ onSubmit }: Readonly<CommentFormProps>) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      setIsSubmitting(true);
      try {
        await onSubmit(content);
        setContent("");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <textarea
          className="w-full resize-none rounded-lg border border-gray-300 p-2 pr-16 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escribe tu comentario..."
          rows={3}
          required
        />
        <motion.div
          className="absolute bottom-2 right-2 h-1 bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${(content.length / 500) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <AnimatePresence>
        {content && (
          <motion.p
            className="mt-1 text-xs text-gray-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {500 - content.length} caracteres restantes
          </motion.p>
        )}
      </AnimatePresence>
      <motion.button
        type="submit"
        className={`mt-3 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 ${
          isSubmitting ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={isSubmitting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isSubmitting ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Enviando...
          </motion.span>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Publicar Comentario
          </motion.span>
        )}
      </motion.button>
    </motion.form>
  );
}
