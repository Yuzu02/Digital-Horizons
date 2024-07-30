"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
//?* Future implementation import { Redirect } from "next";

export default function Auth() {
  const { data: session } = useSession();
  return session ? redirect("/") : redirect("/login");
}
