import React from "react";

const FeaturedServices = () => {
  const services = [
    {
      name: "Gastroenterology",
      description: "Specialize in the digestive system and Gastrointestinal treatments",
      image: "/feature1.png", 
    },
    {
      name: "Pediatric Care",
      description: "Specialized healthcare for children and adolescents",
      image: "/feature2.png", 
    },
    {
      name: "Mental Health",
      description: "Comprehensive mental health and counseling services",
      image: "/feature3.png",  
    },
  ];

  return (
    <section className="relative bg-white py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#191919]">
            Featured Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#E6F3FF] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
            >
              {/* Image */}
              <div className="h-55 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Service Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#385399] mb-3">
                  {service.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;