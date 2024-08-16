import { FaChartPie, FaLaptopCode, FaRobot } from "react-icons/fa";

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
    name: "Ciencia de Datos",
    icon: FaChartPie,
    description:
      "Analiza grandes volúmenes de datos para tomar decisiones inteligentes.",
    href: "/blog/categories/Ciencia-de-Datos",
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
