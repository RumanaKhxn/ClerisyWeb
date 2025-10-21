import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden flex items-center">
      {/* Right Side Background Image (Visible only on Desktop) */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/hero-image.png')",
        }}
      >
        {/* Gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-white/80 to-transparent"></div>
      </div>

      {/* Background Image for Mobile */}
      <div className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-image.png')",
          }}
        >
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 py-20 md:py-0 flex items-center justify-start">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-7xl gap-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold text-[#385399] leading-snug md:leading-tight mb-6">
              Health Solutions for{" "}
              <span className="text-gray-600">Every Stage</span> of Life.
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-md mb-8">
              Providing comprehensive and compassionate care for you and your
              family.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="border border-[#385399] text-[#385399] px-4 py-2 sm:px-4 sm:py-3 rounded-full font-medium hover:bg-[#385399] hover:text-white transition duration-300 text-base sm:text-lg">
                Learn More About Us
              </button>
              <button className="bg-[#385399] text-white px-4 py-2 sm:px-4 sm:py-3 rounded-full font-medium hover:bg-[#2f467f] transition duration-300 text-base sm:text-lg">
                Book Appointment
              </button>
            </div>

            {/* Patients Info Overlay - Background Removed */}
            <div className="hidden md:flex bg-transparent px-4 py-3 items-center gap-2 w-fit">
              <div className="flex -space-x-2">
                <img src="/image1.png" alt="Patient" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="/image2.png" alt="Patient" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="/image3.png" alt="Patient" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <div>
                <p className="text-black font-semibold text-sm leading-tight drop-shadow-md">3,000+</p>
                <p className="text-black text-xs leading-tight drop-shadow-md">Our Worldwide Patients</p>
              </div>
            </div>
          </div>

          {/* Right Image (Visible only on mobile/tablet) */}
          <div className="md:hidden w-full flex justify-center relative">
            <img
              src="/hero-image.png"
              alt="Healthcare professionals"
              className="w-full max-w-sm sm:max-w-md rounded-3xl shadow-2xl"
            />
            
            {/* Text below image for mobile */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-md text-center w-48">
              <p className="text-gray-900 font-semibold text-sm">3,000+</p>
              <p className="text-gray-600 text-xs">Our Worldwide Patients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Shape */}
      <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 w-[180px] sm:w-[250px] h-[180px] sm:h-[250px] bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>
    </section>
  );
};

export default Hero;