import CommentSection from "@/components/blog/comments/CommentSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

  const publishDate = new Date(blog.frontmatter.publishDate).toLocaleDateString(
    "es-ES",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <section className="mt-12 flex min-h-screen flex-col items-center">
      <div className="w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8">
          <header className="mb-8 border-b border-gray-200 pb-8 dark:border-gray-700">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
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
              <time dateTime={blog.frontmatter.publishDate}>{publishDate}</time>
              <span>•</span>
              <Link
                className="rounded-full bg-gray-100 px-3 py-1 font-medium dark:bg-gray-800"
                href={`/blog/categories/${blog.frontmatter.category}`}
              >
                {blog.frontmatter.category}
              </Link>
            </div>
          </header>
          <section
            className="prose mx-auto max-w-6xl dark:prose-invert"
            suppressHydrationWarning={true}
          >
            {blog.content}
          </section>
        </article>
      </div>
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <CommentSection slug={params.slug} />
      </div>
    </section>
  );
}
