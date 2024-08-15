"use client";

import {
  featureData,
  featuresSectionData,
} from "@/utils/data/features/constants";
import { FeatureItem } from "@/components/home/Features/FeaturesItem";
import { motion } from "framer-motion";

// Todo : @Nova034 - Mejorar con la paleta de colores de la página

const Features = () => {
  return (
    <motion.div
      className="container mx-auto py-8 pl-8 pr-4 md:px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="mb-6 text-center text-4xl font-medium tracking-tighter md:text-5xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        {featuresSectionData.title}
      </motion.h2>
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-3xl" />
        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
          {featureData.map((feature, index) => (
            <FeatureItem key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Features;
