import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { Comment, CommentSchema } from "@/schemas/comment";

export function useComments(slug: string) {
  const { data: session } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);
  const [visibleComments, setVisibleComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const COMMENTS_PER_PAGE = 2;

  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch(`/api/comments/${slug}`);
      const data = await res.json();
      const parsedComments = z.array(CommentSchema).safeParse(data);
      if (parsedComments.success) {
        const sortedComments = sortComments(parsedComments.data);
        setComments(sortedComments);
        setVisibleComments(sortedComments.slice(0, COMMENTS_PER_PAGE));
        setHasMore(sortedComments.length > COMMENTS_PER_PAGE);
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

      // newComment es el comentario recién creado
      const newComment = await response.json();

      const fullComment = {
        ...newComment,
        author: session.user.name, // Nombre del autor desde la sesión
        authorImage: session.user.image, // Imagen del autor desde la sesión
        createdAt: new Date().toISOString(), // Fecha actual
        content, // Contenido del comentario
      };

      const updatedComments = [fullComment, ...comments];
      const sortedComments = sortComments(updatedComments);
      setComments(sortedComments);
      setVisibleComments(sortedComments.slice(0, COMMENTS_PER_PAGE));
      setHasMore(sortedComments.length > COMMENTS_PER_PAGE);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const loadMoreComments = () => {
    const currentLength = visibleComments.length;
    const nextComments = comments.slice(
      currentLength,
      currentLength + COMMENTS_PER_PAGE,
    );
    setVisibleComments([...visibleComments, ...nextComments]);
    setHasMore(currentLength + COMMENTS_PER_PAGE < comments.length);
    if (currentLength + COMMENTS_PER_PAGE >= comments.length) {
      setIsExpanded(true);
    }
  };

  const collapseComments = () => {
    setVisibleComments(comments.slice(0, COMMENTS_PER_PAGE));
    setHasMore(comments.length > COMMENTS_PER_PAGE);
    setIsExpanded(false);
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
    hasMore,
    isExpanded,
    collapseComments,
    handleAddComment,
    loadMoreComments,
  };
}
