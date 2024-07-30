"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { toast, Toaster } from "sonner";

interface LoginButtonProps {
  provider: string;
  icon: JSX.Element;
}

/*
 *La idea seria mover todos los textos de la app a un index.ts en una carpeta data para manejarlo de forma centralizada
 */

/* 

    Avance la lógica de los botones , puedes cambiar los iconos y demás ,
    pero la lógica de los botones es la misma ,

    @Nova034

    * Borrar el  componente Toaster luego de tener el header global , ya que se va a manejar de forma global en el header
*/

const LoginButton = ({ provider, icon }: LoginButtonProps) => {
  const handleLogin = (redirect: string) => {
    signIn(provider, {
      callbackUrl: redirect,
    });
    toast.loading("Iniciando sesión...");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Button
        type="button"
        size="lg"
        className="rounded bg-primary-dark px-4 py-2 hover:bg-primary-hover dark:bg-primary dark:hover:bg-primary-dark"
        onClick={() => handleLogin("/dashboard")}
      >
        <p className="mr-4">{icon}</p>
        {provider === "google"
          ? "Iniciar sesión con Google"
          : "Iniciar sesión con Github"}
      </Button>
      <Toaster />
    </div>
  );
};

export default LoginButton;
