"use client";
import { motion } from "framer-motion";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { BlogButton } from "@/components/blog/BlogButton";
import { HomePageData } from "@/utils/data/home/constants";

interface AvatarAndResourcesProps {
  avatarUrls: string[];
}

const AvatarAndResources = ({ avatarUrls }: AvatarAndResourcesProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="relative flex flex-col items-center justify-center space-y-4"
    >
      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        className="flex items-center space-x-4"
      >
        <AvatarCircles
          avatarUrls={avatarUrls}
          numPeople={3}
          className="my-3 md:my-0"
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mb-0 rounded-lg border border-gray-200 p-4 text-center shadow-lg dark:border-gray-700 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:text-white sm:mb-7"
      >
        <h2 className="mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-lg font-bold text-transparent">
          {HomePageData.resourcesTitle}
        </h2>
        <p className="text-muted-foreground mb-3 text-sm dark:text-gray-300">
          {HomePageData.resourcesDescription}
        </p>
        <BlogButton />
      </motion.div>
    </motion.div>
  );
};

export default AvatarAndResources;
