import { FaBed, FaBath } from "react-icons/fa";
import { GiSquare } from "react-icons/gi";

const RecommendedForYou = () => {
  const recommendations = [
    {
      id: 1,
      name: "Modern Mountain Retreat",
      price: "$2,500,000",
      img: "https://images.pexels.com/photos/3663530/pexels-photo-3663530.jpeg",
      bedrooms: 4,
      bathrooms: 4,
      sqft: 4000,
      location: "Aspen, CO",
    },
    {
      id: 2,
      name: "Charming Countryside Cottage",
      price: "$550,000",
      img: "https://images.pexels.com/photos/3663530/pexels-photo-3663530.jpeg",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      location: "Napa Valley, CA",
    },
    {
      id: 3,
      name: "Urban Loft in San Francisco",
      price: "$1,200,000",
      img: "https://images.pexels.com/photos/3663530/pexels-photo-3663530.jpeg",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1300,
      location: "San Francisco, CA",
    },
    {
      id: 4,
      name: "Luxury Condo in Chicago",
      price: "$3,100,000",
      img: "https://images.pexels.com/photos/3663530/pexels-photo-3663530.jpeg",
      bedrooms: 3,
      bathrooms: 3,
      sqft: 3000,
      location: "Chicago, IL",
    },
    {
      id: 5,
      name: "Secluded Ranch in Montana",
      price: "$4,500,000",
      img: "https://images.pexels.com/photos/3663530/pexels-photo-3663530.jpeg",
      bedrooms: 6,
      bathrooms: 5,
      sqft: 7000,
      location: "Bozeman, MT",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
        Recommended For You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendations.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={property.img}
              alt={property.name}
              className="w-full h-48 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                {property.name}
              </h3>
              <p className="text-lg text-gray-800 font-semibold">
                {property.price}
              </p>
              <div className="flex items-center text-sm text-gray-600 space-x-4">
                <FaBed className="h-5 w-5 text-gray-600" />
                <span>{property.bedrooms} Beds</span>
                <span className="mx-2">|</span>
                <FaBath className="h-5 w-5 text-gray-600" />
                <span>{property.bathrooms} Baths</span>
                <span className="mx-2">|</span>
                <GiSquare className="h-5 w-5 text-gray-600" />
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

export default RecommendedForYou;
