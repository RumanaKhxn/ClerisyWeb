import React, { useEffect } from "react";
import { Brain, Bone, Eye, Leaf, Dumbbell, Users } from "lucide-react";

const OurServices = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-left");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  const services = {
    specialtyCare: {
      title: "Specialty Care",
      items: [
        {
          name: "Neurology",
          description: "Diagnosis and treatment of neurological disorders.",
          icon: <Brain className="w-6 h-6 text-gray-400" />,
        },
        {
          name: "Orthopedics",
          description: "Care for musculoskeletal conditions and injuries.",
          icon: <Bone className="w-6 h-6 text-gray-400" />,
        },
        {
          name: "Ophthalmology",
          description: "Comprehensive eye exams and vision correction.",
          icon: <Eye className="w-6 h-6 text-gray-400" />,
        },
      ],
    },
    wellness: {
      title: "Wellness & Prevention",
      items: [
        {
          name: "Nutrition Counseling",
          description:
            "Personalized dietary plans and nutritional guidance.",
          icon: <Leaf className="w-6 h-6 text-gray-400" />,
        },
        {
          name: "Fitness Programs",
          description: "Exercise programs tailored to your fitness level.",
          icon: <Dumbbell className="w-6 h-6 text-gray-400" />,
        },
        {
          name: "Support Groups",
          description:
            "Group sessions for emotional support and shared experiences.",
          icon: <Users className="w-6 h-6 text-gray-400" />,
        },
      ],
    },
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 px-6 md:px-12 xl:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            Our Services
          </h1>
          <p className="text-lg text-[#4A739C] max-w-2xl mx-auto leading-relaxed">
            Explore the comprehensive range of healthcare services we offer,
            designed to meet your individual needs and promote overall well-being.
          </p>
        </div>

        {/* Specialty Care */}
        <div className="mb-16 reveal-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#385399] mb-6">
            {services.specialtyCare.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.specialtyCare.items.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 bg-white relative transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  borderRadius: "28px 7px 28px 7px",
                  padding: "16px",
                }}
              >
                <div className="absolute top-4 left-4 rounded-full p-2">
                  {service.icon}
                </div>
                <div className="pt-12">
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">
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
        <div className="reveal-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#385399] mb-6">
            {services.wellness.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.wellness.items.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 bg-white relative transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  borderRadius: "28px 7px 28px 7px",
                  padding: "16px",
                }}
              >
                <div className="absolute top-4 left-4 rounded-full p-2">
                  {service.icon}
                </div>
                <div className="pt-12">
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">
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

      {/* Animation Styles */}
      <style jsx>{`
        .reveal-left {
          opacity: 0;
          transform: translateX(-80px);
          transition: all 1.2s ease-out;
        }
        .reveal-left.active {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </section>
  );
};

export default OurServices;
