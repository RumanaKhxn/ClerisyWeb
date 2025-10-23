import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Sarah T., Brooklyn, NY",
    role: "Patient",
    feedback:
      "The team at Clerisy Medical PC is truly exceptional. From the moment I walked in, I felt heard, cared for, and supported. Highly recommend!",
    rating: "4.9",
    avatar: "/testimonials1.jpg",
  },
  {
    name: "James R., Queens, NY",
    role: "Patient",
    feedback:
      "Clerisy Medical PC has been a lifesaver. The staff is always kind, professional, and attentive.",
    rating: "4.9",
    avatar: "/testimonials2.jpg",
  },
  {
    name: "Michael D., Staten, NY",
    role: "Patient",
    feedback:
      "From the front desk to the exam room, everyone is friendly and professional.",
    rating: "4.9",
    avatar: "/testimonials4.png",
  },
  {
    name: "Linda K., Manhattan, NY",
    role: "Patient",
    feedback:
      "Booking appointments is simple, and I love how organized everything is.",
    rating: "4.9",
    avatar: "/testimonials3.jpg",
  },
  {
    name: "Maria G., Bronx, NY",
    role: "Patient",
    feedback:
      "I've been coming here for over a year, and the consistency in care is unmatched.",
    rating: "4.9",
    avatar: "/testimonials5.png",
  },
];

const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  const handleNext = () => {
    if (startIndex + visibleCount < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <section className="relative bg-white py-14 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row items-start">
        {/* Left Image */}
        <div 
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="800"
          className="w-full md:w-[40%] relative"
        >
          <img
            src="/Testimonials.png"
            alt="Doctor"
            className="rounded-2xl w-full object-cover  "
          />

          {/* Small Overlay - Background Removed */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
            className="absolute bottom-3 left-3 bg-transparent px-3 py-2 flex items-center gap-2"
          >
            <div className="flex -space-x-2">
              <img
                src="/image1.png"
                alt="Patient"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/image2.png"
                alt="Patient"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              <img
                src="/image3.png"
                alt="Patient"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
            <div className="bg-transparent">
              <p className="text-black font-semibold text-xs leading-tight  ">
                2,54,300+
              </p>
              <p className="text-black text-xs leading-tight shadow-sm">
                Our Worldwide Patients
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div 
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="800"
          className="w-full md:w-[55%] md:pl-10 mt-8 md:mt-0 relative"
        >
          {/* Heading */}
          <h2 
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-[19px] sm:text-[19px] md:text-[30px] lg:text-[38px] xl:text-[30px] 2xl:text-[34px] font-bold text-[#1D3A70] mb-2"
          >
            We Value the trust our patients <br /> place in us.
          </h2>

          {/* Description */}
          <p 
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-gray-600 mb-6 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[22px]"
          >
            Every patient's experience matters to us. Hear from those who have
            entrusted Clerisy Medical PC with their care and discover how we're
            making a difference in their health journeys.
          </p>

          {/* Navigation Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex justify-end gap-6 mt-[25px] mb-6"
          >
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="bg-[#ADAFB2] p-3 rounded-full   disabled:opacity-50 hover:bg-gray-400 transition transform hover:scale-110 duration-300"
            >
              <ChevronLeft size={16} className="text-white" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + visibleCount >= testimonials.length}
              className="bg-[#ADAFB2] p-3 rounded-full   disabled:opacity-50 hover:bg-gray-400 transition transform hover:scale-110 duration-300"
            >
              <ChevronRight size={16} className="text-white" />
            </button>
          </div>

          {/* Testimonials Cards */}
          <div className="flex gap-4 overflow-hidden md:overflow-visible">
            {visibleTestimonials.map((t, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={700 + (index * 100)}
                data-aos-duration="600"
                className={`w-[90%] sm:min-w-[300px] sm:max-w-[240px] h-[230px] 2xl:max-w-[340px] 2xl:h-[290px] p-[25px] bg-blue-50 rounded-tl-[48px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[48px] shadow-sm flex-shrink-0 transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${
                  index === 0 ? "xl:-ml-53 2xl--ml-53 sm:ml-0" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#1D3A70] text-[17px] 2xl:text-[21px] mb-2">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500 text-[16px] 2xl:text-[19px]">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-[14px] 2xl:text-[18px] text-gray-700 mb-2">
                  "{t.feedback}"
                </p>

                {/* Rating */}
                <p className="text-sm 2xl:text-[19px] mt-2 font-bold text-blue-500">
                  {t.rating}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div 
        data-aos="fade"
        data-aos-delay="800"
        className="absolute top-0 left-0 w-30 h-30 bg-blue-50 rounded-full blur-3xl -z-10 -translate-x-1/4 -translate-y-1/4"
      ></div>
      <div 
        data-aos="fade"
        data-aos-delay="900"
        className="absolute bottom-0 right-0 w-30 h-30 bg-blue-50 rounded-full blur-3xl -z-10 translate-x-1/4 translate-y-1/4"
      ></div>
    </section>
  );
};

export default TestimonialsSection;