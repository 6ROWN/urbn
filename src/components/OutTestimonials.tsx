import React from "react";
import { FaStar } from "react-icons/fa"; // For star rating icons

const OurTestimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      location: "New York, NY",
      feedback:
        "URBN made my home buying process so easy and smooth. Their expertise in the market really helped me make an informed decision. I couldn’t be happier with my new home!",
      rating: 5,
      photo: "https://via.placeholder.com/100x100", // Placeholder image
    },
    {
      id: 2,
      name: "James Taylor",
      location: "San Francisco, CA",
      feedback:
        "The team at URBN helped me sell my property quickly and at the best price. Their attention to detail and knowledge of the market are unmatched. Highly recommend!",
      rating: 5,
      photo: "https://via.placeholder.com/100x100", // Placeholder image
    },
    {
      id: 3,
      name: "Emily Davis",
      location: "Los Angeles, CA",
      feedback:
        "I rented my apartment through URBN, and the experience was seamless. They made sure everything was handled efficiently and with care. I’ll definitely use them again for future real estate needs.",
      rating: 4,
      photo: "https://via.placeholder.com/100x100", // Placeholder image
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
        What People Say
      </h2>
      <p className="text-lg text-center text-gray-600 mb-12">
        Our seasoned team excels in real estate with years of successful market
        navigation, offering informed decisions and optimal results.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex justify-center mt-6">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-center items-center space-x-2 text-yellow-500">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {testimonial.name}
              </h3>
              <p className="text-center text-gray-500">
                {testimonial.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTestimonials;
