import CommentSection from "@/components/blog/comments/CommentSection";
import Loader from "@/components/common/Loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAllBlogSlug, getBlogBySlug } from "@/lib/fetchers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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
    <>
      <Suspense fallback={<Loader />}>
        <section
          className="flex min-h-screen items-center justify-center"
          suppressHydrationWarning={true}
        >
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <article className="mx-auto max-w-3xl space-y-8 lg:max-w-4xl xl:max-w-6xl">
              <header className="mb-8 border-b border-gray-200 pb-8 dark:border-gray-700">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                  {blog.frontmatter.title}
                </h1>
                <div className="mt-6 flex flex-wrap items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="">
                    <Avatar>
                      <AvatarImage
                        src={blog.frontmatter.avatar}
                        alt={blog.frontmatter.author}
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <span className="font-medium">{blog.frontmatter.author}</span>
                  <span>•</span>
                  <time dateTime={blog.frontmatter.publishDate}>
                    {new Date(blog.frontmatter.publishDate).toLocaleDateString(
                      "es-ES",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </time>
                  <span>•</span>
                  <Link
                    className="rounded-full bg-gray-100 px-3 py-1 font-medium dark:bg-gray-800"
                    href={`/blog/categories/${blog.frontmatter.category}`}
                  >
                    {blog.frontmatter.category}
                  </Link>
                </div>
              </header>
              <div
                className="prose max-w-none dark:prose-invert"
                suppressHydrationWarning={true}
              >
                {blog.content}
              </div>
            </article>
          </div>
        </section>
      </Suspense>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CommentSection slug={params.slug} />
      </div>
    </>
  );
}
