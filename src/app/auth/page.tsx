"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { redirect } from "next/navigation";
//?* Future implementation import { Redirect } from "next";

export const Page = () => {
  const { data: session } = useSession();

  return <>{session ? redirect("/") : redirect("/login")}</>;
};

export default Page;
