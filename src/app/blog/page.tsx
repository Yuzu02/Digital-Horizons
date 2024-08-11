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
    <main className="container mx-auto px-4 py-12 transition-colors duration-300 dark:bg-gray-900">
      <h1 className="mb-12 text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl">
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
