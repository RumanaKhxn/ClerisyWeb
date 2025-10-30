import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Specialty Care",
    description: "Expert care from specialized medical professionals",
    icon: "/icons/specialty-care.svg",
    hoverIcon: "/icons/icontreat1.svg",
  },
  {
    title: "Preventive Medicine",
    description: "Proactive health maintenance and screenings",
    icon: "/icons/preventive-medicine.svg",
    hoverIcon: "/icons/icontreat1.svg",
  },
  {
    title: "Diagnostic Services",
    description: "Advanced diagnostic and testing facilities",
    icon: "/icons/diagnostics.svg",
    hoverIcon: "/icons/icontreat1.svg",
  },
];

const Treatment = () => {
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
    
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLearnMore = () => {
    if (location.pathname === "/services") {
      const section = document.getElementById("services-section");
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/services");
    }
  };

  return (
    <section 
      id="services-section"
      className="relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div 
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#385399] mb-4">
            Treatments & Services
          </h2>
        </div>

        {/* Services Grid with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100 + 200}
              data-aos-duration="800"
              className="bg-[#E6F3FF] shadow-lg hover:bg-[#385399] transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-[#385399] group cursor-pointer relative"
              style={{
                borderRadius: "60px 15px 60px 15px",
              }}
            >
              <div className="p-6 sm:p-7 flex flex-col h-full">
                {/* Icon Container with Hover Icon */}
                <div className="flex justify-between items-start mb-3">
                  <div className="w-14 h-14 bg-[#E6F3FF] rounded-xl flex items-center justify-center group-hover:bg-[#385399] transition-colors duration-300">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-8 h-8 transition-all duration-300 filter group-hover:invert group-hover:brightness-0"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Hover Icon */}
                  <img
                    src={service.hoverIcon}
                    alt="Hover Icon"
                    className="w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-400"
                  />
                </div>

                {/* Title - Changes to white on hover */}
                <h3 className="text-lg sm:text-xl font-bold text-[#385399] group-hover:text-white transition-colors duration-300 mb-2">
                  {service.title}
                </h3>

                {/* Description - Changes to white on hover */}
                <p className="text-gray-600 group-hover:text-white text-sm sm:text-base leading-relaxed mb-4 flex-grow transition-colors duration-300">
                  {service.description}
                </p>

                {/* Learn More Button - Changes to white on hover */}
                <button 
                  onClick={handleLearnMore}
                  className="w-fit text-[#385399] group-hover:text-white font-semibold text-sm sm:text-base transition-colors duration-200 flex items-center gap-2 group/btn"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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

export default Treatment;