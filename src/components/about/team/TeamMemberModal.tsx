"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  avatar: string | StaticImageData;
  name: string;
  title: string;
  description: string;
  matricula: string;
}

interface TeamMemberModalProps {
  member: TeamMember;
  onClose: () => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({
  member,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }} // Smooth transition for the modal
        className="relative w-full max-w-2xl overflow-hidden rounded-lg bg-white p-6 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900" // Added gradient for dark mode
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }} // Start above and invisible
          animate={{ y: 0, opacity: 1 }} // Move to original position and become visible
          exit={{ y: -20, opacity: 0 }} // Exit with the same animation
          transition={{ duration: 0.3, delay: 0.1 }} // Delay for the entrance
          className="mx-auto h-40 w-40 overflow-hidden rounded-full"
        >
          <Image
            src={member.avatar}
            alt={member.name}
            layout="responsive"
            width={160}
            height={160}
            objectFit="cover"
            className="rounded-full"
          />
        </motion.div>

        <motion.h3
          initial={{ y: 20, opacity: 0 }} // Start below and invisible
          animate={{ y: 0, opacity: 1 }} // Move to original position and become visible
          exit={{ y: 20, opacity: 0 }} // Exit with the same animation
          transition={{ duration: 0.3, delay: 0.2 }} // Delay for the entrance
          className="mt-4 text-center text-2xl font-bold text-gray-900 dark:text-white"
        >
          {member.name}
        </motion.h3>

        <motion.p
          initial={{ y: 20, opacity: 0 }} // Start below and invisible
          animate={{ y: 0, opacity: 1 }} // Move to original position and become visible
          exit={{ y: 20, opacity: 0 }} // Exit with the same animation
          transition={{ duration: 0.3, delay: 0.3 }} // Delay for the entrance
          className="mb-2 text-center text-gray-600 dark:text-gray-300"
        >
          {member.title}
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }} // Start below and invisible
          animate={{ y: 0, opacity: 1 }} // Move to original position and become visible
          exit={{ y: 20, opacity: 0 }} // Exit with the same animation
          transition={{ duration: 0.3, delay: 0.4 }} // Delay for the entrance
          className="mb-4 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          {member.description}
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }} // Start below and invisible
          animate={{ y: 0, opacity: 1 }} // Move to original position and become visible
          exit={{ y: 20, opacity: 0 }} // Exit with the same animation
          transition={{ duration: 0.3, delay: 0.5 }} // Delay for the entrance
          className="text-center text-xs text-gray-400 dark:text-gray-500"
        >
          {member.matricula}
        </motion.p>

        <div className="p-4">
          <button
            onClick={onClose}
            className="absolute bottom-4 left-4 rounded-lg bg-purple-600 px-4 py-2 text-white transition duration-300 hover:bg-purple-700"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamMemberModal;
