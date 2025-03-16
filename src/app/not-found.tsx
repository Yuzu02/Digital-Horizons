"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BiErrorAlt, BiArrowBack } from "react-icons/bi";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="from-background to-secondary/20 flex h-screen flex-col items-center justify-center bg-linear-to-b p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <BiErrorAlt className="text-primary text-9xl" />
        </motion.div>
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-primary mb-4 text-8xl font-bold"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground mb-8 text-xl"
        >
          La página que buscas no existe. Por favor, verifica la URL e inténtalo
          de nuevo.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/">
            <Button
              variant="default"
              size="lg"
              className="flex items-center gap-2"
            >
              <BiArrowBack className="text-xl" />
              Volver a la página de inicio
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
