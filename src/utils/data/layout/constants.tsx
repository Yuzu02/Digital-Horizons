import { FaHome, FaEnvelope, FaBlog } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { Home, Mail, Pencil, Users } from "lucide-react";

export const headerData = {
  name: "Digital Horizons",
};

// Todo : Revisar el orden y los iconos a utilizar ( El icono de about es de pruebas)

export const headerLinks = {
  navLinks: [
    {
      name: "Home",
      href: "/",
      icon: <FaHome />,
    },
    {
      name: "About",
      href: "/about",
      icon: <BsPeopleFill />,
    },
    {
      name: "Blog",
      href: "/blog",
      icon: <FaBlog />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <FaEnvelope />,
    },
  ],
} as const;

export const mobileNavLinks = {
  navLinks: [
    {
      name: "Home",
      href: "/",
      icon: <Home className="h-[1.2rem] w-[1.2rem]" />,
    },
    {
      name: "About",
      href: "/about",
      icon: <Users className="h-[1.2rem] w-[1.2rem]" />,
    },
    {
      name: "Blog",
      href: "/blog",
      icon: <Pencil className="h-[1.2rem] w-[1.2rem]" />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <Mail className="h-[1.2rem] w-[1.2rem]" />,
    },
  ],
} as const;

export const footerData = {
  year: new Date().getFullYear(),
  name: "Digital Horizons™",
  rights: "All rights reserved.",
};

export const footerItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
] as const;
