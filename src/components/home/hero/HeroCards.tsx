import { motion } from "framer-motion";

import { GlobeIcon, NewspaperIcon, StarIcon } from "./svg/HeroIcons";
import NumberTicker from "@/components/magicui/number-ticker";
import { stats } from "@/utils/data/home/constants";

export const HeroCards = () => {
  return (
    <section className="sm:mt-9 lg:mt-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-100 p-4 text-center shadow-md dark:border-gray-700 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:text-white sm:p-6"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 + index * 0.2, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {index === 0 && (
                <GlobeIcon className="mb-2 h-8 w-8 text-primary sm:h-10 sm:w-10" />
              )}
              {index === 1 && (
                <NewspaperIcon className="mb-2 h-8 w-8 text-primary sm:h-10 sm:w-10" />
              )}
              {index === 2 && (
                <StarIcon className="mb-2 h-8 w-8 text-primary sm:h-10 sm:w-10" />
              )}
              <h3 className="mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                <NumberTicker value={stat.number} />
              </h3>
              <p className="text-sm dark:text-gray-300 sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
