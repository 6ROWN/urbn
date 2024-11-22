import React from "react";

// You can use icons from libraries like `react-icons` or `heroicons`. Below, we're using some simple placeholders.
import { FaHome, FaMoneyCheckAlt, FaSearch } from "react-icons/fa";
import { Button } from "./ui/button";

const OurServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h3 className="text-center text-custom-orange ">OUR SERVICES</h3>

      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
        What we Do?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Sell a Home */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transform transition-all hover:scale-105">
          <div className="bg-blue-600 p-6 rounded-t-lg flex justify-center">
            <FaHome className="text-white text-4xl" />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Sell Your Home
            </h3>
            <p className="text-gray-600">
              We provide an end-to-end solution to help you sell your property
              quickly and for the best price. Our team handles everything from
              listing to closing.
            </p>{" "}
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              Learn More
            </Button>
          </div>
        </div>

        {/* Rent a Home */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transform transition-all hover:scale-105">
          <div className="bg-green-600 p-6 rounded-t-lg flex justify-center">
            <FaSearch className="text-white text-4xl" />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Rent a Home</h3>
            <p className="text-gray-600">
              Looking for your next rental? Our wide range of rental properties
              makes it easy to find your next dream home, whether it's
              short-term or long-term.
            </p>
            <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Buy a Home */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transform transition-all hover:scale-105">
          <div className="bg-yellow-600 p-6 rounded-t-lg flex justify-center">
            <FaMoneyCheckAlt className="text-white text-4xl" />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Buy a Home</h3>
            <p className="text-gray-600">
              Whether you are a first-time homebuyer or looking to upgrade, we
              offer a variety of homes to match your needs and budget. Let us
              guide you through the process.
            </p>
            <button className="px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
