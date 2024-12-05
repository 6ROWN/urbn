import SwiperImageSlider from "@/components/auth/SwiperImageSlider";
import AuthTabs from "@/components/auth/AuthTabs";
import OrDividerWithGoogleSignUpButton from "@/components/auth/OrDividerWithGoogleSignUpButton";

const UserAuth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e7e7e7]">
      <div className="flex w-full max-w-7xl bg-white rounded-xl shadow-lg overflow-hidden p-2.5">
        <SwiperImageSlider />
        <div className="w-1/2 flex flex-col items-center justify-center p-8 space-y-4">
          <AuthTabs />
          <OrDividerWithGoogleSignUpButton />
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
