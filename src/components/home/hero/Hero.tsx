"use client";
import { Button } from "@/components/ui/button";
import { avatarUrls, HomePageData, stats } from "@/utils/data/home/constants";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { TextEffect } from "@/components/magicui/TextEffect";
import WordRotate from "@/components/magicui/word-rotate";
import { ArrowRightIcon } from "@/components/home/hero/svg/HeroIcons";
import NumberTicker from "@/components/magicui/number-ticker";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8 md:p-14 lg:p-20 lg:py-20 lg:pb-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-medium"
            >
              {HomePageData.heroTitleSmall}
            </motion.p>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            >
              {HomePageData.heroTitleBig}
            </motion.h1>
            <WordRotate
              words={HomePageData.heroWords}
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl"
            />
            <TextEffect
              className="text-lg dark:text-gray-300"
              preset="blur"
              per="char"
            >
              {HomePageData.heroDescription}
            </TextEffect>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Button size="lg" className="mr-4 mt-4">
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="mt-4 dark:border-white dark:text-white"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Vertical Divider */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-gray-200 dark:bg-gray-700 lg:block"></div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-6"
          >
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
              className="flex items-center space-x-4"
            >
              <AvatarCircles avatarUrls={avatarUrls} numPeople={3} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card rounded-lg p-6 text-center shadow-lg dark:bg-gray-800 dark:text-white"
            >
              <h2 className="mb-2 text-xl font-bold">
                {HomePageData.resourcesTitle}
              </h2>
              <p className="text-muted-foreground mb-4 dark:text-gray-300">
                {HomePageData.resourcesDescription}
              </p>
              <Button
                variant="outline"
                className="dark:border-white dark:text-white"
              >
                {HomePageData.resourcesButtonLabel}{" "}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg p-6 text-center shadow-md dark:bg-gray-800 dark:text-white"
            >
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.5 }}
                className="mb-2 text-3xl font-bold"
              >
                <NumberTicker value={stat.number} />
              </motion.h3>
              <p className="dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
