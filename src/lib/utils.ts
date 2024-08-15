import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Función para limpiar un string de caracteres especiales (Cambiar - , & por espacios )
export function capitalize(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Function to clean a string from special characters (replace -, &, %20 with spaces)
export function cleanString(str: string): string {
  const cleanedStr = str.replace(/[-&%20]/g, " ");
  return capitalize(cleanedStr);
}
