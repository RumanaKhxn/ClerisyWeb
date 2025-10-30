import React from 'react';

const MedicalServices = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-end justify-start p-8"
      style={{ backgroundImage: `url('/service1.jpg')` }}
    >
      <div className="max-w-2xl text-left mb-16 ml-8">
        {/* Main Heading with word-by-word animation from bottom */}
        <h1 className="text-4xl md:text-5xl font-semibold text-[#385399] mb-6 leading-tight">
          <span className="animate-slide-up-word delay-100">Uncover</span>{' '}
          <span className="animate-slide-up-word delay-200">the</span>{' '}
          <span className="animate-slide-up-word delay-300">Services</span>{' '}
          <span className="animate-slide-up-word delay-400">That</span>{' '}
          <span className="animate-slide-up-word delay-500">Support</span>{' '}
          <span className="animate-slide-up-word delay-600">Every</span>{' '}
          <span className="animate-slide-up-word delay-700">Step</span>{' '}
          <span className="animate-slide-up-word delay-800">of</span>{' '}
          <span className="animate-slide-up-word delay-900">Your</span>{' '}
          <span className="text-gray-600">
            <span className="animate-slide-up-word delay-1000">Wellness</span>{' '}
            <span className="animate-slide-up-word delay-1100">Journey</span>
          </span>
        </h1>
        
        {/* Subheading - no animation */}
        <p className="text-lg md:text-xl text-[#191919] mb-10 leading-relaxed max-w-3xl">
          Clerisy Medical PC offers personalized care at every stage of life. Our services are designed to keep you healthy, informed, and supported-every step of the way.
        </p>
        
        {/* Buttons container - no animation */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Explore Services button with upper-right arrow */}
          <button className="bg-[#ADAFB2] hover:bg-[#ADAFB2] text-white font-medium py-2 px-7 rounded-full transition-colors duration-200 shadow-md flex items-center gap-2 group">
            Explore Services
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
              <svg className="w-4 h-4 text-[#ADAFB2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </button>
          
          {/* Appointment button with upper-right arrow */}
          <button className="bg-[#385399] hover:bg-[#385399] text-white font-medium py-3 px-8 rounded-full border border-[#385399] transition-colors duration-200 shadow-sm flex items-center gap-2 group">
            Appointment
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all">
              <svg className="w-4 h-4 text-[#ADAFB2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up-word {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
          display: inline-block;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1.0s; }
        .delay-1100 { animation-delay: 1.1s; }
      `}</style>
    </div>
  );
};

export default MedicalServices;