import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";
import matter from "gray-matter";
import { BlogSchema, BlogSchemaExtended } from "@/schemas/blog";

const contentDir = path.join(process.cwd(), "/src/app/blog/_mdx-content");
const shikiOptions = {
  themes: {
    light: "synthwave-84",
    dark: "nord",
  },
  defaultColor: false,
};

export async function getBlogBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    components: {},
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypeShiki, shikiOptions]],
      },
    },
  });

  const safeFrontmatter = {
    title: frontmatter.title || "Unknown Title",
    author: frontmatter.author || "Unknown Author",
    category: frontmatter.category || "Uncategorized",
    publishDate: frontmatter.publishDate || new Date().toISOString(),
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

export async function getBlogs() {
  const files = fs.readdirSync(contentDir);
  const blogs = await Promise.all(
    files.map(async (file) => await getBlogBySlug(path.parse(file).name)),
  );
  return blogs;
}

export function getAllBlogSlug() {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}

export async function getBlogbyCategory(category: string) {
  const blogs = await getBlogs();
  return blogs.filter((blog) => blog.frontmatter.category === category);
}

export async function searchBlog(search: string) {
  const blogs = await getBlogs();
  return blogs.filter((blog) =>
    blog.frontmatter.title.toLowerCase().includes(search.toLowerCase()),
  );
}

export async function getBlogsJSON() {
  const files = fs.readdirSync(contentDir);
  const blogs = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const filePath = path.join(contentDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const blogData = BlogSchema.parse({
      slug,
      title: data.title,
      author: data.author,
      category: data.category,
      publishDate: data.publishDate,
      content,
    });

    return blogData;
  });

  return blogs;
}
