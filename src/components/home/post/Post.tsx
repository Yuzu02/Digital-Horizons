"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { usePostsWithVisibility } from "@/hooks/usePostsWithVisibility";
import Loader from "@/components/common/Loader";
import ErrorLoading from "@/components/common/ErrorLoading";

export default function Post() {
  const { posts, visiblePosts, isLoading, error } = usePostsWithVisibility();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorLoading message="Error al cargar los posts" />;
  }

  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 md:gap-8 md:p-6 lg:grid-cols-3">
      {posts.slice(0, visiblePosts).map((post) => (
        <Card
          key={post.slug}
          className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:bg-gray-900"
        >
          <Link
            href={`/blog/post/${post.slug}`}
            className="absolute inset-0 z-10"
            prefetch={false}
          >
            <span className="sr-only">Read article</span>
          </Link>
          <Image
            src={post.image}
            alt={`${post.title} - Blog post image`}
            width={360}
            height={240}
            className="h-48 w-full object-cover"
            style={{ aspectRatio: "360/240", objectFit: "cover" }}
          />
          <div className="bg-background p-4 dark:bg-gray-900">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white md:text-xl">
              {post.title}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 md:text-sm">
              Por {post.author} •{" "}
              {new Date(post.publishDate).toLocaleDateString()}
            </p>
            <div className="my-2 h-px bg-gray-200 dark:bg-gray-700" />
            <p className="text-xs text-gray-700 dark:text-gray-300 md:text-sm">
              {post.description}
            </p>
          </div>
        </Card>
      ))}
    </section>
  );
}
