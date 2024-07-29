import type { Metadata } from "next";
// Todo : Change default font

/* 
  Para cambiar fuentes primero quita la fuente en medio de import { } from "next/font/google";
  Luego puedes hacer control + espacio para ver las fuentes disponibles

  Para cambiar la fuente tienes que fijarte enn lo que pide la fuente, en este caso pide subsets y weight
  Haciendo hover sobre la fuente puedes ver que pide subsets y weight, en este caso pide subsets: ["latin"], weight: ["400", "900"]

  Luego debes cambiar la variable con los parámetros que pide la fuente, en este caso la variable es elsie

  Finalmente debes cambiar la clase de la fuente en el body, en este caso la clase es {elsie.className}

  @Yuzu02 Default font: Elsie
*/

import { Elsie } from "next/font/google";
// Required for the entire app
import "@/styles/globals.css";
import "@/schemas/env";

// Providers
import SessionWrapper from "@/components/provider/SessionWrapper";
import { ThemeProvider } from "@/components/provider/ThemeProvider";

// Layout components
// ? import Header from "@/components/layout/Header";
// ? import Footer from "@/components/layout/Footer";

const elsie = Elsie({
  subsets: ["latin"],
  weight: ["400", "900"],
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
        <body className={elsie.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange //? Disable theme transition on page load to prevent a flash of the default theme
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
