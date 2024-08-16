"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

export const NavItem: React.FC<NavItemProps> = ({ href, icon, text }) => {
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
