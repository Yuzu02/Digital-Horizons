import type { Metadata } from "next";
// Todo : Change default font
import { Inter } from "next/font/google";

// Required for the entire app
import "@/styles/globals.css";
import "@/schemas/env";

// Providers
import SessionWrapper from "@/components/provider/SessionWrapper";
import { ThemeProvider } from "@/components/provider/ThemeProvider";

// Layout components
// ? import Header from "@/components/layout/Header";
// ? import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>
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
