import { z } from "zod";

// Definimos el esquema Zod para Comment
export const CommentSchema = z.object({
  id: z.string(),
  content: z.string(),
  author: z.string(),
  authorImage: z.string().url(),
  createdAt: z.string().datetime(),
  email: z.string().email(),
});

// Creamos un tipo TypeScript a partir del esquema Zod
export type Comment = z.infer<typeof CommentSchema>;

// Esquema para un nuevo comentario (sin id ni createdAt)
export const NewCommentSchema = CommentSchema.omit({
  id: true,
  createdAt: true,
});

// Tipo para un nuevo comentario
export type NewComment = z.infer<typeof NewCommentSchema>;
