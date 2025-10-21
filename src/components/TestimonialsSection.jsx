import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Bushra C",
    role: "Patient",
    feedback:
      "Amazing doctor and phenomenal service. Dr. Gulam Khan and staff are very warm and welcoming. Thank you for serving Dr. Khan.",
    rating: 5,
  },
  {
    name: "Sharif H.",
    role: "Patient",
    feedback:
      "Mr. Khan is a very nice person & knows pretty well how to take care of his patient. Staff are really great too! Thanks.",
    rating: 5,
  },
  {
    name: "Ajmal K.",
    role: "Patient",
    feedback:
      "Khan is very professional, treating patients with humility and kindness — not only treated well but even educated his patient.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-12 xl:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2653] mb-4 leading-tight">
            We Value the trust our patients place in us.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl">
            Every patient's experience matters to us. Hear from those who have
            entrusted Clerisy Medical PC with their care and discover how we’re
            making a difference in their health journeys.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative flex justify-center items-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md transition"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full md:w-4/5 lg:w-3/4 flex flex-col md:flex-row gap-6 transition-all duration-500 ease-in-out">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];
              return (
                <div
                  key={index}
                  className="bg-[#f9fafb] rounded-xl border border-gray-200 p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    “{testimonial.feedback}”
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10 -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10 translate-x-1/4 translate-y-1/4"></div>
    </section>
  );
};

export default TestimonialsSection;