import React from "react";
import { getBlogs } from "../../lib/fetchers";
import AnimatedBlogCard from "@/components/blog/AnimatedBlogCard";

const BlogsPage: React.FC = async () => {
  const blogs = await getBlogs();

  // Sort blogs by publish date in descending order
  blogs.sort(
    (a, b) =>
      new Date(b.frontmatter.publishDate).getTime() -
      new Date(a.frontmatter.publishDate).getTime(),
  );

  return (
    <main className="container mx-auto mt-12 px-4 py-14 transition-colors duration-300">
      <h1 className="mb-6 text-center text-5xl font-medium tracking-tighter md:text-6xl">
        Blog Posts
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <AnimatedBlogCard
            key={blog.frontmatter.title}
            blog={blog}
            index={index}
          />
        ))}
      </div>
    </main>
  );
};

export default BlogsPage;
