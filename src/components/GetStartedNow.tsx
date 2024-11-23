import React from "react";
import { Button } from "./ui/button";

// GetStartedNow Component with custom colors
const GetStartedNow = () => {
  return (
    <section className="max-w-7xl mx-auto rounded-lg bg-lightened-green text-white py-16 mb-8">
      <div className=" px-4 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="text-lg mb-8">
          Whether you're buying, selling, or renting, we're here to help you
          every step of the way. Get in touch with our team of experts to begin
          your journey today.
        </p>
        <Button
          variant={"primary"}
          className="bg-custom-light-green text-custom-green py-6"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default GetStartedNow;
