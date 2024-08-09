"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

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
        className="rounded bg-secondary px-4 py-2 hover:bg-secondary-hover dark:bg-secondary-dark dark:hover:bg-secondary-hover"
        onClick={() => handleLogin("/dashboard")}
      >
        <p>{icon}</p>
      </Button>
    </div>
  );
};

export default LoginButton;
