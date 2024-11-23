import React from "react";

const Footer2 = () => {
  return (
    <footer className="max-w-7xl mx-auto bg-white rounded-lg border border-lightened-green mb-6 text-gray-700 p-4">
      <div className="flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Urbn. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="hover:underline text-sm">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="hover:underline text-sm">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
