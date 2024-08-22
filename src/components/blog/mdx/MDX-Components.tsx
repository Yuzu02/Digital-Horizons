"use client";

// Next Optimized Components
import Image from "next/image";
// - import Image, { ImageProps } from "next/image";
import Link from "next/link";

// Third Party Components
import ReactPlayer from "react-player/youtube";

// Schemas
import {
  AccordionProps,
  AlertProps,
  BlockQuoteProps,
  DividerProps,
  EnlaceProps,
  ImagePropsExtended,
  ParrafoProps,
  SubSeccionProps,
  SubTituloProps,
  YouTubeVideoProps,
} from "@/schemas/components/mdx-props";

// Extra Components
import { icons, AlertIconType } from "@/components/blog/mdx/extra/AlertIcon";
import { ScrollLink } from "@/components/common/ScrollLink";
import { ProsConIcons } from "@/components/blog/mdx/extra/ProsConIcons";

// Utils
import { cn } from "@/lib/utils";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useCustomTheme from "@/hooks/useCustomTheme";

/*
 ? Estos componentes son utilizados por el compilador de MDX para renderizar el contenido.

  Todo: Añadir los componentes que se quieran usar en los archivos MDX y luego ir a /src/utils/BlogComponents.ts a importar dicho componente agregado y exportarlo en el objecto AllComponents.

  * Update: 11/08/2024
  
  ? Se añadieron los componentes: 
  - Indice
  - TablaComparativa
  - ProsCons
  - Accordion

  ? Están en preview, dependiendo del feedback se pueden cambiar o mejorar.

*/

// * Texto

// Títulos // ? Front-Matter Ya usa Titulo , no es necesario usar
export const Titulo = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-4xl font-bold text-purple-600">
      <span className="text-primary dark:text-primary-dark">► </span>
      {children}
    </h1>
  );
};

// Subtítulos
export const SubTitulo = ({ children, className, id }: SubTituloProps) => {
  return (
    <h2 id={id} className={cn("text-2xl font-bold", className)}>
      <span className="text-primary dark:text-primary-dark">► </span>
      {children}
    </h2>
  );
};

// SubSección
export const SubSeccion = ({ children, className, id }: SubSeccionProps) => {
  return (
    <h3 id={id} className={cn("text-xl font-bold", className)}>
      <span className="text-primary dark:text-primary-dark">► </span>
      {children}
    </h3>
  );
};

// Enlaces
export const Enlace = ({ children, href, className }: EnlaceProps) => {
  return (
    <Link
      href={href || "#"}
      className={cn("text-blue-500 hover:underline", className)}
    >
      {children}
    </Link>
  );
};

// Párrafos
export const Parrafo = ({ children, className }: ParrafoProps) => {
  return (
    <div
      suppressHydrationWarning={true}
      className={cn(
        "text-lg text-darkMode/70 antialiased dark:text-lightMode/70 sm:text-justify",
        className,
      )}
    >
      {children}
    </div>
  );
};

// Cita
export const BlockQuote = ({ children, className }: BlockQuoteProps) => {
  return (
    <blockquote
      className={cn(
        "border-l-4 border-accent pl-4 text-sm italic dark:border-accent-dark",
        className,
      )}
    >
      {children}
    </blockquote>
  );
};

// Imágenes
export const ImageMDX = ({
  src,
  alt,
  width,
  height,
  className,
  quality = 100,
  position = "center",
}: ImagePropsExtended) => {
  const positionStyles = {
    center: "mx-auto",
    left: "float-left",
    right: "float-right",
  };

  return (
    <div className={cn("my-2", positionStyles[position])}>
      <Image
        // Requerido
        src={src} // ! No pasar rutas con (#, _ ) en el nombre de la imagen
        alt={alt}
        width={width}
        height={height}
        // Opcional
        className={cn("", className)}
        quality={quality}
      />
    </div>
  );
};

// Separador
export const Divider = ({ className }: DividerProps) => {
  return (
    <hr
      className={cn(
        "my-4 border-t border-gray-300 dark:border-gray-700",
        className,
      )}
    />
  );
};

// Alert
export const Alert = ({ children, type = "info", className }: AlertProps) => {
  const typeStyles: Record<AlertIconType, string> = {
    info: "bg-blue-100 text-blue-800 border-blue-400 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-600",
    success:
      "bg-green-100 text-green-800 border-green-400 dark:bg-green-900 dark:text-green-300 dark:border-green-600",
    warning:
      "bg-yellow-100 text-yellow-800 border-yellow-400 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-600",
    error:
      "bg-red-100 text-red-800 border-red-400 dark:bg-red-900 dark:text-red-300 dark:border-red-600",
  };
  const Icon = icons[type as AlertIconType];
  return (
    <div
      className={cn(
        "flex items-center rounded-md border-l-4 p-4",
        typeStyles[type as AlertIconType],
        className,
      )}
    >
      <Icon className="mr-4 h-6 w-6 flex-shrink-0" />
      <div>{children}</div>
    </div>
  );
};

// Video
export const YouTubeVideo = ({ url }: YouTubeVideoProps) => {
  return (
    <div className="flex w-full justify-center">
      <ReactPlayer
        url={url}
        controls
        className="max-w-full"
        width="100%"
        height="auto"
        style={{ aspectRatio: "16 / 9" }}
      />
    </div>
  );
};

