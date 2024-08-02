import { getAllBlogSlug, getBlogBySlug } from "@/lib/fetchers";

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
    return <div>Blog post not found</div>;
  }

  return (
    <div className="flex items-center justify-center">
      <main className="prose flex items-center justify-center dark:prose-invert">
        <article>
          <h1>{blog.frontmatter.title}</h1>
          <p>{blog.frontmatter.author}</p>
          <p>{blog.frontmatter.publishDate}</p>
          <p>{blog.frontmatter.category}</p>
          {blog.content}
        </article>
      </main>
    </div>
  );
}
