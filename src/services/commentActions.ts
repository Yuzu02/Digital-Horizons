// @/actions/commentActions.ts
import { NewComment, NewCommentSchema, CommentSchema } from "@/schemas/comment";
import { Session } from "next-auth";
import { z } from "zod";

export const addComment = async (
  slug: string,
  content: string,
  session: Session | null,
) => {
  const newComment: NewComment = {
    content,
    author: session?.user?.name ?? "Anonymous",
    authorImage: session?.user?.image ?? "/default-avatar.png",
  };

  const validatedComment = NewCommentSchema.safeParse(newComment);
  if (!validatedComment.success) {
    console.error("Invalid comment data:", validatedComment.error);
    return null;
  }

  const res = await fetch(`/api/comments/${slug}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(validatedComment.data),
  });

  if (res.ok) {
    const newCommentsResponse = await fetch(`/api/comments/${slug}`);
    const newCommentsData = await newCommentsResponse.json();
    const parsedNewComments = z.array(CommentSchema).safeParse(newCommentsData);
    if (parsedNewComments.success) {
      return parsedNewComments.data;
    } else {
      console.error("Error parsing new comments:", parsedNewComments.error);
      return null;
    }
  }

  return null;
};
