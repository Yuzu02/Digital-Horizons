import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "/src/app/blog/_mdx-content");

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 },
    );
  }

  try {
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

    return NextResponse.json(filteredBlogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Error fetching blogs" },
      { status: 500 },
    );
  }
}
