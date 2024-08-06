import type { Config } from "tailwindcss";

// Extra Accent Colors (#ff0095 , #8800ff , #6f00ff , #00ffea , #ff00c3, #A14FF3)

// Extra Accent-Color Hover (#6112c9 , #6300e4)

// Extra Light Colors (#e6e6e6 , #cccccc, #c5bebe)

// Light Bg Colors (#FBFBFB, #F5F5F5)

// Dark Bg Colors (#1c1c22, #121212)

const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
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
      animation: {
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
