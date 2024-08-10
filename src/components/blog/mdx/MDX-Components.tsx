"use client";

// Next Optimized Components
import Image, { ImageProps } from "next/image";
import Link from "next/link";

// Third Party Components
import ReactPlayer from "react-player/youtube";

// Schemas
import {
  AlertProps,
  BlockQuoteProps,
  DividerProps,
  EnlaceProps,
  ParrafoProps,
  SubSeccionProps,
  SubTituloProps,
  YouTubeVideoProps,
} from "@/schemas/BlogComponents/mdx-props";

// Extra Components
import { icons, AlertIconType } from "@/components/blog/mdx/extra/AlertIcon";

// Utils
import { cn } from "@/lib/utils";

/*
 ? Estos componentes son utilizados por el compilador de MDX para renderizar el contenido.

  Todo: Añadir los componentes que se quieran usar en los archivos MDX y luego ir a /src/utils/BlogComponents.ts a importar dicho componente agregado y exportarlo en el objecto AllComponents.

*/

// * Texto

// Títulos // ? Front-Matter Ya usa Titulo , no es necesario usar
export const Titulo = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-4xl font-bold text-purple-600">{children}</h1>;
};

// Subtítulos
export const SubTitulo = ({ children, className }: SubTituloProps) => {
  return <h2 className={cn("text-3xl font-bold", className)}>{children}</h2>;
};

export const SubSeccion = ({ children, className }: SubSeccionProps) => {
  return <h3 className={cn("text-2xl font-bold", className)}>{children}</h3>;
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
export const Parrafo = ({
  children,

  className,
}: ParrafoProps) => {
  return <p className={cn("text-justify text-lg", className)}>{children}</p>;
};

// Cita
export const BlockQuote = ({ children, className }: BlockQuoteProps) => {
  return (
    <blockquote
      className={cn(
        "border-l-4 border-purple-700 pl-4 text-sm italic",
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
}: ImageProps) => {
  return (
    <Image
      // Requerido
      src={src} // ! No pasar rutas con (#, _ ) en el nombre de la imagen
      alt={alt}
      width={width}
      height={height}
      // Opcional
      className={cn("object-cover", className)}
      quality={quality}
    />
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
// ? Añadir más componentes según sea necesario (Listas, Tablas, etc.)
