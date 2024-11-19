import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { MapPinHouse } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 opacity-20 pointer-events-none">
        {/* Subtle grid patterns */}
        {Array(16)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={`border-l-2 border-b-2 ${
                index < 4
                  ? "border-white"
                  : index < 8
                  ? "border-gray-300"
                  : "border-gray-500"
              }`}
            ></div>
          ))}
      </div>

      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-60"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/10514386/pexels-photo-10514386.jpeg')",
        }}
      ></div>

      {/* Gradient Overlay to Enhance Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-12 max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-wider text-white drop-shadow-2xl">
          Find Your Dream Home,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-yellow to-custom-orange">
            Experience Luxury
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl  mb-12 max-w-2xl mx-auto font-light tracking-wider opacity-90">
          Discover exceptional properties in the world's most desirable
          locations. Let us help you find your perfect home.
        </p>

        {/* Search Form */}
        <form className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 w-full mb-12">
          <div className="relative w-full sm:w-1/3">
            <Input
              className="p-5 bg-custom-cream text-custom-green font-medium"
              placeholder="Search by city, neighborhood..."
            />

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              <MapPinHouse />
            </div>
          </div>

          <div className="relative w-full sm:w-1/4">
            <Select>
              <SelectTrigger className="w-full bg-custom-cream text-custom-green font-medium p-5">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">House</SelectItem>
                <SelectItem value="dark">Apartment</SelectItem>
                <SelectItem value="system">Condo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative w-full sm:w-1/4">
            <Button variant={"primary"} size={"base"} className="w-full">
              Browse Listings
            </Button>
          </div>
        </form>

        {/* Secondary CTA */}
        <div className="mt-8">
          <a
            href="#contact"
            className="text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Contact Us for Personalized Assistance
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
