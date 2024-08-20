import CommentSection from "@/components/blog/comments/CommentSection";
import PostHeader from "@/components/blog/post/PostHeader";
import { getAllBlogSlug, getBlogBySlug } from "@/lib/fetchers";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function BlogPage({
  params,
}: Readonly<{
  params: { slug: string };
}>) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <section className="mt-16 flex min-h-screen flex-col items-center">
      <div className="w-full max-w-5xl px-4 pt-12 sm:px-6 lg:px-8">
        <article className="space-y-8">
          <PostHeader
            title={blog.frontmatter.title}
            author={blog.frontmatter.author}
            avatar={blog.frontmatter.avatar}
            publishDate={blog.frontmatter.publishDate}
            category={blog.frontmatter.category}
            slug={params.slug}
          />
          <section
            className="prose mx-auto max-w-6xl dark:prose-invert"
            suppressHydrationWarning={true}
          >
            {blog.content}
          </section>
        </article>
      </div>
      <div className="-mt-5 mb-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <CommentSection slug={params.slug} />
      </div>
    </section>
  );
}
