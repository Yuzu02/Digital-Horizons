import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Required for the entire app
import "@/styles/globals.css";
import "@/schemas/env";

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
