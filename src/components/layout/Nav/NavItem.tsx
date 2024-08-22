"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavItemLineVariants } from "@/utils/animations/NavItemVariants";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

export const NavItem: React.FC<NavItemProps> = ({ href, icon, text }) => {
  const pathname = usePathname();

  // Nueva lógica para verificar si la ruta actual está dentro de la sección
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link
        href={href}
        className={`group flex items-center space-x-2 transition-transform duration-500 ${
          isActive
            ? ""
            : "text-darkMode hover:text-accent dark:text-lightMode dark:hover:text-accent-dark"
        }`}
      >
        <motion.div
          className="text-xl"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 15 }}
        >
          {icon}
        </motion.div>
        <span className="relative font-medium">
          {text}
          <motion.span
            variants={NavItemLineVariants}
            initial="inactive"
            animate={isActive ? "active" : "inactive"}
            whileHover={isActive ? "active" : "hover"}
            className="absolute bottom-0 left-0 h-0.5 bg-current"
          />
        </span>
      </Link>
    </motion.div>
  );
};
