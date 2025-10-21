import React from "react";

const MissionSection = () => {
  return (
    <section className="relative bg-[#e8f1ff] py-10 sm:py-10 md:py-10 lg:py-10 px-4 sm:px-6 md:px-3 lg:px-12 xl:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16">
        
       {/* Left Image */}
<div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
  <div className="relative w-full max-w-sm lg:max-w-md">
    <img
      src="/mission.png"
      alt="Clerisy Medical PC Mission"
      className="w-full h-48 sm:h-90 md:h-120 object-cover rounded-[1.5rem] shadow-xl"
    />

    {/* Small Overlay (like Figma patients info) */}
    <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md flex items-center gap-2">
      <div className="flex -space-x-2">
        <img src="./public/image1.png" alt="Patient" className="w-6 h-6 rounded-full border-2 border-white" />
        <img src="./public/image2.png" alt="Patient" className="w-6 h-6 rounded-full border-2 border-white" />
        <img src="./public/image3.png" alt="Patient" className="w-6 h-6 rounded-full border-2 border-white" />
      </div>
      <div>
        <p className="text-gray-900 font-semibold text-sm leading-tight">2,54,300+</p>
        <p className="text-gray-600 text-xs leading-tight">Our Worldwide Patients</p>
      </div>
    </div>
  </div>
</div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 text-center lg:text-left">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#385399] leading-tight">
            Our Mission
          </h2>

          {/* Mission Description */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At Clerisy Medical PC, we are dedicated to providing exceptional medical care with compassion and expertise. 
            Our mission is to improve the health and well-being of our community through innovative treatments, 
            personalized care, and unwavering commitment to patient satisfaction.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 mt-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#385399]">10k+</p>
              <p className="text-gray-600 text-sm sm:text-base">Happy Patients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#385399]">50+</p>
              <p className="text-gray-600 text-sm sm:text-base">Specialist Doctors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#385399]">20+</p>
              <p className="text-gray-600 text-sm sm:text-base">Years Experience</p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <button className="bg-[#385399] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2f467f] transition duration-300">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;