import React from "react";

const GetStarted = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-[50px] gap-[10px] overflow-hidden"
      style={{
        backgroundImage: `url('getstart.jpg')`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Subtle white fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent"></div>

      {/* Content */}
      <div className="relative w-full max-w-[1280px] text-center z-10 px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#385399] mb-4">
          Ready to Get Started?
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-[#191919] leading-relaxed mb-6">
          Schedule your appointment today and take the first step towards better health.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Left Button */}
          <button className="bg-[#ADAFB2] hover:bg-[#A5A7AA] text-white font-medium py-2 px-7 rounded-full transition duration-200 shadow-md flex items-center gap-2 group">
            Explore Services
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition">
              <svg
                className="w-4 h-4 text-[#ADAFB2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l9.2-9.2M17 17V7H7"
                />
              </svg>
            </div>
          </button>

          {/* Right Button */}
          <button className="bg-[#385399] hover:bg-[#2f498a] text-white font-medium py-3 px-8 rounded-full transition duration-200 shadow-sm flex items-center gap-2 group">
            Book Appointment
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-[#385399] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l9.2-9.2M17 17V7H7"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
