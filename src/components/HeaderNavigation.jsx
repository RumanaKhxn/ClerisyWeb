import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderNavigation = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  // Navigation items with routes
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setMenuVisible(false); // Close mobile menu on navigation
  };

  const handleButtonClick = (type) => {
    if (type === "appointment") {
      // Navigate to appointment page or open modal
      navigate("/book-appointment");
    } else if (type === "portal") {
      // Navigate to portal page
      navigate("/eclinical-portal");
    }
    setMenuVisible(false); // Close mobile menu
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-[2px]">
      <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/Clerisy-Medical-Logo.svg"
              alt="Clerisy Medical"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links - Centered */}
        <ul className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 xl:space-x-14 text-gray-800 font-medium ml-45">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-[#385399] cursor-pointer transition duration-200 text-sm xl:text-base"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          <button 
            onClick={() => handleButtonClick("appointment")}
            className="bg-[#385399] text-white px-4 xl:px-6 py-2 rounded-full hover:bg-[#2f467f] transition duration-300 font-medium text-xs xl:text-sm shadow-sm whitespace-nowrap"
          >
            Book Appointment
          </button>

          <button 
            onClick={() => handleButtonClick("portal")}
            className="border border-[#ADAFB2] text-white bg-[#ADAFB2] backdrop-blur-sm px-4 xl:px-6 py-2 rounded-full hover:bg-[#ADAFB2] hover:text-white transition duration-300 font-medium text-xs xl:text-sm whitespace-nowrap"
          >
            e-Clinical Portal
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuVisible(!menuVisible)}
            className="p-2 rounded-md text-gray-700 hover:text-[#385399] hover:bg-white/30 transition duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuVisible
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {menuVisible && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md transition-all duration-300 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="block w-full text-left px-3 py-3 text-gray-800 hover:text-[#385399] hover:bg-white/50 rounded-md transition duration-200 font-medium text-base"
              >
                {item.name}
              </button>
            ))}

            {/* Mobile Action Buttons */}
            <div className="pt-2 space-y-3">
              <button 
                onClick={() => handleButtonClick("appointment")}
                className="w-full bg-[#385399] text-white px-4 py-3 rounded-full hover:bg-[#2f467f] transition duration-300 font-medium text-sm shadow-sm"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => handleButtonClick("portal")}
                className="w-full border border-[#ADAFB2] text-white bg-[#ADAFB2] px-4 py-3 rounded-full hover:bg-[#ADAFB2] hover:text-white transition duration-300 font-medium text-sm"
              >
                e-Clinical Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderNavigation;