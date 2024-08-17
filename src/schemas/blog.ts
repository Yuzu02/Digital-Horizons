import { z } from "zod";

const FrontmatterSchema = z.object({
  post: z.object({
    slug: z.string(),
    title: z.string(),
    author: z.string(),
    category: z.string(),
    publishDate: z.string(),
    image: z.string(),
    description: z.string(),
    avatar: z.string(),
  }),
});

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

const PostHeaderSchema = z.object({
  title: z.string(),
  author: z.string(),
  avatar: z.string(),
  publishDate: z.string(),
  category: z.string(),
});

type Blog = z.infer<typeof BlogSchema>;
type BlogExtended = z.infer<typeof BlogSchemaExtended>;
type Frontmatter = z.infer<typeof FrontmatterSchema>;
type PostHeaderProps = z.infer<typeof PostHeaderSchema>;

type CategoryPageProps = {
  category: string;
  posts: BlogExtended[];
};

type Posts = {
  post: BlogExtended[];
};

export { BlogSchema, BlogSchemaExtended };
export type {
  Blog,
  BlogExtended,
  CategoryPageProps,
  Frontmatter,
  Posts,
  PostHeaderProps,
};
