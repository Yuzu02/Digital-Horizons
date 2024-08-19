import fs from "fs";
import path from "path";
import { CommentSchema, Comment, NewComment } from "@/schemas/comment";
import { z } from "zod";

const commentsDirectory = path.join(process.cwd(), "public", "comments");

export function getCommentsForPost(slug: string): Comment[] {
  const filePath = path.join(commentsDirectory, `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const parsedComments = JSON.parse(fileContents);
    return CommentSchema.array().parse(parsedComments);
  } catch (error) {
    console.error(`Error reading comments for post ${slug}:`, error);
    return [];
  }
}

export function addCommentToPost(slug: string, comment: NewComment): void {
  try {
    const comments = getCommentsForPost(slug);
    const newComment: Comment = {
      ...comment,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    const validatedNewComment = CommentSchema.parse(newComment);

    comments.push(validatedNewComment);
    const filePath = path.join(commentsDirectory, `${slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(comments, null, 2));
  } catch (error) {
    console.error(`Error adding comment to post ${slug}:`, error);
    throw new Error("Failed to add comment");
  }
}

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

export function getCommentsForUser(
  email: string,
): (Comment & { postSlug: string })[] {
  try {
    const files = fs.readdirSync(commentsDirectory);
    const allComments = files.flatMap((file) => {
      const filePath = path.join(commentsDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const parsedComments = JSON.parse(fileContents);
      const postSlug = path.basename(file, ".json");
      return CommentSchema.array()
        .parse(parsedComments)
        .map((comment) => ({
          ...comment,
          postSlug,
        }));
    });

    return allComments.filter((comment) => comment.email === email);
  } catch (error) {
    console.error("Error getting comments for user:", error);
    return [];
  }
}
