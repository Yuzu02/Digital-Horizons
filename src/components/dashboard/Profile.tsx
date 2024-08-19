// components/Profile.tsx
import React from "react";
import { User } from "@/schemas/user";
import UserComments from "./UserComments";

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div>
      <UserComments email={user.email} />
    </div>
  );
};

export default Profile;
