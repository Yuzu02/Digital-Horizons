// Necessary imports
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// Required for the entire app
import "@/styles/globals.css";
import "@/schemas/env";

// Providers
import SessionWrapper from "@/components/provider/SessionWrapper";
import { ThemeProvider } from "@/components/provider/theme-provider";

// Layout components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// Metadata para SEO
export const metadata: Metadata = {
  title: "Digital Horizons",
  description: "A tech blog using Next.js , TypeScript, MDX and Tailwind CSS",
  authors: [{ name: "Yuzu", url: "https://github.com/Yuzu02" }], // ? Recuerden agregar sus datos
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "Tech Blog", "MDX"],
  applicationName: "Digital Horizons",
  publisher: "Vercel",
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
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange //? Para habilitar las animaciones de transición de tema
          >
            {/* <Header /> */}
            <Header />
            {children}
            {/* <Footer /> */}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
