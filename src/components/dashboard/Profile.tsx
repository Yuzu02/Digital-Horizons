import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface ProfileProps {
  image: string;
  name: string;
  email: string;
}

export default function Profile({
  image,
  name,
  email,
}: Readonly<ProfileProps>) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Image
        src={image}
        className="h-20 w-20 rounded-full"
        alt="user image"
        width={80}
        height={80}
      />
      <h1 className="text-3xl font-bold">Bienvenido, {name}</h1>
      <p className="text-2xl font-semibold">{email}</p>
      <Button
        onClick={() => signOut()}
        className="rounded-lg border border-black px-5 py-1"
      >
        Cerrar Sesión
      </Button>
    </div>
  );
}
