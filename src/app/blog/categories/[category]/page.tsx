// /app/blog/categories/[category]/page.tsx

import { getAllCategories, getBlogbyCategory } from "@/lib/fetchers";
import CategoryPageContent from "@/components/blog/categories/CategoryPage";

export default async function CategoryPage({
  params,
}: Readonly<{
  params: { category: string };
}>) {
  const categoryPosts = await getBlogbyCategory(params.category);

  return (
    <CategoryPageContent category={params.category} posts={categoryPosts} />
  );
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category,
  }));
}