// bg-gray-100 dark:bg-gray-800 //? Por si se me olvida
// gradient //*  bg-gradient-to-l from-cyan-50 to-accent/5 // ? bg-list-gradient

// Accordion // ? Está en preview, dependiendo del feedback se pueden cambiar o mejorar.
export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useCustomTheme();

  const swithBetweenGradient = {
    light: "bg-list-gradient border-gray-300",
    dark: "dark:border-gray-700 dark:bg-list-dark",
  };

  return (
    <div
      className={cn(
        "mb-4 rounded-lg border p-4 shadow-lg",
        `${theme == "light" ? swithBetweenGradient.light : swithBetweenGradient.dark}`,
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between py-2 text-left text-lg font-semibold"
      >
        {title}
        <span className="text-accent dark:text-accent-dark">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-2 text-gray-800 dark:text-gray-300">{children}</div>
      </div>
    </div>
  );
};

// Indice // ? Está en preview, dependiendo del feedback se pueden cambiar o mejorar.
export const Indice = ({
  items,
}: {
  items: { title: string; link: string }[];
}) => {
  return (
    <div className="my-8 rounded-lg bg-gradient-to-r from-blue-50 via-cyan-50 to-accent/35 p-6 shadow-lg dark:from-gray-800 dark:to-indigo-900">
      <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
        Contenido
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={item.title} className="flex items-center">
            <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
              {index + 1}
            </span>
            <ScrollLink
              target={item.link}
              className="text-lg text-gray-700 underline transition-colors duration-200 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              {item.title}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Tabla de comparación // ? Está en preview, dependiendo del feedback se pueden cambiar o mejorar.
export const TablaComparativa = ({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) => {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            {headers.map((header) => (
              <th
                key={header}
                className="border border-gray-300 p-2 dark:border-gray-600"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={row.toString()}
              className={
                rowIndex % 2 === 0 ? "bg-gray-100 dark:bg-gray-900" : ""
              }
            >
              {row.map((cell) => (
                <td
                  key={cell.toString()}
                  className="border border-gray-300 p-2 dark:border-gray-600"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface ProsConsProps {
  pros: string[];
  cons: string[];
}

// Pros y Contras (Ventajas y Desventajas) // ? Está en preview, dependiendo del feedback se pueden cambiar o mejorar.
export const ProsCons = ({ pros, cons }: ProsConsProps) => {
  return (
    <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
      <div className="rounded-lg bg-green-100 p-4 shadow-md dark:bg-green-900">
        <h3 className="mb-4 flex items-center text-lg font-semibold text-green-800 dark:text-green-200">
          <ProsConIcons.ThumbsUp className="mr-2 text-xl" />
          Pros
        </h3>
        <ul className="space-y-3">
          {pros.map((pro) => (
            <li
              key={pro.toString()}
              className="flex items-start text-green-700 dark:text-green-300"
            >
              <ProsConIcons.CheckCircle className="mr-2 mt-1 flex-shrink-0 text-sm" />
              <span className="text-sm sm:text-base">{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg bg-red-100 p-4 shadow-md dark:bg-red-900">
        <h3 className="mb-4 flex items-center text-lg font-semibold text-red-800 dark:text-red-200">
          <ProsConIcons.ThumbsDown className="mr-2 text-xl" />
          Contras
        </h3>
        <ul className="space-y-3">
          {cons.map((con) => (
            <li
              key={con.toString()}
              className="flex items-start text-red-700 dark:text-red-300"
            >
              <ProsConIcons.TimesCircle className="mr-2 mt-1 flex-shrink-0 text-sm" />
              <span className="text-sm sm:text-base">{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Carrusel de citas // ? Está en preview, dependiendo del feedback se pueden cambiar o mejorar.
export const CarruselCitas = ({
  quotes,
}: {
  quotes: { text: string; author: string }[];
}) => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="my-8 rounded-lg bg-white p-6 shadow-lg transition-all duration-300 dark:bg-gray-800 sm:p-8 md:p-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-col items-center"
        >
          <motion.blockquote
            className="mb-4 text-center text-lg italic text-gray-700 dark:text-gray-300 sm:text-xl md:text-2xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            &quot;{quotes[currentQuote].text}&quot;
          </motion.blockquote>
          <motion.p
            className="font-semibold text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            — {quotes[currentQuote].author}
          </motion.p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 flex justify-between">
        <motion.button
          onClick={prevQuote}
          className="rounded-full bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Anterior
        </motion.button>
        <motion.button
          onClick={nextQuote}
          className="rounded-full bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Siguiente
        </motion.button>
      </div>
    </div>
  );
};

// Timeline
export const Timeline = ({
  events,
}: {
  events: { date: string; title: string; description: string }[];
}) => {
  return (
    <div className="relative justify-center">
      {events.map((event) => (
        <div key={event.description} className="mb-8 flex items-center">
          <div className="mr-4 flex flex-col items-center justify-center">
            <div className="h-full w-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-4 w-4 rounded-full bg-primary dark:bg-primary-dark"></div>
          </div>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {event.date}
            </span>
            <h4 className="text-lg font-semibold">{event.title}</h4>
            <p className="text-gray-700 dark:text-gray-300">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Galería de Imágenes
export const GaleriaImagenes = ({ images }: { images: string[] }) => {
  return <div>{images}</div>;
};

// ? Añadir más componentes según sea necesario (Listas, Tablas, etc.)
