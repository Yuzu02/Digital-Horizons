import {
  FaRobot,
  FaChartPie,
  FaBitcoin,
  FaBullhorn,
  FaStar,
  FaLaptopCode,
  FaFire,
} from "react-icons/fa";

import { MdMotionPhotosAuto } from "react-icons/md";
import { SiVirtualbox } from "react-icons/si";

export const categories = [
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
    description: "Crea y desarrolla con las mejores prácticas de programación.",
    href: "/blog/categories/Desarrollo-Web-y-Aplicaciones",
  },
  {
    name: "IA",
    icon: FaRobot,
    description:
      "Descubre el futuro con la inteligencia artificial y sus innovaciones.",
    href: "/blog/categories/ia",
  },
  {
    name: "Internet de las Cosas",
    icon: FaFire,
    description: "Mantente al día con lo más caliente y novedoso del momento.",
    href: "/blog/categories/Internet-de-las-Cosas",
  },
  {
    name: "Robótica y Automatización",
    icon: MdMotionPhotosAuto,
    description:
      "La robótica y automatización han revolucionando la industria y la vida cotidiana.",
    href: "/blog/categories/Robotica-y-Automatizacion",
  },
  {
    name: "Redes Sociales y Marketing",
    icon: FaBullhorn,
    description: "Conquista el mercado online con estrategias innovadoras.",
    href: "/blog/categories/Redes-Sociales-y-Marketing",
  },
  {
    name: "Tecnología Financiera",
    icon: FaBitcoin,
    description:
      "Explora el mundo de las monedas digitales y sus oportunidades.",
    href: "/blog/categories/Tecnologia-Financiera",
  },
  {
    name: "Realidad Virtual y aumentada",
    icon: SiVirtualbox,
    description:
      "Entornos de simulaciones digitales, que transforman la manera en que aprendemos",
    href: "/blog/categories/Realidad-Virtual-y-Mundos-Digitales",
  },
  {
    name: "Tecnología e Innovación",
    icon: FaStar,
    description: "Opiniones y análisis detallados de los últimos productos.",
    href: "/blog/categories/Tecnologia-e-Innovacion",
  },
];
