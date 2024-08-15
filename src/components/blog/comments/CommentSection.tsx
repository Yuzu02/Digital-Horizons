"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import { Comment, CommentSchema } from "@/schemas/comment";
import { z } from "zod";
import { addComment } from "@/services/commentActions";

interface CommentSectionProps {
  slug: string;
}

export default function CommentSection({
  slug,
}: Readonly<CommentSectionProps>) {
  const { data: session } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`/api/comments/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        const parsedComments = z.array(CommentSchema).safeParse(data);
        if (parsedComments.success) {
          setComments(parsedComments.data);
        } else {
          console.error("Error parsing comments:", parsedComments.error);
        }
      });
  }, [slug]);

  const handleAddComment = async (content: string) => {
    const newComments = await addComment(slug, content, session);
    if (newComments) {
      setComments(newComments);
    }
  };

  return (
    <div className="mt-12 rounded-lg bg-white p-8 shadow-lg transition-colors duration-200 dark:bg-gray-800">
      <h2 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
        Comentarios
      </h2>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="mb-6 flex items-center space-x-4">
            <Image
              src={comment.authorImage}
              alt={comment.author}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-grow">
              <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-200">
                {comment.author}
              </p>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200">
                  {comment.content}
                </p>
              </div>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
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
        ))
      ) : (
        <p className="text-gray-600 dark:text-gray-400">
          Sé el primero en comentar
        </p>
      )}
      {session ? (
        <CommentForm onSubmit={handleAddComment} />
      ) : (
        <div className="mt-8 text-center">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Por favor inicia sesión para comentar
          </p>
          <Link
            href="/login"
            className="inline-block rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Iniciar sesión
          </Link>
        </div>
      )}
    </div>
  );
}
