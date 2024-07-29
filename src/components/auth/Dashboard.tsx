"use client";

// Required
// ? import type { User } from "src/schemas/user";
import React from "react";

// Utils
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

// Components
import { Button } from "../ui/button";
import { FaAmazon } from "react-icons/fa";

// Dashboard component Example to test the authentication
export default function Dashboard() {
  const { data: session } = useSession();

  // Variables to simplify the code
  const name = session?.user?.name;
  const email = session?.user?.email;
  const image = session?.user?.image;

  return (
    <>
      {session ? (
        <>
          <Image
            src={image as string}
            className="h-20 w-20 rounded-full"
            alt="user image"
            width={80}
            height={80}
          ></Image>
          <FaAmazon className="text-5xl text-yellow-500" />
          <h1 className="text-3xl font-bold text-green-500">
            Bienvenido, {name}
          </h1>
          <p className="text-2xl font-semibold">{email}</p>
          <Button
            onClick={() => signOut()}
            className="rounded-lg border border-black bg-red-400 px-5 py-1"
          >
            Cerrar Session
          </Button>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-red-500">
            No haz iniciado sesión
          </h1>
          <div className="flex space-x-5">
            <Button
              type="button"
              variant="default"
              size="lg"
              className="bg-primary-dark hover:bg-primary-hover"
              onClick={() => signIn("google")}
            >
              Iniciar sesión con Google
            </Button>
            <Button
              onClick={() => signIn("github")}
              className="rounded-lg border border-black bg-green-500 px-5 py-1"
            >
              Iniciar sesión con Github
            </Button>
          </div>
        </>
      )}
    </>
  );
}
