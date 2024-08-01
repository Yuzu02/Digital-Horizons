import { z } from "zod";

const Post = z.object({
  title: z.string(),
  content: z.string(),
  category: z.string(),
  date: z.string(),
});

export type Post = z.infer<typeof Post>;
