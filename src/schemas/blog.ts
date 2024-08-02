import { z } from "zod";
// ? import { MDXRemoteSerializeResult } from "next-mdx-remote";

const BlogSchema = z.object({
  slug: z.string(),
  title: z.string(),
  author: z.string(),
  category: z.string(),
  publishDate: z.string(),
  content: z.any(), // ? De momento no se valida el contenido del blog
});

const BlogSchemaExtended = z.object({
  slug: z.string(),
  frontmatter: z.object({
    title: z.string(),
    author: z.string(),
    category: z.string(),
    publishDate: z.string(),
  }),
  content: z.any(), // ? De momento no se valida el contenido del blog
});

interface CategoryPageProps {
  blogs: z.infer<typeof BlogSchema>[];
}

/* 
  Interface para el contenido de un blog post

  interface Blog {
  content: MDXRemoteSerializeResult;
}
*/

export { BlogSchema };
export type { CategoryPageProps };
//? export type { Blog };
export { BlogSchemaExtended };
export type BlogType = z.infer<typeof BlogSchemaExtended>;
