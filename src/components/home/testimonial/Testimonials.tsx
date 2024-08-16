"use client";

import {
  testimonialData,
  testimonialSectionData,
} from "@/utils/data/testimonials/Testimonial";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import useCustomTheme from "@/hooks/useCustomTheme";
import { useEffect, useState } from "react";
import useResponsiveDuration from "@/hooks/useResponsiveDuration";

export const Testimonials = () => {
  const theme = useCustomTheme();
  // Gradients
  const gradients = {
    darkMode: "bg-testimonial-gradient-dark",
    lightMode: "bg-testimonial-gradient-light",
  };
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([
    0, 1,
  ]);

  const getNextTestimonials = (prev: number[]) => {
    return prev.map((index) => (index + 2) % testimonialData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTestimonials((prev) => getNextTestimonials(prev));
    }, 15000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  // Manejar la duración de la animación en base al tamaño de la pantalla
  const duration = useResponsiveDuration();

  return (
    <section className="py-8 sm:p-32 lg:py-2 lg:pb-12">
      <div className="container">
        <h2 className="text-center text-5xl font-medium tracking-tighter md:text-6xl">
          {testimonialSectionData.title}
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-center text-lg tracking-tight text-darkMode/70 dark:text-white/70 md:text-xl">
          {testimonialSectionData.description}
        </p>
        {/* Testimonials */}
        <div className="mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              duration, // ? Si son más testimonios, aumentar la duración
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-none -translate-x-1/2 gap-5"
          >
            {[...testimonialData, ...testimonialData].map(
              (testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={cn(
                    // Mostrar solo si está en visibleTestimonials
                    visibleTestimonials.includes(index)
                      ? ""
                      : "hidden sm:block",
                    "max-w-xs flex-none rounded-xl border border-white/15 p-6 dark:border-darkMode/15 md:max-w-md md:p-10",
                    `${theme === "dark" ? gradients.darkMode : gradients.lightMode}`,
                  )}
                >
                  <div className="text-lg tracking-tight md:text-2xl">
                    {testimonial.text}
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="relative before:absolute before:inset-0 before:z-10 before:rounded-lg before:border before:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light after:content-[''] before:dark:border-white/30">
                      <Image
                        src={testimonial.avatar}
                        alt={`Avatar de ${testimonial.name}`}
                        className="size-11 rounded-lg border border-r-darkMode/30 grayscale dark:border-white/30"
                      />
                    </div>
                    <div>
                      <div>{testimonial.name}</div>
                      <div className="text-sm dark:text-white/50">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
