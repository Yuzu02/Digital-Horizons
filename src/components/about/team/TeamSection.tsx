// TeamSection.tsx
"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { teamData, teamMembers } from "@/utils/data/aboutUs/team";
import TeamMemberModal from "./TeamMemberModal";

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  avatar: string | StaticImageData;
  description: string;
  matricula: string;
}

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center md:mb-12"
        >
          <h2 className="mb-6 text-center text-4xl font-medium tracking-tighter md:text-5xl">
            {teamData.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 md:text-xl">
            {teamData.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 px-2 sm:px-0 md:flex md:flex-wrap md:justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer"
              onClick={() => openModal(member)}
            >
              <div className="group relative aspect-square overflow-hidden rounded-full transition-all duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-gray-700 sm:h-48 sm:w-48 md:h-60 md:w-60">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="px-2 text-center text-lg font-semibold text-white sm:text-xl md:text-xl">
                    {member.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <TeamMemberModal member={selectedMember} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
