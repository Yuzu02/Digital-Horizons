"use client";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  misionData,
  visionData,
  valuesData,
} from "@/utils/data/aboutUs/constants";
import {
  mvvContainerVariants,
  mvvItemVariants,
} from "@/utils/animations/MisionVisionValueVariants";

const MotionCarouselItem = motion(CarouselItem);

export const MissionVisionValues = () => {
  const data = [misionData, visionData, valuesData];

  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-4 md:px-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full"
        >
          <CarouselContent className="select-none">
            {data.map((item) => (
              <MotionCarouselItem
                key={item.title + 1}
                variants={mvvContainerVariants}
                initial="hidden"
                animate="visible"
                className="w-full"
              >
                <motion.div
                  className="space-y-4 text-center md:space-y-6"
                  variants={mvvItemVariants}
                >
                  <motion.div
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-3 py-1 text-sm text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                    <span>{item.title.split(" ")[0]}</span>
                  </motion.div>
                  <motion.h2
                    className="text-xl tracking-tight sm:text-2xl md:text-3xl lg:text-4xl"
                    variants={mvvItemVariants}
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    className="mx-auto max-w-full text-lg text-gray-600 dark:text-lightMode/60 sm:max-w-[700px] md:text-base lg:text-lg"
                    variants={mvvItemVariants}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </MotionCarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};
