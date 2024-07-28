"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

// Dashboard component Example to test the authentication

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          <Image
            src={session.user?.image as string}
            className="h-20 w-20 rounded-full"
            alt="user image"
            width={80}
            height={80}
          ></Image>
          <h1 className="text-3xl font-bold text-green-500">
            Welcome back, {session.user?.name}
          </h1>
          <p className="text-2xl font-semibold">{session.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="rounded-lg border border-black bg-red-400 px-5 py-1"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-red-500">
            You&rsquo;re not logged in
          </h1>
          <div className="flex space-x-5">
            <button
              onClick={() => signIn("google")}
              className="rounded-lg border border-black px-5 py-1"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => signIn("github")}
              className="rounded-lg border border-black bg-green-500 px-5 py-1"
            >
              Sign in with GitHub
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
