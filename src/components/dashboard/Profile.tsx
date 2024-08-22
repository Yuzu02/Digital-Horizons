// components/Profile.tsx

import { User } from "@/schemas/user";
import UserComments from "./UserComments";
import UserLikes from "./UserLikes";

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <UserComments email={user.email} />
      <UserLikes email={user.email} />
    </div>
  );
};

export default Profile;
