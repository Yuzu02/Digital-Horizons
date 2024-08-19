import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { Comment, CommentSchema } from "@/schemas/comment";

export function useComments(slug: string) {
  const { data: session } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);
  const [visibleComments, setVisibleComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch(`/api/comments/${slug}`);
      const data = await res.json();
      const parsedComments = z.array(CommentSchema).safeParse(data);
      if (parsedComments.success) {
        const sortedComments = sortComments(parsedComments.data);
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
  }, [slug]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleAddComment = async (content: string) => {
    if (!session?.user?.email || !session.user.name || !session.user.image) {
      console.error("User information not available");
      return;
    }

    try {
      const response = await fetch(`/api/comments/${slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, email: session.user.email }),
      });

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      const newComment = await response.json();

      // Asegúrate de que el nuevo comentario tiene toda la información necesaria.
      const fullComment = {
        ...newComment,
        author: session.user.name, // Nombre del autor desde la sesión
        authorImage: session.user.image, // Imagen del autor desde la sesión
        createdAt: new Date().toISOString(), // Fecha actual
        content, // Contenido del comentario
      };

      const updatedComments = [fullComment, ...comments]; // Añadir el nuevo comentario al inicio
      const sortedComments = sortComments(updatedComments);
      setComments(sortedComments);
      setVisibleComments([fullComment, ...visibleComments]); // Añadir el nuevo comentario a los comentarios visibles
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const loadMoreComments = () => {
    const currentLength = visibleComments.length;
    const nextComments = comments.slice(currentLength, currentLength + 2);
    setVisibleComments([...visibleComments, ...nextComments]);
  };

  const sortComments = (commentsToSort: Comment[]) => {
    return commentsToSort.toSorted(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  };

  return {
    comments,
    visibleComments,
    isLoading,
    handleAddComment,
    loadMoreComments,
  };
}
