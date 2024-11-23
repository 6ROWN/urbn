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
      photo:
        "https://img.freepik.com/free-photo/beautiful-smiling-african-american-female-with-crisp-hair-broad-smile-shows-white-teeth-wears-casual-t-shirt-spectacles-stands-wall-rejoices-having-day-off-woman-journalist-indoor_273609-15511.jpg",
    },
    {
      id: 2,
      name: "James Taylor",
      location: "San Francisco, CA",
      feedback:
        "The team at URBN helped me sell my property quickly and at the best price. Their attention to detail and knowledge of the market are unmatched. Highly recommend!",
      rating: 5,
      photo:
        "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg",
    },
    {
      id: 3,
      name: "Emily Davis",
      location: "Los Angeles, CA",
      feedback:
        "I rented my apartment through URBN, and the experience was seamless. They made sure everything was handled efficiently and with care. I’ll definitely use them again for future real estate needs.",
      rating: 4,
      photo:
        "https://img.freepik.com/free-photo/attractive-smiling-woman-yellow-sweater-pointing-herself-proudly-boastfully-show-off-bragging-own-achievement-standing-white-wall_176420-37590.jpg",
    },
  ];

  return (
    <section className="bg-custom-light-green">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-base font-medium uppercase text-center text-custom-orange mb-2">
          Testimonials
        </h2>
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          What People Say
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16">
          Our seasoned team excels in real estate with years of successful
          market navigation, offering informed decisions and optimal results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-2 hover:cursor-pointer"
            >
              <div className="flex justify-center mt-6">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 shadow-lg"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-center items-center space-x-2 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <FaStar key={index} className="text-xl" />
                  ))}
                </div>
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "{testimonial.feedback}"
                </p>
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {testimonial.name}
                </h3>
                <p className="text-center text-gray-500 text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12  mt-8">
          <div className="border-2 border-custom-green p-4 rounded-lg">
            <h1 className="font-bold text-4xl text-custom-green mb-2">500+</h1>
            <p className="text-lg">Users trust our properties</p>
          </div>
          <div className="border-2 border-custom-green p-4 rounded-lg">
            <h1 className="font-bold text-4xl text-custom-green mb-2">1200+</h1>
            <p className="text-lg">Expert property management</p>
          </div>
          <div className="border-2 border-custom-green p-4 rounded-lg">
            <h1 className="font-bold text-4xl text-custom-green mb-2">98%</h1>
            <p className="text-lg">User satisfaction and counting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTestimonials;
