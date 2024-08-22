"use client";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import CommentForm from "./CommentForm";
import { usePathname } from "next/navigation";
import { useComments } from "@/hooks/useComments";
import {
  containerCommentsVariants,
  formCommentsVariants,
} from "@/utils/animations/CommentsVariants";
import {
  LoadMore,
  LoadLess,
  LoadingComments,
  LoginPrompt,
} from "@/components/blog/comments/extra";
import { CommentList, CommentSectionHeader } from "@/components/blog/comments";

export interface CommentProps {
  content: string;
  id: string;
  author: string;
  authorImage: string;
  createdAt: string;
  email: string;
}

export interface CommentSectionProps {
  slug: string;
}

export default function CommentSection({
  slug,
}: Readonly<CommentSectionProps>) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const {
    visibleComments,
    isLoading,
    handleAddComment,
    loadMoreComments,
    collapseComments,
    isExpanded,
    hasMore,
  } = useComments(slug);

  const handleSubmit = async (content: string) => {
    await handleAddComment(content);
  };

  return (
    <motion.div
      variants={containerCommentsVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto mt-8 max-w-2xl rounded-lg bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 sm:mt-12 sm:p-6 md:p-8"
    >
      <CommentSectionHeader />
      <AnimatePresence>
        {isLoading ? (
          <LoadingComments />
        ) : (
          <>
            {CommentList(visibleComments)}
            {hasMore && !isExpanded && <LoadMore load={loadMoreComments} />}
            {isExpanded && <LoadLess onCollapse={collapseComments} />}
          </>
        )}
      </AnimatePresence>
      {session ? (
        <motion.div variants={formCommentsVariants}>
          <CommentForm onSubmit={handleSubmit} />
        </motion.div>
      ) : (
        <LoginPrompt pathname={pathname} />
      )}
    </motion.div>
  );
}
