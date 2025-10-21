import React from 'react';

const MedicalServices = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-end justify-start p-8"
      style={{ backgroundImage: `url('/service1.jpg')` }}
    >
      <div className="max-w-2xl text-left mb-16 ml-8">
        {/* Main Heading */}
       {/* Main Heading */}
<h1 className="text-4xl md:text-5xl font-semibold text-[#385399] mb-6 leading-tight">
  Uncover the Services That Support Every Step of Your <span className="text-gray-600">Wellness Journey</span>
</h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-[#191919] mb-10 leading-relaxed max-w-3xl">
          Clerisy Medical PC offers personalized care at every stage of life. Our services are designed to keep you healthy, informed, and supported-every step of the way.
        </p>
        
        {/* Buttons container */}
<div className="flex flex-col sm:flex-row gap-4">
  {/* Explore Services button with upper-right arrow */}
  <button className="bg-[#ADAFB2] hover:bg-[#ADAFB2] text-white font-medium py-2 px-7 rounded-full transition-colors duration-200 shadow-md flex items-center gap-2 group">
    Explore Services
    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
      {/* MISSING ARROW SVG - ADD THIS */}
      <svg className="w-4 h-4 text-[#ADAFB2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
      </svg>
    </div>
  </button>
  
  {/* Appointment button with upper-right arrow */}
  <button className="bg-[#385399] hover:bg-[#385399] text-white font-medium py-3 px-8 rounded-full border border-[#385399] transition-colors duration-200 shadow-sm flex items-center gap-2 group">
    Appointment
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all">
      {/* MISSING ARROW SVG - ADD THIS */}
      <svg className="w-4 h-4 text-[#ADAFB2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
      </svg>
    </div>
  </button>
</div>
      </div>
    </div>
  );
};

export default MedicalServices;