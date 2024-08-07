import type { Config } from "tailwindcss";

// Extra Accent Colors (#ff0095 , #8800ff , #6f00ff , #00ffea , #ff00c3, #A14FF3)

// Extra Accent-Color Hover (#6112c9 , #6300e4)

// Extra Light Colors (#e6e6e6 , #cccccc, #c5bebe)

// Light Bg Colors (#FBFBFB, #F5F5F5)

// Dark Bg Colors (#1c1c22, #121212)

// Paleta de la imagen.
// [#00E2E0,#00A9F2, #172D9D, #787CFE, #48BED9]
// [#00A9F2, #172D9D, #787CFE, #48BED9, #00E2E0]

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
        // Paleta de colores - prueba
        primary: {
          DEFAULT: "#8800ff",
          dark: "#6f00ff",
          hover: "#55aaff",
        },
        secondary: {
          DEFAULT: "#ff00c3",
          dark: "#A14FF3",
          hover: "#55aaff",
        },
        accent: {
          DEFAULT: "#ff0095",
          dark: "#ff00c3",
          hover: "#55aaff",
        },
        list: {
          DEFAULT: "#A14FF3",
          dark: "#8800ff",
        },
        scrollArea: {
          DEFAULT: "#55aaff",
          dark: "#6f00ff",
        },
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(to right, #8800ff 0%, #ff0095 50%, #ff0095 50%, #8800ff 100%)",
      },
      backgroundSize: {
        200: "200% 100%",
      },
      backgroundPosition: {
        "right-center": "right center",
        "left-center": "left center",
      },
      transitionProperty: {
        "bg-position": "background-position",
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
