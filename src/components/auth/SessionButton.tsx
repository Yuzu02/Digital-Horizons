"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui";
import { ArrowRightIcon } from "lucide-react";

const SessionButton: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <motion.div
        className="inline-block h-8 w-32 rounded bg-gray-200 dark:bg-gray-700"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
    );
  }

  const buttonText = session ? "Dashboard" : "Iniciar sesión";
  const buttonHref = session ? "/dashboard" : "/auth";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={buttonHref}>
        <Button size="lg" className="mr-4 mt-4">
          {buttonText}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </motion.div>
  );
};

export default SessionButton;
