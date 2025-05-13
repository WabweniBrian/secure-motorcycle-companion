"use client";

import { Edit2 } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UpdateProfileImage from "./update-profile-image";

interface ProfileDetailsProps {
  user: {
    name: string;
    email: string;
    image: string;
  };
}

const ProfileDetails = ({ user }: ProfileDetailsProps) => {
  const [image, setImage] = useState(user?.image || "");
  const [editModal, setEditModal] = useState(false);

  return (
    <>
      <div className="mt-8 gap-x-4 rounded-xl border p-2 flex-align-center md:p-4">
        <label
          htmlFor="image"
          className="flex-shrink-0 cursor-pointer"
          onClick={() => setEditModal(true)}
        >
          <div className="relative">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user?.image!} alt={user?.name} />
              <AvatarFallback>{user?.name?.charAt(0) || "B"}</AvatarFallback>
            </Avatar>

            <div className="absolute bottom-0 right-0 z-10 grid h-8 w-8 cursor-pointer place-items-center rounded-full border-2 border-white bg-gray-900 text-white hover:bg-gray-900/80 dark:border-slate-950">
              <Edit2 className="w-4 h-4" />
            </div>
          </div>
        </label>
        <div>
          <h1 className="text-xl">{user?.name}</h1>
          <p className="text-sm">{user?.email}</p>
        </div>
      </div>

      {editModal && (
        <UpdateProfileImage
          editModal={editModal}
          setEditModal={setEditModal}
          image={image}
          setImage={setImage}
        />
      )}
    </>
  );
};

export default ProfileDetails;
