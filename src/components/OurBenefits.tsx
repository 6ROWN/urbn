import React from "react";
import { FaHandsHelping, FaShieldAlt, FaSmileBeam } from "react-icons/fa"; // Using icons from react-icons

const OurBenefits = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
        Why Choose URBN?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Benefit 1: Expertise and Experience */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="bg-blue-600 p-6 rounded-t-lg flex justify-center">
            <FaHandsHelping className="text-white text-4xl" />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Expertise & Experience
            </h3>
            <p className="text-gray-600">
              With years of industry experience, we provide expert guidance to
              help you make informed decisions when buying, selling, or renting
              a home.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Benefit 2: Trusted & Secure */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="bg-green-600 p-6 rounded-t-lg flex justify-center">
            <FaShieldAlt className="text-white text-4xl" />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Trusted & Secure
            </h3>
            <p className="text-gray-600">
              We prioritize security and transparency in all our transactions,
              ensuring you have peace of mind when dealing with any real estate
              matter.
            </p>
            <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Benefit 3: Customer Satisfaction */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
          <div className="bg-yellow-600 p-6 rounded-t-lg flex justify-center">
            <FaSmileBeam className="text-white text-4xl" />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Customer Satisfaction
            </h3>
            <p className="text-gray-600">
              We are committed to providing exceptional service, ensuring that
              our clients are happy and satisfied with their real estate
              experiences.
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

export default OurBenefits;
