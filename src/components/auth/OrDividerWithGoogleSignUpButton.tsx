import { Button } from "@/components/ui/button";

const OrDividerWithGoogleSignUpButton = () => {
  return (
    <div className="space-y-2 w-[360px]">
      {/* OR Divider */}
      <div className="flex items-center justify-center space-x-2 my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Google Sign-Up Button */}
      <Button
        className="w-full py-3 bg-[#e7e7e7] text-black rounded-md hover:bg-black hover:text-[#e7e7e7] transition duration-300 flex justify-center items-center space-x-4"
        variant={"primary"}
        type="button"
      >
        <img src="/src/assets/images/google.png" className="w-5 h-5" />

        <span> Sign In with Google</span>
      </Button>
    </div>
  );
};

export default OrDividerWithGoogleSignUpButton;
