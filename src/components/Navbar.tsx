import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 lg:top-5 left-0 z-50 transition-all duration-300 ${
        isSticky ? "hidden " : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 bg-gray-100 rounded-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-custom-orange font-bold text-2xl">URBN</div>

          {/* Navbar links */}
          <div className="hidden md:flex space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="listings"
                  className="text-custom-green hover:text-custom-green/10"
                >
                  Listings
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-custom-green hover:text-custom-green/10"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-custom-green hover:text-custom-green/10"
                >
                  Pages
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-custom-green hover:text-custom-green/10"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile hamburger menu */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-custom-green focus:outline-none"
          >
            {isMenuOpen ? <X /> : <AlignJustify />}
          </button>

          {/* Tabs (Login/Sign Up) */}
          <div className="hidden md:block">
            <Tabs onClick={() => navigate("/sign-in")} defaultValue="login">
              <TabsList className="bg-custom-yellow text-white">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="sign-up">Sign up</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden mt-4 space-y-4 h-screen`}
        >
          <ul>
            <li>
              <a
                href="#home"
                className="text-custom-green hover:text-custom-green/10 block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-custom-green hover:text-custom-green/10 block"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-custom-green hover:text-custom-green/10 block"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-custom-green hover:text-custom-green/10 block"
              >
                Contact
              </a>
            </li>
          </ul>
          <Tabs defaultValue="login">
            <TabsList className="bg-custom-yellow text-white">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="sign-up">Sign up</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
