"use client";
import { avatarUrls, HomePageData } from "@/utils/data/home/constants";
import { TextEffect } from "@/components/magicui/TextEffect";
import WordRotate from "@/components/magicui/word-rotate";
import { motion } from "framer-motion";
import SessionButton from "@/components/auth/SessionButton";
import AboutUsButton from "@/components/about/team/AboutUsButton";
import { HeroCards } from "./HeroCards";
import AvatarAndResources from "./AvatarsAndResources";
import GradualSpacing from "@/components/magicui/gradual-spacing";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8 md:p-14 lg:p-20 lg:py-[120px] lg:pb-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative grid grid-cols-1 gap-6 lg:mb-1 lg:grid-cols-2 lg:gap-8">
          {/* Contenido del Hero */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-4 text-center lg:text-left"
          >
            <GradualSpacing
              text={HomePageData.heroTitleSmall}
              className="items-center text-center font-medium text-gray-600 dark:text-gray-300 md:items-start md:text-center lg:text-lg"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-center text-2xl font-bold leading-tight text-transparent dark:from-gray-100 dark:to-gray-400 md:text-left md:text-4xl lg:text-5xl"
            >
              <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl">
                Explora las fronteras de la{" "}
                <span className="inline-block whitespace-nowrap align-middle">
                  <WordRotate
                    words={HomePageData.heroWords}
                    className="relative -top-[0.06em] inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl"
                  />
                </span>
              </h2>
            </motion.div>

            <TextEffect
              className="text-gray-700 dark:text-gray-300 sm:text-base lg:text-lg"
              preset="blur"
              per="char"
            >
              {HomePageData.heroDescription}
            </TextEffect>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex justify-center space-x-4 lg:justify-start"
            >
              <SessionButton />
              <AboutUsButton />
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-gradient-to-b from-gray-200 via-gray-400 to-gray-200 dark:from-gray-700 dark:via-gray-500 dark:to-gray-700 lg:block"></div>

          {/* Avatar y Recursos */}
          <AvatarAndResources avatarUrls={avatarUrls} />
        </div>
        {/* Espaciado adicional para evitar superposición */}
        <div className="mt-8 sm:mt-12">
          <HeroCards />
        </div>
      </div>
    </motion.div>
  );
}
