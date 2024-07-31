import type { Config } from "tailwindcss";

// Extra Accent Colors (#ff0095 , #8800ff , #6f00ff , #00ffea , #ff00c3, #A14FF3)

// Extra Accent-Color Hover (#6112c9 , #6300e4)

// Extra Light Colors (#e6e6e6 , #cccccc, #c5bebe)

// Light Bg Colors (#FBFBFB, #F5F5F5)

// Dark Bg Colors (#1c1c22, #121212)

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "968px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-poppins)",
    },
    extend: {
      colors: {
        // Todo : Light & Dark BG Backgrounds
        lightMode: "#FFFFF2", // default #FFFFF2 // 2  #FFFFF2
        darkMode: "#1c1c22", // default #1c1c22  // 2 #1c1c22

        // Todo : Paleta de colores de la UI
        primary: {
          DEFAULT: "#00A9F2",
          dark: "#172D9D",
          hover: "#787CFE",
        },
        secondary: {
          DEFAULT: "#FFD700",
          dark: "#FFD700",
          hover: "#FFD700",
        },
        accent: {
          DEFAULT: "#FFD700",
          dark: "#FFD700",
          hover: "#FFD700",
        },
        list: {
          DEFAULT: "#FFD700",
          dark: "#FFD700",
        },
        scrollArea: {
          DEFAULT: "#FFD700",
          dark: "#FFD700",
        },
      },
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
