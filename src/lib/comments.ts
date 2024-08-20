import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { CommentSchema, Comment, NewComment } from "@/schemas/comment";
import { z } from "zod";
import { db } from "./firebaseConfig";

// ? Obtiene los comentarios de un post
export async function getCommentsForPost(slug: string): Promise<Comment[]> {
  const commentsRef = collection(db, "comments");
  const q = query(commentsRef, where("postSlug", "==", slug));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => CommentSchema.parse(doc.data()));
}

// ? Agrega un comentario a un post
export async function addCommentToPost(
  slug: string,
  comment: NewComment,
): Promise<void> {
  const newComment: Comment = {
    ...comment,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    postSlug: slug,
  };

  const validatedNewComment = CommentSchema.parse(newComment);
  await addDoc(collection(db, "comments"), validatedNewComment);
}

// ? Valida un comentario
export function validateComment(comment: unknown): Comment | null {
  try {
    return CommentSchema.parse(comment);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Comment validation failed:", error.errors);
    } else {
      console.error("Unexpected error during comment validation:", error);
    }
    return null;
  }
}

// ? Obtiene los comentarios de un usuario
export async function getCommentsForUser(
  email: string,
): Promise<(Comment & { postSlug: string })[]> {
  const commentsRef = collection(db, "comments");
  const querySnapshot = await getDocs(commentsRef);

  const allComments = querySnapshot.docs.map((doc) => ({
    ...CommentSchema.parse(doc.data()),
    postSlug: doc.data().postSlug,
  }));

  return allComments.filter((comment) => comment.email === email);
}
