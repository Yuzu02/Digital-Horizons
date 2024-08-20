"use client";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={onClose}
            >
              <FaTimes className="text-xl" />
            </button>
            <h2 className="mb-4 text-center text-xl font-semibold dark:text-white">
              ¡Inicia sesión para reaccionar!
            </h2>
            <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
              Para dar &quot;like&quot; a este post, necesitas estar
              autenticado.
            </p>
            <div className="flex justify-center">
              <Link href="/login">
                <button
                  onClick={onClose}
                  className="rounded bg-blue-500 px-6 py-2 text-white transition duration-200 hover:bg-blue-600"
                >
                  Iniciar sesión
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
