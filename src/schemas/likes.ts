import { z } from "zod";

export const LikeSchema = z.object({
  id: z.string(),
  postSlug: z.string(),
  createdAt: z.string(),
  email: z.string().email(),
  username: z.string(),
});

export type Like = z.infer<typeof LikeSchema>;
