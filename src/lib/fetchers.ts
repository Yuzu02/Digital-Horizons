import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";
// ? import Code from "@/components/utils/Code";

const contentDir = path.join(process.cwd(), "/src/app/blogs/_mdx-content");

export async function getBlogBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<{
    title: string;
    author: string;
    category: string;
    publishDate: string;
  }>({
    source: fileContent,
    components: {},
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypeShiki,
            {
              themes: {
                light: "synthwave-84", // Todo : Cambiar el tema de la sintaxis https://shiki.style/themes
                dark: "nord",
              },
              defaultColor: false,
            },
          ],
        ],
      },
    },
  });
  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

// ? Obtener todos los blogs
export async function getBlogs() {
  const files = fs.readdirSync(contentDir);
  const blogs = await Promise.all(
    files.map(async (file) => await getBlogBySlug(path.parse(file).name)),
  );
  return blogs;
}

// ? Obtener todos los slugs de los blogs
export function getAllBlogSlug() {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}

// ? Obtener los blogs por categoría
export async function getBlogbyCategory(category: string) {
  const files = fs.readdirSync(contentDir);
  const blogs = await Promise.all(
    files.map(async (file) => await getBlogBySlug(path.parse(file).name)),
  );
  return blogs.filter((blog) => blog.frontmatter.category === category);
}
