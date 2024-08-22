"use client";

import { useRouter } from "next/navigation";
import { UserSchema } from "@/schemas/user";
import Loader from "../common/Loader";
import Profile from "./Profile";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <Loader />;
  }

  if (!session) {
    router.push("/auth/");
    return null;
  }

  const validation = UserSchema.safeParse(session.user);
  if (!validation.success) {
    console.error("Invalid user data:", validation.error.errors);
    router.push("/auth/");
    return null;
  }

  const user = validation.data;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-h-full overflow-y-auto p-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="rounded-lg bg-white p-8 shadow-lg transition-colors duration-300 dark:bg-gray-800"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-4 text-center text-2xl font-bold dark:text-white"
        >
          Bienvenido a tu Dashboard
        </motion.h2>
        <div className="my-8 flex flex-col items-center gap-8 space-y-4 sm:flex-row sm:space-y-0">
          <motion.div
            className="flex items-center space-x-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Image
              src={user.image || "/default-avatar.png"}
              alt={user.name || "User"}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold dark:text-white">
                {user.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              onClick={() => signOut()}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white transition-colors duration-300 hover:bg-red-600"
            >
              Cerrar sesión
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Profile user={user} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
