import { BedDouble, SquareDashed } from "lucide-react";
import { FaBed, FaBath } from "react-icons/fa";
import { GiSquare } from "react-icons/gi";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      name: "Luxury Villa in Beverly Hills",
      price: "$5,200,000",
      img: "https://homelengonextjs.vercel.app/images/banner/banner-property-3.jpg",
      bedrooms: 5,
      bathrooms: 6,
      sqft: 5500,
      location: "Beverly Hills, CA",
    },
    {
      id: 2,
      name: "Modern Downtown Apartment",
      price: "$850,000",
      img: "https://homelengonextjs.vercel.app/images/banner/banner-property-5.jpg",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      location: "Downtown, NYC",
    },
    {
      id: 3,
      name: "Spacious Family Home",
      price: "$1,200,000",
      img: "https://homelengonextjs.vercel.app/images/banner/banner-property-6.jpg",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      location: "Austin, TX",
    },
    {
      id: 4,
      name: "Beachfront Condo in Miami",
      price: "$1,800,000",
      img: "https://homelengonextjs.vercel.app/images/banner/banner-property-7.jpg",
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2200,
      location: "Miami Beach, FL",
    },
    {
      id: 5,
      name: "New York Penthouse",
      price: "$10,500,000",
      img: "https://homelengonextjs.vercel.app/images/banner/banner-property-8.jpg",
      bedrooms: 6,
      bathrooms: 5,
      sqft: 6500,
      location: "Manhattan, NY",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-lg font-medium text-center text-custom-orange mb-2">
        Top Properties
      </h2>
      <h2 className="text-3xl font-semibold text-center text-custom-green mb-8">
        Best Property Value
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={property.img}
              alt={property.name}
              className="w-full h-56 object-cover rounded-t-lg"
              loading="lazy" // Lazy loading for better performance
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                {property.name}
              </h3>
              <p className="text-lg text-gray-800 font-semibold">
                {property.price}
              </p>
              <div className="text-sm text-gray-600 space-x-4 flex items-center">
                <BedDouble className="h-5 w-5 text-gray-600" />
                <span>{property.bedrooms} Beds</span>
                <span className="mx-2">|</span>
                <FaBath className="h-5 w-5 text-gray-600" />
                <span>{property.bathrooms} Baths</span>
                <span className="mx-2">|</span>
                <SquareDashed className="h-5 w-5 text-gray-600" />
                <span>{property.sqft} sqft</span>
              </div>
              <p className="text-sm text-gray-500">{property.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
