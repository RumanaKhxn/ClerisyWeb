import React from "react";

const PatientPortalSection = () => {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat mb-3 bg-[#E6F3FF]"
      style={{
        backgroundImage: "url('/access.jpg')",
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-6 leading-tight transform transition-all duration-700 ease-out translate-y-8 opacity-0 animate-slideUp"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          Access Your Medical Records
        </h2>
        
        {/* Description */}
        <p className="text-white text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed transform transition-all duration-700 ease-out translate-y-8 opacity-0 animate-slideUp"
           style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          Manage your health information, view test results, and communicate with your
          healthcare team through our secure patient portal:
        </p>
        
        {/* Desktop Action Buttons */}
        <div className="flex justify-center items-center gap-3 transform transition-all duration-700 ease-out translate-y-8 opacity-0 animate-slideUp"
             style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <button className="border border-white text-white bg-[#ADAFB2] px-6 py-2 rounded-full hover:bg-[#ADAFB2] hover:text-white transition duration-300 font-medium text-sm">
            e-Clinical Works Portal
          </button>
        </div>
      </div>

      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Add custom animation to Tailwind */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default PatientPortalSection;