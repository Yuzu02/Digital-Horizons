import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/components/ui/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: {
          default: "#00A9F2", // ?
          dark: "#172D9D",
          hover: "#787CFE",
        },
        secondary: {
          default: "#FFD700",
          dark: "#FFD700",
          hover: "#FFD700",
        },
        accent: {
          default: "#FFD700",
          dark: "#FFD700",
          hover: "#FFD700",
        },
        list: {
          default: "#FFD700",
          dark: "#FFD700",
        },
        scrollArea: {
          default: "#FFD700",
          dark: "#FFD700",
        },

        // Todo : Light & Dark BG Backgrounds
        light: "#FFFFF2", // default #FFFFF2 // 2  #FFFFF2
        dark: "#1c1c22", // default #1c1c22  // 2 #1c1c22
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
