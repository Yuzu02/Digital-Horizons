import { z } from "zod";

const BlogSchema = z.object({
  slug: z.string(),
  title: z.string(),
  author: z.string(),
  category: z.string(),
  publishDate: z.string(),
  content: z.any(), // ? De momento no se valida el contenido del blog
  description: z.string(),
  image: z.string(),
  avatar: z.string(), //? Luego se hará un custom z tipo para aceptar string | StaticImport
});

const BlogSchemaExtended = BlogSchema.extend({
  frontmatter: z.object({
    title: z.string(),
    author: z.string(),
    category: z.string(),
    publishDate: z.string(),
    image: z.string(),
    description: z.string(),
    avatar: z.string(),
  }),
}).omit({
  title: true,
  author: true,
  category: true,
  publishDate: true,
  image: true,
  description: true,
  avatar: true,
});

type Blog = z.infer<typeof BlogSchema>;
type BlogExtended = z.infer<typeof BlogSchemaExtended>;

type CategoryPageProps = {
  blogs: Blog[];
};

export { BlogSchema, BlogSchemaExtended };
export type { Blog, BlogExtended, CategoryPageProps };
