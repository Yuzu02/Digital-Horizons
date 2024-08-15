import fs from "fs";
import path from "path";
import { CommentSchema, Comment, NewComment } from "@/schemas/comment";

// Directorio donde se guardan los comentarios
const commentsDirectory = path.join(process.cwd(), "public", "comments");

// Función para obtener los comentarios de un post
export function getCommentsForPost(slug: string): Comment[] {
  const filePath = path.join(commentsDirectory, `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  const parsedComments = JSON.parse(fileContents);

  // Validamos los comentarios con Zod
  const validatedComments = CommentSchema.array().parse(parsedComments);
  return validatedComments;
}

// Función para agregar un comentario a un post
export function addCommentToPost(slug: string, comment: NewComment): void {
  const comments = getCommentsForPost(slug);
  const newComment: Comment = {
    ...comment,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };

  // Validamos el nuevo comentario con Zod
  const validatedNewComment = CommentSchema.parse(newComment);

  // Guardamos el nuevo comentario en el archivo JSON
  comments.push(validatedNewComment);
  const filePath = path.join(commentsDirectory, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(comments, null, 2));
}

// Función auxiliar para validar un solo comentario
export function validateComment(comment: unknown): Comment {
  return CommentSchema.parse(comment);
}

// Función para obtener todos los comentarios de una persona
export function getCommentsForPerson(author: string): Comment[] {
  const files = fs.readdirSync(commentsDirectory);
  const allComments = files.flatMap((file) => {
    const filePath = path.join(commentsDirectory, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const parsedComments = JSON.parse(fileContents);
    return parsedComments;
  });

  const commentsForPerson = allComments.filter(
    (comment: Comment) => comment.author === author,
  );
  return commentsForPerson;
}
