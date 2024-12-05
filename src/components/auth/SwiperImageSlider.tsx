import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";

const SwiperImageSlider = () => {
  const slides = [
    {
      imgSrc:
        "https://img.freepik.com/free-photo/sahara-desert-sunlight-blue-sky-morocco-africa_181624-27461.jpg",
      text: (
        <>
          Explore Homes, Find Happiness.
          <br />
          Your Path to a New Home Starts Here.
        </>
      ),
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/5071141/pexels-photo-5071141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Find Your Perfect Home, Anytime, Anywhere.",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "The Smart Way to Buy, Sell, and Rent Homes.",
    },
  ];

  return (
    <div className="relative w-1/2">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full ">
              <img
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 rounded-md "></div>
              <div className="absolute left-0 top-4 z-20 text-white bg-opacity-70 p-4 rounded-md w-full">
                <div className="flex justify-between items-center mx-4">
                  <div className="text-xl font-bold">URBN</div>
                  <Button
                    className="bg-black text-white flex"
                    variant={"primary"}
                    size={"sm"}
                  >
                    BACK TO WEBSITE
                    <ChevronsRight />
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-20 text-white text-3xl font-bold bg-opacity-70 p-4 rounded-md w-full text-center">
                {slide.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperImageSlider;
