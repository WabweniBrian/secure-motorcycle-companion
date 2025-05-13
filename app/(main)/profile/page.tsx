import PasswordChangeForm from "@/components/profile/password-change-form";
import ProfileDetails from "@/components/profile/profile-details";
import ProfileUpdateForm from "@/components/profile/profile-update-form";
import { getCurrentUser } from "@/lib/auth";

const Profile = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <div className="rounded-xl border bg-white/60 p-2 shadow dark:bg-accent/20 sm:p-4">
        <ProfileDetails
          user={{ name: user?.name!, email: user?.email!, image: user?.image! }}
        />
        <div className="mt-6">
          <ProfileUpdateForm
            user={{ name: user?.name!, email: user?.email! }}
          />
          <PasswordChangeForm />
          {/* <DeleteAccount /> */}
        </div>
      </div>
    </>
  );
};

export default Profile;
