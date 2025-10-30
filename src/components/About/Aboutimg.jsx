// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Section */}
      <main className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        {/* Heading Section */}
        <div className="text-center mb-15">
          <h2 className="text-2xl md:text-2xl text-[#385399] mb-8 tracking-tight animate-fade-in-up">
            About Us
          </h2>
          <h2 className="text-4xl md:text-5xl text-[#385399] mb-5 tracking-tight animate-fade-in-up animation-delay-200">
            Experience Compassionate Care 
          </h2>
          <h1 className="text-4xl md:text-5xl text-[#385399] leading-relaxed animate-fade-in-up animation-delay-400">
            Rooted in Our Mission and Values at{' '}
            <span className="text-4xl md:text-5xl font-semibold text-gray-400">Clerisy Medical PC</span>
          </h1>
        </div>

        {/* Description Section */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg md:text-xl text-black leading-relaxed text-center animate-fade-in-up animation-delay-600">
            we are dedicated to compassionate, patient-first care. Our values guide every interaction, ensuring you feel{' '}
            <span className="text-black">heard, respected, and supported</span>{' '}
            on your health journey.
          </p>
        </div>

        {/* Buttons container - CENTERED */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Explore Services button with upper-right arrow */}
          <button className="bg-[#ADAFB2] hover:bg-[#ADAFB2] text-white font-medium py-2 px-7 rounded-full transition-colors duration-200 shadow-md flex items-center gap-2 group">
           Contact Us
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
              <svg className="w-4 h-4 text-[#ADAFB2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </button>
          
          {/* Appointment button with upper-right arrow */}
          <button className="bg-[#385399] hover:bg-[#385399] text-white font-medium py-2 px-7 rounded-full border border-[#385399] transition-colors duration-200 shadow-sm flex items-center gap-2 group">
            Appointment
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all">
              <svg className="w-4 h-4 text-[#385399] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </button>
        </div>
      </main>

      {/* Add these styles to your global CSS or use a CSS-in-JS solution */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
};

export default About;