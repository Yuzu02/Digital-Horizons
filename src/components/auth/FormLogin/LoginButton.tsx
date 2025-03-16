"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { JSX } from "react";

interface LoginButtonProps {
  provider: string;
  icon: JSX.Element;
  returnUrl?: string;
}

const LoginButton = ({ provider, icon, returnUrl }: LoginButtonProps) => {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await signIn(provider, {
        redirect: false,
        callbackUrl: returnUrl,
      });

      if (result?.error) {
        toast.error("Error al iniciar sesión");
      } else if (result?.url) {
        toast.success("Sesión iniciada correctamente");
        router.push(result.url);
      }
    } catch (error) {
      toast.error(
        `${error instanceof Error ? error.message : "Error desconocido"}`,
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Button
        type="button"
        size="lg"
        className="bg-secondary hover:bg-secondary-hover dark:bg-secondary-dark dark:hover:bg-secondary-hover rounded-sm px-4 py-2"
        onClick={handleLogin}
      >
        <p>{icon}</p>
      </Button>
    </div>
  );
};

export default LoginButton;
