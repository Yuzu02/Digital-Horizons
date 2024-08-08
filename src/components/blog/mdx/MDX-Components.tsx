"use server";

// Next Optimized Components
import Image, { ImageProps } from "next/image";
import Link from "next/link";

// Schemas
import { ParrafoProps } from "@/schemas/BlogComponents/mdx-props";

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
export const SubTitulo = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-3xl font-bold"> {children}</h2>;
};

// Sub-subtítulos
export const SubSeccion = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-2xl font-bold">{children}</h3>;
};

// Enlaces
export const Enlace = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href || "#"} className="text-blue-500 hover:underline">
      {children}
    </Link>
  );
};

// Párrafos
export const Parrafo = ({ children, italic, justify }: ParrafoProps) => {
  return (
    <p className={cn("text-lg", italic && "italic", justify && "text-justify")}>
      {children}
    </p>
  );
};

// Cita
export const BlockQuote = ({ children }: { children: React.ReactNode }) => {
  return (
    <blockquote className="border-l-4 border-purple-700 pl-4 text-sm italic">
      {children}
    </blockquote>
  );
};

// Imágenes
export const ImageMDX = ({ src, alt, width, height }: ImageProps) => {
  return (
    <Image
      // Requerido
      src={src} // ! No pasar rutas con (#, _ ) en el nombre de la imagen
      alt={alt}
      width={width}
      height={height}
      // Opcional
      className="object-cover"
      quality={100}
    />
  );
};

// Separador
export const Divider = () => {
  return <hr className="my-4 border-t border-gray-300 dark:border-gray-700" />;
};

// ? Añadir más componentes según sea necesario (Listas, Tablas, etc.)
