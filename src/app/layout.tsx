// Necessary imports
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// Required for the entire app
import "@/styles/globals.css";
import "@/schemas/env";

// Providers
import SessionWrapper from "@/components/provider/SessionWrapper";
import { ThemeProvider } from "@/components/provider/theme-provider";
import ToasterProvider from "@/components/provider/ToasterProvider";

// Layout components
import Header from "@/components/layout/Header";
// ? import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Digital Horizons",
  description: "A tech blog using Next.js , TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // - Body transition classes : "dark:transition-theme-light transition-theme-dark" // ? Standby until hydration is fixed
  return (
    <SessionWrapper>
      <html lang="en" suppressHydrationWarning>
        <body className={`${poppins.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange //? Para habilitar las animaciones de transición de tema
          >
            <Header />
            {children}
            <ToasterProvider />
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
