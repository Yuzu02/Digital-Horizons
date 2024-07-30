"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";

export default function Auth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Espera a que se cargue la sesión

    if (session) {
      router.push("/"); // Redirige si hay sesión
    } else {
      router.push("/login"); // Redirige a login si no hay sesión
    }
  }, [session, status, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader />
    </div>
  );
}
