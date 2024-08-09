import { getAllBlogSlug, getBlogBySlug } from "@/lib/fetchers";
import Link from "next/link";
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
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <main className="prose prose-lg dark:prose-invert">
          <article className="space-y-8">
            <header className="mb-8 border-b border-gray-200 pb-8 dark:border-gray-700">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                {blog.frontmatter.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
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
            <div className="prose-content">{blog.content}</div>
          </article>
        </main>
      </div>
    </div>
  );
}
