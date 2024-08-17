import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Que le digo es cn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Función para limpiar un string de caracteres especiales (Cambiar - , & por espacios )
export function capitalize(str: string): string {
  if (str.length <= 2) {
    return str.toUpperCase();
  }

  // Limpiar el string de caracteres especiales
  str = str.replace(/[-%20]/g, " ");

  // Capitalizar las palabras, excepto "y" y "e"
  str = str
    .split(" ")
    .map((word) => {
      if (word.toLowerCase() === "y" || word.toLowerCase() === "e") {
        return word.toLowerCase(); // Mantener "y" y "e" en minúsculas
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalizar la primera letra
    })
    .join(" ");
  str.replace(/-/g, " ");
  return str;
}

// Function to clean a string from special characters (replace -, &, %20 with spaces)
export function cleanString(str: string): string {
  const cleanedStr = str.replace(/[-%20]/g, " ");

  return capitalize(cleanedStr);
}

// Obviar texto largo
export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};
