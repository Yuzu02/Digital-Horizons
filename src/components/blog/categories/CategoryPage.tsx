"use client";

import { motion } from "framer-motion";
import { cleanString } from "@/lib/utils";
import { CategoryPageProps } from "@/schemas/blog";
import BlurFade from "@/components/magicui/blur-fade";
import AnimatedBlogCard from "../AnimatedBlogCard";

export default function CategoryPageContent({
  category,
  posts,
}: Readonly<CategoryPageProps>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 p-4 dark:bg-gray-900 sm:p-6 md:p-8 lg:p-10"
    >
      <div className="mx-auto mt-12 max-w-7xl">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="mb-6 text-center text-5xl font-medium tracking-tighter md:text-6xl"
        >
          Categoría: {cleanString(category)}
        </motion.h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlurFade key={post.slug} delay={0.25 + index * 0.05} inView>
              <AnimatedBlogCard blog={post} index={index} />
            </BlurFade>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
