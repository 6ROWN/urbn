import React from "react";

// Example logos (replace these with actual logo URLs)
const companyLogos = [
  "https://via.placeholder.com/100x50?text=Company+1",
  "https://via.placeholder.com/100x50?text=Company+2",
  "https://via.placeholder.com/100x50?text=Company+3",
  "https://via.placeholder.com/100x50?text=Company+4",
  "https://via.placeholder.com/100x50?text=Company+5",
  "https://via.placeholder.com/100x50?text=Company+6",
  "https://via.placeholder.com/100x50?text=Company+7",
  "https://via.placeholder.com/100x50?text=Company+8",
  "https://via.placeholder.com/100x50?text=Company+9",
  "https://via.placeholder.com/100x50?text=Company+10",
  "https://via.placeholder.com/100x50?text=Company+11",
  "https://via.placeholder.com/100x50?text=Company+12",
];

const TrustedBySection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          Trusted by over 150+ major companies
        </h2>

        {/* Company logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-center">
          {companyLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <img
                src={logo}
                alt={`Company ${index + 1}`}
                className="max-h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
