import { getBlogbyCategory } from "@/lib/fetchers";
import Link from "next/link";

export default async function CategoryPage({
  params,
}: Readonly<{
  params: { category: string };
}>) {
  const categoryPosts = await getBlogbyCategory(params.category);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">Categoría: {params.category}</h1>
      <ul>
        {categoryPosts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link href={`/blog/post/${post.slug}`}>
              <span className="text-blue-500 hover:underline">
                {post.frontmatter.title}
              </span>
            </Link>
            <p className="text-sm text-gray-600">
              Autor: {post.frontmatter.author} | Fecha:{" "}
              {post.frontmatter.publishDate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function generateStaticParams() {
  // Importa la función getAllBlogSlug si no está disponible en este ámbito
  const { getAllBlogSlug } = await import("@/lib/fetchers");
  const categories = getAllBlogSlug();
  return categories.map((category) => ({
    category: category.slug,
  }));
}
