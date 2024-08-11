"use client";
import { useState } from "react";

interface CommentFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (content: string) => Promise<void>;
}

export default function CommentForm({ onSubmit }: Readonly<CommentFormProps>) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(content);
      setContent("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <textarea
        className="w-full resize-none rounded-lg border border-gray-300 p-3 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Escribe tu comentario..."
        rows={4}
        required
      />
      <button
        type="submit"
        className={`mt-4 rounded-lg bg-blue-500 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 ${
          isSubmitting ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Publicar Comentario"}
      </button>
    </form>
  );
}
