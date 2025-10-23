import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderNavigation = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
   <nav className="w-full fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-[2px]">
      <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center">
          <img
            src="/Clerisy-Medical-Logo.svg"
            alt="Clerisy Medical"
            className="h-12 w-auto"
          />
        </div>

        <ul className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-14 text-gray-800 font-medium ml-45">
          <li>
            <Link
              to="/"
              className="hover:text-[#385399] cursor-pointer transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="hover:text-[#385399] cursor-pointer transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              className="hover:text-[#385399] cursor-pointer transition duration-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="hover:text-[#385399] cursor-pointer transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="bg-[#385399] text-white px-6 py-2 rounded-full hover:bg-[#2f467f] transition duration-300 font-medium text-sm shadow-sm">
            Book Appointment
          </button>

          <button className="border border-[#385399] text-[#385399] bg-white/30 backdrop-blur-sm px-6 py-2 rounded-full hover:bg-[#385399] hover:text-white transition duration-300 font-medium text-sm">
            e-Clinical Portal
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuVisible(!menuVisible)}
            className="p-2 rounded-md text-gray-700 hover:text-[#385399] hover:bg-white/30 transition duration-200"
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
        <div className="lg:hidden bg-white/30 backdrop-blur-[2px] transition-all duration-300">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {["Home", "About", "Services", "Contact"].map((page) => (
              <a
                key={page}
                href="#"
                className="block px-3 py-2 text-gray-800 hover:text-[#385399] hover:bg-white/30 rounded-md transition duration-200 font-medium"
              >
                {page}
              </a>
            ))}

            {/* Mobile Action Buttons */}
            <div className="pt-2 space-y-2">
              <button className="w-full bg-[#385399] text-white px-4 py-3 rounded-full hover:bg-[#2f467f] transition duration-300 font-medium text-sm shadow-sm">
                Book Appointment
              </button>
              <button className="w-full border border-[#385399] text-[#385399] bg-white/30 px-4 py-3 rounded-full hover:bg-[#385399] hover:text-white transition duration-300 font-medium text-sm">
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