// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Section */}
      <main className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        {/* Heading Section */}
        <div className="text-center mb-15">
          <h2 className="text-2xl md:text-2xl text-[#385399] mb-8 tracking-tight">About Us</h2>
          <h2 className="text-4xl md:text-5xl text-[#385399] mb-5 tracking-tight">
            Experience Compassionate Care 
          </h2>
          <h1 className="text-4xl md:text-5xl text-[#385399] leading-relaxed">
            Rooted in Our Mission and Values at{' '}
            <span className="text-4xl md:text-5xl font-semibold text-gray-400">Clerisy Medical PC</span>
          </h1>
        </div>

        {/* Description Section */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg md:text-xl text-black leading-relaxed text-center">
            we are dedicated to compassionate, patient-first care. Our values guide every interaction, ensuring you feel{' '}
            <span className=" text-black">heard, respected, and supported</span>{' '}
            on your health journey.
          </p>
        </div>

        {/* Buttons - Centered */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="border border-[#385399] text-[#385399] px-4 py-2 sm:px-8 sm:py-3 rounded-full font-medium hover:bg-[#385399] hover:text-white transition duration-300 text-base sm:text-lg">
            Contact Us
          </button>
          <button className="bg-[#385399] text-white px-4 py-2 sm:px-8 sm:py-3 rounded-full font-medium hover:bg-[#2f467f] transition duration-300 text-base sm:text-lg">
           Appointment
          </button>
        </div>
      </main>
    </div>
  );
};

export default About;