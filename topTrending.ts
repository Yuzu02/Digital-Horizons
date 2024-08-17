import { FaLaptopCode, FaRobot } from "react-icons/fa";
import { SiVirtualbox } from "react-icons/si";
// Define the Category type
type Category = {
  name: string;
  icon: React.ElementType;
  description: string;
  href: string;
};

// Top 3 trending categories
export const trendingCategories: Category[] = [
  {
    name: "Realidad Virtual",
    icon: SiVirtualbox,
    description:
      "Explorando el impacto de la realidad virtual en nuestra vida diaria y su crecimiento.",
    href: "/blog/categories/Realidad-Virtual&Mundos-Digitales",
  },
  {
    name: "Desarrollo Web y Aplicaciones",
    icon: FaLaptopCode,
    description:
      "Crea y desarrolla con las mejores prácticas de programación y lleva tus ideas al siguiente nivel.",
    href: "/blog/categories/Desarrollo-Web&Aplicaciones",
  },
  {
    name: "IA",
    icon: FaRobot,
    description:
      "Descubre el futuro con la inteligencia artificial y sus innovaciones.",
    href: "/blog/categories/ia",
  },
];
