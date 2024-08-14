// DesktopNav.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaEnvelope, FaBlog, FaSearch } from "react-icons/fa";
import { ThemeModeToggle } from "@/components/theme/ThemeModeToggle";
import DHLogo from "./Logo/DHLogo";
import SearchBar from "@/components/blog/SearchBar";
import { headerLinks } from "@/utils/data/layout/constants";
import Link from "next/link";

const DesktopNav: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-24 bg-lightMode/10 shadow-lg backdrop-blur-md transition-all duration-300 dark:bg-darkMode/10">
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
              <NavItem
                href={headerLinks.navLinks[0].href}
                icon={<FaHome />}
                text={headerLinks.navLinks[0].name}
              />
              <NavItem
                href={headerLinks.navLinks[1].href}
                icon={<FaBlog />}
                text={headerLinks.navLinks[1].name}
              />
              <NavItem
                href={headerLinks.navLinks[2].href}
                icon={<FaEnvelope />}
                text={headerLinks.navLinks[2].name}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-darkMode transition-all duration-200 hover:text-gray-900 dark:text-lightMode dark:hover:text-white"
              >
                <FaSearch className="text-xl" />
              </motion.button>
              <ThemeModeToggle
                className="focus:ring-bg-transparent bg-transparent focus:bg-transparent dark:bg-transparent"
                icon="text-yellow-500 dark:text-primary"
              />
            </nav>
            <div className="flex items-center md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="mr-4 text-darkMode transition-all duration-200 hover:text-gray-900 dark:text-lightMode dark:hover:text-white"
              >
                <FaSearch className="text-xl" />
              </motion.button>
              <ThemeModeToggle
                className="focus:ring-bg-transparent bg-transparent focus:bg-transparent dark:bg-transparent"
                icon="text-yellow-500 dark:text-primary"
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isSearchOpen && <SearchBar onClose={() => setIsSearchOpen(false)} />}
      </AnimatePresence>
      <div className="h-4"></div>
    </motion.div>
  );
};

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, text }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link
        href={href}
        className="flex items-center space-x-2 text-darkMode transition-all duration-200 hover:text-gray-900 dark:text-lightMode dark:hover:text-white"
      >
        <motion.div
          className="text-xl"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 15 }}
        >
          {icon}
        </motion.div>
        <span className="font-medium">{text}</span>
      </Link>
    </motion.div>
  );
};

export default DesktopNav;
