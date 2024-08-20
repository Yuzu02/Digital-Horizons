"use client";

import { DigitalHorizonsData } from "@/utils/data/aboutUs/constants";
import { motion } from "framer-motion";

const DigitalHorizons = () => {
  return (
    <section className="flex items-center justify-center py-8 sm:mt-14 md:py-16 lg:py-20">
      <div className="w-full">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:text-6xlr mb-6 text-center text-5xl font-medium tracking-tighter"
          >
            Descubre Nuestro Mundo Digital
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-between space-y-6"
          >
            <div className="flex flex-col items-center space-y-4">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-6xl text-primary dark:text-primary-dark"
              >
                {DigitalHorizonsData.icon}
              </motion.div>
              <div className="text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-medium tracking-tighter"
                >
                  {DigitalHorizonsData.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-2 text-lg text-gray-600 dark:text-gray-400"
                >
                  {DigitalHorizonsData.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalHorizons;
