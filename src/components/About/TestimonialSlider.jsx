import React, { useEffect } from "react";

const AboutSlider = () => {
  useEffect(() => {
    // Dynamically inject CSS for animation & pause
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .animate-scroll {
        animation: scroll 10s linear infinite;
      }

      .animate-pause:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">

        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Auto Moving Slider */}
          <div className="flex gap-8 animate-scroll animate-pause">
            {/* First Set */}
            <img src="/aboutsec.png" alt="Medical Facility 1" className="w-95 h-64 object-cover rounded-2xl   transition-all duration-300 hover:scale-105 flex-shrink-0" />
            <img src="/aboutsec2.png" alt="Medical Facility 2" className="w-95 h-64 object-cover rounded-2xl   transition-all duration-300 hover:scale-105 flex-shrink-0" />
            <img src="/aboutsec3.png" alt="Medical Facility 3" className="w-95 h-64 object-cover rounded-2xl   transition-all duration-300 hover:scale-105 flex-shrink-0" />
            <img src="/aboutsec4.png" alt="Medical Facility 4" className="w-95 h-64 object-cover rounded-2xl   transition-all duration-300 hover:scale-105 flex-shrink-0" />
            <img src="/aboutsec5.png" alt="Medical Facility 5" className="w-95 h-64 object-cover rounded-2xl   transition-all duration-300 hover:scale-105 flex-shrink-0" />
            <img src="/aboutsec6.png" alt="Medical Facility 6" className="w-95 h-64 object-cover rounded-2xl   transition-all duration-300 hover:scale-105 flex-shrink-0" />
            <img src="/aboutsec7.png" alt="Patient Room" className="w-64 h-64 object-cover rounded-2xl   transition-all duration-300 hover:scale-105 flex-shrink-0" />
            <img src="/aboutsec8.png" alt="Recreation Area" className="w-64 h-64 object-cover rounded-2xl  transition-all duration-300 hover:scale-105 flex-shrink-0" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSlider;
