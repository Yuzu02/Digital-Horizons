// DesktopNav.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { ThemeModeToggle } from "@/components/theme/ThemeModeToggle";
import DHLogo from "../Logo/DHLogo";
import SearchBar from "@/components/layout/SearchBar/SearchBar";
import { headerLinks } from "@/utils/data/layout/constants";
import { NavItem } from "@/components/layout/Nav/NavItem";

export const DesktopNav: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-lightMode/10 shadow-lg backdrop-blur-md transition-all duration-300 dark:bg-darkMode/10">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <motion.div
              className="mr-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DHLogo />
            </motion.div>
            <nav className="hidden items-center space-x-4 md:flex lg:space-x-8">
              {headerLinks.navLinks.map((link) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  icon={link.icon}
                  text={link.name}
                />
              ))}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-darkMode transition-transform duration-200 hover:text-gray-900 dark:text-lightMode dark:hover:text-white"
              >
                <FaSearch className="text-xl" aria-label="Search" />
              </motion.button>
              <ThemeModeToggle
                className="focus:ring-bg-transparent dark:focus:ring-bg-transparent border-none bg-transparent focus:bg-transparent dark:bg-transparent dark:focus:bg-transparent"
                icon="text-yellow-500 dark:text-sky-600"
              />
            </nav>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isSearchOpen && <SearchBar onClose={() => setIsSearchOpen(false)} />}
      </AnimatePresence>
    </motion.div>
  );
};
