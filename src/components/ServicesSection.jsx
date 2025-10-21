import React from "react";

const services = [
  {
    title: "Specialty Care",
    description: "Expert care from specialized medical professionals",
    icon: "/icons/specialty-care.svg",
  },
  {
    title: "Preventive Medicine",
    description: "Proactive health maintenance and screenings",
    icon: "/icons/preventive-medicine.svg",
  },
  {
    title: "Diagnostic Services",
    description: "Advanced diagnostic and testing facilities",
    icon: "/icons/diagnostics.svg",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#385399] mb-4 md:mb-6">
            Treatments & Services
          </h2>
        </div>

        {/* Services Grid with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#E6F3FF] rounded-3xl shadow-lg hover:bg-[#385399] transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#385399] group cursor-pointer"
            >
              <div className="p-8 sm:p-10 flex flex-col h-full">
                {/* Icon Container - Fixed icon visibility */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-1 group-hover:bg-white transition-colors duration-300">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-8 h-8 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                
                {/* Title - Changes to white on hover */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#385399] group-hover:text-white transition-colors duration-300 mb-2">
                  {service.title}
                </h3>
                
                {/* Description - Changes to white on hover */}
                <p className="text-gray-600 group-hover:text-white text-base sm:text-lg leading-relaxed mb-4 flex-grow transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Learn More Button - Changes to white on hover */}
                <button className="w-fit text-[#385399] group-hover:text-white font-semibold text-base sm:text-lg transition-colors duration-200 flex items-center gap-2 group/btn">
                  Learn More
                  <svg 
                    className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;