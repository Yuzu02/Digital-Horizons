"use client";

// Required
import React, { useEffect } from "react";

// Utils
import { useRouter } from "next/navigation";

// Schemas
import { UserSchema } from "@/schemas/user";
import Loader from "../common/Loader";
import Profile from "./Profile";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (!session) {
      router.push("/auth/");
    } else {
      // Validar que los datos del usuario sean correctos
      const validation = UserSchema.safeParse(session.user);

      // Si los datos del usuario no son correctos, redirigir a error
      if (!validation.success) {
        console.error("Invalid user data:", validation.error.errors);
        router.push("/auth/");
      }
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <Profile
      name={session?.user?.name as string}
      email={session?.user?.email as string}
      image={session?.user?.image as string}
    />
  );
}
