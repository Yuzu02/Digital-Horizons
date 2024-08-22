import { Variants } from "framer-motion";

// Blog Card Variants
export const blogCardParticleVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

// Post Card Component Variants
export const postCardContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const postImageVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

export const postCardOverlayVariants = {
  hidden: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
};

export const postCardContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
