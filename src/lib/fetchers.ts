import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import { BlogSchemaExtended } from "@/schemas/blog";
import AllComponents from "@/utils/BlogComponents";
import rehypeExpressiveCode from "rehype-expressive-code";
import type { RehypeExpressiveCodeOptions } from "rehype-expressive-code";

// MDX content directory
const contentDir = path.join(process.cwd(), "/src/app/blog/_mdx-content");

// Rehype Expressive Code Options
const ExpressiveCodeOptions: RehypeExpressiveCodeOptions = {
  themes: ["github-light", "github-dark"],
  useDarkModeMediaQuery: true,
  frames: {
    showCopyToClipboardButton: true,
    removeCommentsWhenCopyingTerminalFrames: true,
    extractFileNameFromCode: true,
  },
  defaultProps: {
    // Enable word wrap by default
    wrap: true,
    // Disable wrapped line indentation for terminal languages
    overridesByLang: {
      "bash,ps,sh": { preserveIndent: false },
    },
  },
};

// ? Esta función lee un archivo MDX y devuelve un objeto con los datos del blog
export async function getBlogBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  // ? Compila el MDX a HTML y extrae el frontmatter
  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    components: { ...AllComponents },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypeExpressiveCode, ExpressiveCodeOptions]],
      },
    },
  });

  // ? Asegura que el frontmatter tenga las propiedades necesarias y parsea el contenido
  const safeFrontmatter = {
    image: frontmatter.image || "https://via.placeholder.com/800x400",
    title: frontmatter.title || "Unknown Title",
    author: frontmatter.author || "Unknown Author",
    category: frontmatter.category || "Uncategorized",
    publishDate: frontmatter.publishDate || new Date().toISOString(),
    description: frontmatter.description || "Unknown Description",
    avatar: frontmatter.avatar || "https://via.placeholder.com/150",
  };

  try {
    const blogData = BlogSchemaExtended.parse({
      slug: path.parse(fileName).name,
      frontmatter: safeFrontmatter,
      content,
    });

    return blogData;
  } catch (error) {
    console.error("Error parsing blog data:", error);
    throw error;
  }
}

// ? Esta función lee todos los archivos MDX en el directorio y devuelve un array con los datos de los blogs
export async function getBlogs() {
  const files = fs.readdirSync(contentDir);
  const blogs = await Promise.all(
    files.map(async (file) => await getBlogBySlug(path.parse(file).name)),
  );
  return blogs;
}

// ? Esta función devuelve un array con los slugs de los blogs
export function getAllBlogSlug() {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}

// ? Esta función devuelve un array con los slugs de los blogs por categoría
export async function getBlogbyCategory(category: string) {
  const blogs = await getBlogs();
  return blogs.filter((blog) => blog.frontmatter.category === category);
}

export async function getAllCategories() {
  const blogs = await getBlogs();
  const categories = new Set(blogs.map((blog) => blog.frontmatter.category));
  return Array.from(categories);
}

// ? Esta función busca blogs por título o contenido
export async function searchBlogs(query: string) {
  const files = fs.readdirSync(contentDir);
  const blogs = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const filePath = path.join(contentDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      image: data.image,
      title: data.title,
      author: data.author,
      category: data.category,
      publishDate: data.publishDate,
      description: data.description,
      avatar: data.avatar,
    };
  });

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(query.toLowerCase()),
  );

  return filteredBlogs;
}

/* 

  ? Ejemplo de uso de rehype-shiki

import rehypeShiki, { RehypeShikiOptions } from "@shikijs/rehype";

// Rehype Shiki Options
const ShikiOptions: RehypeShikiOptions = {
  themes: {
    light: "snazzy-light",
    dark: "synthwave-84",
  },
};

*/
