"use client";

// Required
import React from "react";

// Utils
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

// Components
import { Button } from "../ui/button";
import ErrorPage from "./error/ErrorPage";

// Schemas
import { UserSchema } from "@/schemas/user";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return redirect("/auth/");
  }

  // Validar que los datos del usuario sean correctos
  const validation = UserSchema.safeParse(session.user);

  // Si los datos del usuario no son correctos, mostrar un mensaje de error
  if (!validation.success) {
    console.error("Invalid user data:", validation.error.errors);
    return (
      // Show error message
      <ErrorPage
        error="Error al cargar los datos del usuario"
        errorMessage="Información del usuario no válida o incompleta"
        buttonText="Volver a iniciar sesión"
        redirectTo="/auth/"
      />
    );
  }

  const { name, email, image } = validation.data;

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Image
        src={image}
        className="h-20 w-20 rounded-full"
        alt="user image"
        width={80}
        height={80}
      />
      <h1 className="0 text-3xl font-bold">Bienvenido, {name}</h1>
      <p className="text-2xl font-semibold">{email}</p>
      <Button
        onClick={() => signOut()}
        className="rounded-lg border border-black px-5 py-1"
      >
        Cerrar Session
      </Button>
    </div>
  );
}
