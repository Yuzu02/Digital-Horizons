"use client";

import { motion } from "framer-motion";
import { FaHome, FaEnvelope, FaBlog } from "react-icons/fa";
import { ThemeModeToggle } from "../theme/ThemeModeToggle";
import DHLogo from "./Logo/DHLogo";
import Link from "next/link";

const DesktopNav: React.FC = () => {
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/20 shadow-lg backdrop-blur-md transition-all duration-300 dark:bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center">
            <motion.div
              className="mr-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DHLogo />
            </motion.div>
            <nav className="flex items-center space-x-8">
              <NavItem href="/" icon={<FaHome />} text="Home" />
              <NavItem href="/blog" icon={<FaBlog />} text="About" />
              <NavItem href="/contact" icon={<FaEnvelope />} text="Contact" />
              <ThemeModeToggle />
            </nav>
          </div>
        </div>
      </div>
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
        className="flex items-center space-x-2 text-gray-700 transition-all duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
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
