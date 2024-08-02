import Link from "next/link";
import { getBlogs } from "../../lib/fetchers";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  // Ordenar los blogs por fecha de publicación de forma descendente
  blogs.sort(
    (a, b) =>
      new Date(b.frontmatter.publishDate).getTime() -
      new Date(a.frontmatter.publishDate).getTime(),
  );

  return (
    <main>
      {blogs.map((blog) => (
        <article
          key={blog.frontmatter.title}
          className="grid grid-cols-4 items-center justify-center gap-4 text-3xl"
        >
          <div className="col-span-3">
            <h1 className="text-left">{blog.frontmatter.title}</h1>
            <p>{blog.frontmatter.author}</p>
            <p>{blog.frontmatter.publishDate}</p>
          </div>
          <div className="col-span-1 flex justify-end">
            <Link href={`/blog/post/${blog.slug}`}>Read More</Link>
          </div>
        </article>
      ))}
    </main>
  );
}
