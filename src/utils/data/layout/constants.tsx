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
      name: "Inicio",
      href: "/",
      icon: <FaHome />,
    },
    {
      name: "Acerca",
      href: "/about",
      icon: <BsPeopleFill />,
    },
    {
      name: "Blog",
      href: "/blog",
      icon: <FaBlog />,
    },
    {
      name: "Contacto",
      href: "/contact",
      icon: <FaEnvelope />,
    },
  ],
} as const;

export const mobileNavLinks = {
  navLinks: [
    {
      name: "Inicio",
      href: "/",
      icon: <Home className="h-[1.2rem] w-[1.2rem]" />,
    },
    {
      name: "Acerca",
      href: "/about",
      icon: <Users className="h-[1.2rem] w-[1.2rem]" />,
    },
    {
      name: "Blog",
      href: "/blog",
      icon: <Pencil className="h-[1.2rem] w-[1.2rem]" />,
    },
    {
      name: "Contacto",
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
    name: "Inicio",
    href: "/",
  },
  {
    name: "Acerca",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contacto",
    href: "/contact",
  },
] as const;
