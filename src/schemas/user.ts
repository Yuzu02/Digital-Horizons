// src/schemas/userSchema.ts
import { z } from "zod";

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  image: z.string().url(),
  // createdAt: z.string(),
  // updatedAt: z.string(),
});

export type User = z.infer<typeof UserSchema>;
