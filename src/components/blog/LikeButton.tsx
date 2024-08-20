import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { FaHeart } from "react-icons/fa";
import {
  getLikesForPost,
  addLikeToPost,
  removeLikeFromPost,
} from "@/lib/likes";
import AuthModal from "@/components/auth/AuthModal";
import { toast } from "sonner";

interface LikeButtonProps {
  slug: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ slug }) => {
  const { data: session } = useSession();
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Estado para el modal

  useEffect(() => {
    const fetchLikes = async () => {
      const likesData = await getLikesForPost(slug);
      setLikes(likesData.length);
      setIsLiked(likesData.some((like) => like.email === session?.user?.email));
    };

    fetchLikes();
  }, [slug, session]);

  const handleLike = async () => {
    if (session?.user) {
      const email = session?.user?.email ?? "";
      const username = session?.user?.name ?? "";

      if (isLiked) {
        await removeLikeFromPost(slug, username, email);
        toast.error("Reacción eliminada del post");
      } else {
        await addLikeToPost(slug, email, username);
        toast.success("Reacción añadida al post");
      }
      setIsLiked(!isLiked);
      setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    } else {
      setIsModalOpen(true); // Abrir el modal si no hay sesión
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleLike}
        className={`flex items-center space-x-2 rounded-full p-2 transition-colors duration-200 ${isLiked ? "text-red-500" : "text-gray-500 hover:text-red-500"}`}
      >
        <FaHeart
          className={`text-2xl ${isLiked ? "text-red-500" : "text-gray-500 dark:text-gray-400"}`}
        />
        <span className={"text-gray-500 dark:text-gray-400"}>{likes}</span>
      </button>
      <AuthModal isOpen={isModalOpen} onClose={closeModal} />{" "}
      {/* Renderizar el modal */}
    </>
  );
};

export default LikeButton;
