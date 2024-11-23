import "swiper/swiper-bundle.css"; // Correct CSS import
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // Import Swiper styles
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const ExploreCities = () => {
  // Array of cities with an added `propertiesCount` to simulate the number of properties in each city
  const cities = [
    {
      id: 1,
      name: "New York City",
      img: "https://img.freepik.com/free-photo/manhattan-skyline_649448-1559.jpg",
      propertiesCount: 25,
    },
    {
      id: 2,
      name: "Los Angeles",
      img: "https://homelengonextjs.vercel.app/images/location/location-2.jpg",
      propertiesCount: 30,
    },
    {
      id: 3,
      name: "Miami",
      img: "https://img.freepik.com/free-photo/beautiful-miami-bayside-marketplace-scene_23-2151599584.jpg",
      propertiesCount: 18,
    },
    {
      id: 4,
      name: "Chicago",
      img: "https://images.pexels.com/photos/1823681/pexels-photo-1823681.jpeg",
      propertiesCount: 22,
    },
    {
      id: 5,
      name: "San Francisco",
      img: "https://img.freepik.com/free-photo/vertical-shot-golden-gate-bridge-cloudy-sky_181624-16017.jpg",
      propertiesCount: 28,
    },
    {
      id: 6,
      name: "Austin",
      img: "https://images.pexels.com/photos/421655/pexels-photo-421655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      propertiesCount: 12,
    },
    {
      id: 7,
      name: "Paris",
      img: "https://img.freepik.com/free-photo/eiffel-tower-paris-with-gorgeous-colors-autumn_268835-828.jpg?t=st=1732394304~exp=1732397904~hmac=1864d83d98299cb0b736b82e41ade948d96c29eefca16d93b2b652b0dd3676ef&w=360",
      propertiesCount: 12,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 ">
      <h3 className="text-center text-custom-orange ">Explore Cities</h3>
      <h2 className="text-3xl font-semibold text-center text-custom-green mb-8">
        Our Location For You
      </h2>

      {/* Swiper Container */}
      <Swiper
        spaceBetween={20} // Space between slides
        slidesPerView={1} // Default 1 slide per view (adjust based on screen size)
        breakpoints={{
          640: { slidesPerView: 2 }, // On screens 640px and up, show 2 slides per view
          768: { slidesPerView: 3 }, // On screens 768px and up, show 3 slides per view
          1024: { slidesPerView: 4 }, // On screens 1024px and up, show 4 slides per view
        }}
        loop={true} // Loop the slides
        autoplay={{
          delay: 3000, // Auto-swiping delay
        }}
        // Allow navigation (next/prev buttons)
        pagination={{ clickable: true, dynamicBullets: true }} // Enable pagination dots
        className="mySwiper "
        modules={[Pagination]}
      >
        {cities.map((city) => (
          <SwiperSlide key={city.id}>
            <div className=" shadow-xl rounded-lg overflow-hidden transform transition-transform  hover:shadow-2xl h-[400px] relative">
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
              <div className="space-y-4 absolute bg-transparent bottom-1 flex w-full rounded ">
                <div className="m-2 bg-custom-cream/60 w-full p-4 rounded-lg flex justify-between items-center">
                  <div className="">
                    <h1 className="font-light text-sm text-white">
                      {city.propertiesCount} Properties Available
                    </h1>
                    <h3 className="text-base font-medium text-custom-cream hover:text-custom-green transition-colors">
                      {city.name}
                    </h3>
                  </div>
                  <Button
                    variant={"outline"}
                    size="icon"
                    className="rounded-full hover:bg-custom-light-green   "
                  >
                    <ArrowRight
                      size={40}
                      className="text-custom-green hover:text-gray-100 font-semibold"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="mb-12"></div>
      </Swiper>
    </section>
  );
};

export default ExploreCities;
