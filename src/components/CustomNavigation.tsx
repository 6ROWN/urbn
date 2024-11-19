import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwiper } from "swiper/react";

const CustomNavigation = () => {
  const swiper = useSwiper();

  const handlePrev = () => {
    if (swiper != null) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper != null) {
      swiper.slideNext();
    }
  };

  return (
    <>
      <div
        onClick={handlePrev}
        className=" absolute left-0 top-1/2 transform -translate-y-1/2 bg-custom-orange text-white p-2 rounded-full cursor-pointer hover:bg-custom-yellow z-10"
      >
        <ChevronLeft />
      </div>

      <div
        onClick={handleNext}
        className=" absolute right-0 top-1/2 transform -translate-y-1/2 bg-custom-orange text-white p-2 rounded-full cursor-pointer hover:bg-custom-yellow z-10"
      >
        <ChevronRight />
      </div>
    </>
  );
};

export default CustomNavigation;
