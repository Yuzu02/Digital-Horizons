"use client";

// Components
import { Moon, Sun } from "lucide-react"; // ? Se puede cambiar por iconos de react-icons
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toaster, toast } from "sonner";

// Hooks
import useCustomTheme from "@/hooks/useCustomTheme";
import { useTheme } from "next-themes";

export function ThemeModeToggle() {
  // Setup hooks
  const { setTheme } = useTheme();
  const theme = useCustomTheme();
  // Variables para el manejo de texto
  const toggleThemeText = "Cambiar tema";
  const lightThemeText = "Claro";
  const darkThemeText = "Oscuro";
  const systemThemeText = "Sistema";

  const toastMessages = {
    themeChangeToLightMode: "Tema cambiado a claro",
    themeChangeToDarkMode: "Tema cambiado a oscuro",
    themeChangeToSystemMode: "Tema cambiado a sistema",
  };

  /*
   *La idea seria mover todos los textos de la app a un index.ts en una carpeta data para manejarlo de forma centralizada
   */

  // Manejo de cookies para el tema
  function handleThemeCookieChange(newTheme: string): void {
    document.cookie = `NEXT_THEME=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">{toggleThemeText}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <DropdownMenuCheckboxItem
            onClick={() => {
              setTheme("light");
              handleThemeCookieChange("light");
              toast.success(toastMessages.themeChangeToLightMode, {
                duration: 2500,
              });
            }}
            checked={theme === "light"}
          >
            {lightThemeText}
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onClick={() => {
              setTheme("dark");
              handleThemeCookieChange("light");
              toast.success(toastMessages.themeChangeToDarkMode, {
                duration: 2500,
              });
            }}
            checked={theme === "dark"}
          >
            {darkThemeText}
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onClick={() => {
              setTheme("system");
              handleThemeCookieChange("");
              toast.success(toastMessages.themeChangeToSystemMode, {
                duration: 2500,
              });
            }}
            checked={theme === "system"}
          >
            {systemThemeText}
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="fixed right-4 top-4 z-50">
        <Toaster theme={theme} visibleToasts={3} duration={1500} />
      </div>
    </>
  );
}
