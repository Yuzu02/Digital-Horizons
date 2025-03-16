"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

type PresetType = "blur-sm" | "shake" | "scale" | "fade" | "slide";
// Limit the allowed HTML elements to prevent type recursion
type AllowedElements =
  | "p"
  | "div"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type TextEffectProps = {
  children: string;
  per?: "word" | "char";
  as?: AllowedElements;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: PresetType;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  "blur-sm": {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(12px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  },
  shake: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 0 },
      visible: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.5 } },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
};

const AnimationComponent: React.FC<{
  word: string;
  variants: Variants;
  per: "word" | "char";
}> = React.memo(({ word, variants, per }) => {
  if (per === "word") {
    return (
      <motion.span
        aria-hidden="true"
        variants={variants}
        className="inline-block whitespace-pre"
      >
        {word}
      </motion.span>
    );
  }

  return (
    <span className="inline-block whitespace-pre">
      {word.split("").map((char, charIndex) => (
        <motion.span
          key={`char-${charIndex}`}
          aria-hidden="true"
          variants={variants}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
});

AnimationComponent.displayName = "AnimationComponent";

export function TextEffect({
  children,
  per = "word",
  as = "p",
  variants,
  className,
  preset,
}: Readonly<TextEffectProps>) {
  const words = children.split(/(\S+)/);
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  // Common props for all motion components
  const commonProps = {
    initial: "hidden",
    animate: "visible",
    "aria-label": children,
    variants: containerVariants,
    className,
    children: words.map((word, wordIndex) => (
      <AnimationComponent
        key={`word-${wordIndex}`}
        word={word}
        variants={itemVariants}
        per={per}
      />
    )),
  };

  // Render the appropriate motion component based on the 'as' prop
  switch (as) {
    case "div":
      return <motion.div {...commonProps} />;
    case "span":
      return <motion.span {...commonProps} />;
    case "h1":
      return <motion.h1 {...commonProps} />;
    case "h2":
      return <motion.h2 {...commonProps} />;
    case "h3":
      return <motion.h3 {...commonProps} />;
    case "h4":
      return <motion.h4 {...commonProps} />;
    case "h5":
      return <motion.h5 {...commonProps} />;
    case "h6":
      return <motion.h6 {...commonProps} />;
    default:
      return <motion.p {...commonProps} />;
  }
}
