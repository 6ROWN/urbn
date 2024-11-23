import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa"; // Import social icons
import { Button } from "./ui/button";

// Sample data for team members, now including contact details (email and phone)
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Real Estate Agent",
    photo: "https://images.pexels.com/photos/32976/pexels-photo.jpg",
    email: "johndoe@example.com",
    phone: "+1 (123) 456-7890",
    social: {
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Sales Manager",
    photo:
      "https://img.freepik.com/free-photo/businesswoman-executive-professional-success-concept_53876-137644.jpg",
    email: "janesmith@example.com",
    phone: "+1 (987) 654-3210",
    social: {
      twitter: "https://twitter.com/janesmith",
      instagram: "https://instagram.com/janesmith",
      facebook: "https://facebook.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Property Consultant",
    photo:
      "https://img.freepik.com/free-photo/elegant-man-suit-arms-crossed_1149-1591.jpg",
    email: "michaelbrown@example.com",
    phone: "+1 (555) 123-4567",
    social: {
      twitter: "https://twitter.com/michaelbrown",
      instagram: "https://instagram.com/michaelbrown",
      facebook: "https://facebook.com/michaelbrown",
      linkedin: "https://linkedin.com/in/michaelbrown",
    },
  },
  {
    id: 4,
    name: "Emily Clark",
    role: "Marketing Specialist",
    photo:
      "https://img.freepik.com/free-photo/happy-joyful-manager-with-tablet-posing-outside_74855-2281.jpg",
    email: "emilyclark@example.com",
    phone: "+1 (555) 765-4321",
    social: {
      twitter: "https://twitter.com/emilyclark",
      instagram: "https://instagram.com/emilyclark",
      facebook: "https://facebook.com/emilyclark",
      linkedin: "https://linkedin.com/in/emilyclark",
    },
  },
];

const OurTeams = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <div className="text-base font-medium uppercase text-center text-custom-orange mb-2">
        Our Teams
      </div>
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
        Meet Our Agents
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group bg-slate-50 shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl relative "
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-56 object-fill"
            />
            <div className="flex justify-between items-start p-4 space-y-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="text-custom-orange"
                >
                  <FaEnvelope />
                </Button>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="text-custom-yellow"
                >
                  <FaPhoneAlt />
                </Button>
              </div>
            </div>

            {/* Social Icons - Displayed on Hover */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-custom-cream py-2 px-4 rounded-md">
              <div className="flex space-x-4">
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href={member.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeams;
