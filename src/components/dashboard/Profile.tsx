// components/Profile.tsx
import React from "react";
import { User } from "@/schemas/user";
import UserComments from "./UserComments";
import UserLikes from "./UserLikes";

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="flex flex-col space-y-8">
      <UserComments email={user.email} />
      <UserLikes email={user.email} />
    </div>
  );
};

export default Profile;
