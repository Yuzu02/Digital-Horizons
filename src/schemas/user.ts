import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  image: z.string(),
  // ? createdAt: z.string(),
  // ? updatedAt: z.string(),
});

export type User = z.infer<typeof userSchema>;
