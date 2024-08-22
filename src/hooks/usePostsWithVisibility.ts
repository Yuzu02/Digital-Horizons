// src/hooks/usePostsWithVisibility.ts
import { useState, useEffect } from "react";
import { Blog } from "@/schemas/blog";

export function usePostsWithVisibility(limit: number = 4) {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/post?limit=${limit}`);
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setVisiblePosts(posts.length);
      } else {
        setVisiblePosts(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [posts.length]);

  return { posts, visiblePosts, isLoading, error };
}
