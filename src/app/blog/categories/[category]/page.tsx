// /app/blog/categories/[category]/page.tsx

import { getAllCategories, getBlogbyCategory } from "@/lib/fetchers";
import CategoryPageContent from "@/components/blog/categories/CategoryPage";

type CategoryParams = Promise<{ category: string }>;

export default async function CategoryPage({
  params,
}: Readonly<{
  params: CategoryParams;
}>) {
  const { category } = await params;
  const categoryPosts = await getBlogbyCategory(category);

  return <CategoryPageContent category={category} posts={categoryPosts} />;
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category,
  }));
}
