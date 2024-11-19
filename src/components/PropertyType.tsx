import "swiper/swiper-bundle.css"; // Correct CSS import
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // Import Navigation module
import CustomNavigation from "./CustomNavigation";

const propertyTypes = [
  {
    label: "Apartments",
    value: "apartment",
    imageUrl:
      "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
  },
  {
    label: "Houses",
    value: "house",
    imageUrl:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
  },
  {
    label: "Condos",
    value: "condo",
    imageUrl:
      "https://images.pexels.com/photos/434139/pexels-photo-434139.jpeg",
  },
  {
    label: "Townhomes",
    value: "townhome",
    imageUrl:
      "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
  },
  {
    label: "Studios",
    value: "studio",
    imageUrl:
      "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
  },
  {
    label: "Office",
    value: "office",
    imageUrl:
      "https://img.freepik.com/free-photo/modern-office-space-interior_158595-5206.jpg",
  },
  {
    label: "Luxury Homes",
    value: "luxury_home",
    imageUrl:
      "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg",
  },
];

const PropertyType = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Browse Property Types
      </h2>

      {/* Swiper Container */}
      <Swiper
        spaceBetween={20} // Space between cards
        slidesPerView="auto" // Display multiple cards based on container width
        loop={true} // Enable loop
        grabCursor={true} // Enable grab cursor
        centeredSlides={true} // Center the active slide
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 cards on small screens
          },
          768: {
            slidesPerView: 3, // 3 cards on medium screens
          },
          1024: {
            slidesPerView: 4, // 4 cards on large screens
          },
        }}
        modules={[Pagination, Navigation]} // Ensure Navigation is added
      >
        {propertyTypes.map((type) => (
          <SwiperSlide
            className="border border-custom-green p-2.5 md:p-1.5 rounded-xl"
            key={type.value}
          >
            <Link
              to={`/properties/${type.value}`}
              className="w-60 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={type.imageUrl}
                alt={type.label}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="p-2.5">
                <h3 className="text-lg font-medium text-custom-green text-center">
                  {type.label}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <CustomNavigation />
      </Swiper>
    </div>
  );
};

export default PropertyType;
