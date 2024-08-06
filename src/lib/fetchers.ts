import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import { BlogSchemaExtended } from "@/schemas/blog";
import AllComponents from "@/utils/BlogComponents";

const contentDir = path.join(process.cwd(), "/src/app/blog/_mdx-content");

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
        rehypePlugins: [],
      },
    },
  });

  // ? Asegura que el frontmatter tenga las propiedades necesarias y parsea el contenido
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

// ? Esta función busca blogs por título o contenido
export async function searchBlogs(query: string) {
  const files = fs.readdirSync(contentDir);
  const blogs = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const filePath = path.join(contentDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      author: data.author,
      category: data.category,
      publishDate: data.publishDate,
      content: content.slice(0, 200), // Solo enviamos una vista previa del contenido
    };
  });

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.content.toLowerCase().includes(query.toLowerCase()),
  );

  return filteredBlogs;
}
