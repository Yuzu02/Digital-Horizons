// src/app/api/posts/route.ts
import { getBlogs } from "@/lib/fetchers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") ?? "6", 10);

  try {
    const blogs = await getBlogs();
    const sortedBlogs = blogs.toSorted(
      (a, b) =>
        new Date(b.frontmatter.publishDate).getTime() -
        new Date(a.frontmatter.publishDate).getTime(),
    );
    const recentBlogs = sortedBlogs.slice(0, limit).map((blog) => ({
      slug: blog.slug,
      image: blog.frontmatter.image,
      title: blog.frontmatter.title,
      author: blog.frontmatter.author,
      publishDate: blog.frontmatter.publishDate,
      description: blog.frontmatter.description,
      avatar: blog.frontmatter.avatar,
    }));

    return NextResponse.json(recentBlogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Error fetching blogs" },
      { status: 500 },
    );
  }
}
