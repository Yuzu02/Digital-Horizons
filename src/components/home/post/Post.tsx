"use client";

import { usePostsWithVisibility } from "@/hooks/usePostsWithVisibility";
import Loader from "@/components/common/Loader";
import ErrorLoading from "@/components/common/ErrorLoading";
import PostCard from "./PostCard";

export default function Post() {
  const { posts, visiblePosts, isLoading, error } = usePostsWithVisibility();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorLoading message="Error al cargar los posts" />;
  }

  return (
    <section>
      <h2 className="mb-4 text-center text-5xl font-medium tracking-tighter md:text-6xl">
        Posts más recientes
      </h2>
      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 md:gap-8 md:p-6 lg:grid-cols-3 lg:px-28 lg:pb-12">
        {posts.slice(0, visiblePosts).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
