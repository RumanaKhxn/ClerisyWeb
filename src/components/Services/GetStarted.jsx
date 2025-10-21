import React from "react";

const GetStarted = () => {
  return (
    <section
    className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-5 lg:px-12 xl:px-24 overflow-hidden mb-8"
      style={{
        backgroundImage: `url('getstart.jpg')`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/5 "></div>

      {/* Smooth white fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/60 to-transparent "></div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#385399] mb-6">
          Ready to Get Started?
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-[#191919] leading-relaxed max-w-2xl mx-auto mb-8">
          Schedule your appointment today and take the first step towards better health.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Left Button */}
          <button className="bg-[#ADAFB2] hover:bg-[#A5A7AA] text-white font-medium py-2 px-7 rounded-full transition-colors duration-200 shadow-md flex items-center gap-2 group">
            Explore Services
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
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
          <button className="bg-[#385399] hover:bg-[#2f498a] text-white font-medium py-3 px-8 rounded-full border border-[#385399] transition-colors duration-200 shadow-sm flex items-center gap-2 group">
            Book Appointment
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all">
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
