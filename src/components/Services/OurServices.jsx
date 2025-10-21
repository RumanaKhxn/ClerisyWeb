import React from "react";

const OurServices = () => {
  const services = {
    specialtyCare: {
      title: "Specialty Care",
      items: [
        {
          name: "Neurology",
          description: "Diagnosis and treatment of neurological disorders.",
          icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
        },
        {
          name: "Orthopedics",
          description: "Care for musculoskeletal conditions and injuries.",
          icon: "https://cdn-icons-png.flaticon.com/512/3774/3774271.png",
        },
        {
          name: "Ophthalmology",
          description: "Comprehensive eye exams and vision correction.",
          icon: "https://cdn-icons-png.flaticon.com/512/2966/2966324.png",
        },
      ],
    },
    wellness: {
      title: "Wellness & Prevention",
      items: [
        {
          name: "Nutrition Counseling",
          description: "Personalized dietary plans and nutritional guidance.",
          icon: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
        },
        {
          name: "Fitness Programs",
          description: "Exercise programs tailored to your fitness level.",
          icon: "https://cdn-icons-png.flaticon.com/512/1888/1888976.png",
        },
        {
          name: "Support Groups",
          description: "Group sessions for emotional support and shared experiences.",
          icon: "https://cdn-icons-png.flaticon.com/512/3774/3774294.png",
        },
      ],
    },
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#191919] mb-4">
            Our Services
          </h1>
          <p className="text-lg text-[#4A739C] leading-relaxed max-w-3xl mx-auto">
            Explore the comprehensive range of healthcare services we offer, designed to meet your individual needs and promote overall well-being.
          </p>
        </div>

        {/* Specialty Care */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#385399] mb-6">
            {services.specialtyCare.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {services.specialtyCare.items.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all duration-300 flex items-start gap-3"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src={service.icon} alt={service.name} className="w-5 h-5" loading="lazy" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#191919] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wellness & Prevention */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#385399] mb-6">
            {services.wellness.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {services.wellness.items.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all duration-300 flex items-start gap-3"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src={service.icon} alt={service.name} className="w-5 h-5" loading="lazy" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#191919] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;