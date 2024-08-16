"use client";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MotionCarouselItem = motion(CarouselItem);

export const MissionVisionValues = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-3xl"
        >
          <CarouselContent className="select-none">
            {["Mission", "Vision", "Values"].map((item) => (
              <MotionCarouselItem
                key={item}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full"
              >
                <motion.div
                  className="space-y-6 px-4 text-center"
                  variants={itemVariants}
                >
                  <motion.div
                    className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our {item}
                  </motion.div>
                  <motion.h2
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                    variants={itemVariants}
                  >
                    {item === "Mission" && "Empowering Businesses to Thrive"}
                    {item === "Vision" && "Transforming the Future of Business"}
                    {item === "Values" && "Integrity, Innovation, and Impact"}
                  </motion.h2>
                  <motion.p
                    className="mx-auto max-w-[700px] text-sm text-gray-600 sm:text-base md:text-lg lg:text-xl"
                    variants={itemVariants}
                  >
                    {item === "Mission" &&
                      "Our mission is to provide innovative solutions that help businesses of all sizes achieve their goals and reach new heights of success."}
                    {item === "Vision" &&
                      "We envision a world where businesses of all sizes have access to the tools and resources they need to thrive and innovate, driving positive change and transformation."}
                    {item === "Values" &&
                      "At the heart of our company are the values of integrity, innovation, and impact. We are committed to delivering high-quality solutions, driving continuous improvement, and making a positive difference in the lives of our clients and the communities we serve."}
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
