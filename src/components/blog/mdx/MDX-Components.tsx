"use client";

// Next Optimized Components
import Image, { ImageProps } from "next/image";
import Link from "next/link";

// Schemas
import {
  AlertProps,
  BlockQuoteProps,
  DividerProps,
  EnlaceProps,
  ParrafoProps,
  SubSeccionProps,
  SubTituloProps,
} from "@/schemas/BlogComponents/mdx-props";

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
  const typeStyles = {
    info: "bg-blue-100 text-blue-800 border-blue-400",
    success: "bg-green-100 text-green-800 border-green-400",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-400",
    error: "bg-red-100 text-red-800 border-red-400",
  };

  return (
    <div
      className={cn("rounded-md border-l-4 p-4", typeStyles[type], className)}
    >
      {children}
    </div>
  );
};

// ? Añadir más componentes según sea necesario (Listas, Tablas, etc.)
