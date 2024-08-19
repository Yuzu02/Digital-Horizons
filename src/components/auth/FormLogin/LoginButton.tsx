"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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
      toast.error("Ocurrió un error inesperado");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Button
        type="button"
        size="lg"
        className="rounded bg-secondary px-4 py-2 hover:bg-secondary-hover dark:bg-secondary-dark dark:hover:bg-secondary-hover"
        onClick={handleLogin}
      >
        <p>{icon}</p>
      </Button>
    </div>
  );
};

export default LoginButton;
