import type { Metadata } from "next";
// Todo : Change default font

/* 
  Para cambiar las fuentes, primero elimina la fuente en la declaración de importación: 
  import { Elsie } from "next/font/google";
  Luego puedes usar control + espacio para ver las fuentes disponibles.

  Para cambiar la fuente, debes revisar los requisitos de la fuente. En este caso, requiere subsets y weight.
  Al pasar el cursor sobre la fuente, puedes ver que requiere subsets: ["latin"], weight: ["400", "900"].

  A continuación, debes cambiar la variable con los parámetros requeridos por la fuente. En este caso, la variable es elsie.
  Cambia la variable a la fuente que deseas utilizar.
  
  ? Nota : En el body tag, debes cambiar la variable de la fuente por la variable que has definido.
  * En este caso, la variable es elsie.variable.
 
  Es recomendable agregar la fuente como CSS variable , asi se tiene la fuente tanto en el css como en tailwind.config.ts.

  Por último, debes cambiar la propiedad font-family en el archivo tailwind.config.ts.

  @Yuzu02 Fuente predeterminada: Elsie
*/

import { Elsie } from "next/font/google";
// Required for the entire app
import "@/styles/globals.css";
import "@/schemas/env";

// Providers
import SessionWrapper from "@/components/provider/SessionWrapper";
import { ThemeProvider } from "@/components/provider/theme-provider";

// Layout components
// ? import Header from "@/components/layout/Header";
// ? import Footer from "@/components/layout/Footer";

const elsie = Elsie({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-elsie", // CSS variable para la fuente //? Cambiar si se cambia la fuente
});

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "A tech blog using Next.js , TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${elsie.variable} dark:transition-theme-light transition-theme-dark`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange //? Para deshabilitar la transición al cambiar de tema
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
