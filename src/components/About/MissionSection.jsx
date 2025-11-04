import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MissionSection = () => {
  const [patientsCount, setPatientsCount] = useState(0);
  const [happyPatientsCount, setHappyPatientsCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [count, setCount] = useState(0);

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // ✅ Section visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // ✅ Animate main stats when visible
  useEffect(() => {
    if (isVisible) {
      animateCount(0, 10000, 1500, setHappyPatientsCount);
      animateCount(0, 50, 1000, setDoctorsCount);
      animateCount(0, 20, 1000, setExperienceCount);
    }
  }, [isVisible]);

  // ✅ Separate counter for image overlay
  useEffect(() => {
    let start = 0;
    const end = 254300;
    const duration = 2000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(counter);
  }, []);

  // ✅ Reusable counter animation
  const animateCount = (start, end, duration, setCount) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      setCount(currentCount.toLocaleString());
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };

  // ✅ Framer motion variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#e8f1ff] overflow-hidden"
      style={{
        borderRadius: "100px 25px 100px 25px",
        margin: "40px",
        padding: "40px 0",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16 py-10 px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* ✅ Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm lg:max-w-md animate-fade-in-left">
            <img
              src="/mission.png"
              alt="Clerisy Medical PC Mission"
              className="w-full h-48 sm:h-70 md:h-120 object-cover rounded-2xl shadow-xl"
            />

            {/* ✅ Bottom-right Counter on Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1.2}
              className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 rounded-1xl px-3 py-2 sm:px-4 sm:py-3 flex flex-col items-end  rounded-lg"
            >
              <div className="flex -space-x-2 mb-1 sm:mb-2">
                <img
                  src="/image1.png"
                  alt="Patient"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full  border-none"
                />
                <img
                  src="/image2.png"
                  alt="Patient"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full  border-none"
                />
                <img
                  src="/image3.png"
                  alt="Patient"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full  border-none"
                />
              </div>
              <div className="text-end">
                <p className="text-black font-semibold text-base sm:text-lg leading-tight mb-0.5">
                  {count.toLocaleString()}+
                </p>
                <p className="text-black text-[10px] sm:text-sm leading-tight">
                  Our Worldwide Patients
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ✅ Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 text-center lg:text-left animate-fade-in-right">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#385399] leading-tight">
            Our Mission
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At Clerisy Medical PC, we are dedicated to providing exceptional
            medical care with compassion and expertise. Our mission is to
            improve the health and well-being of our community through
            innovative treatments, personalized care, and unwavering commitment
            to patient satisfaction.
          </p>

          {/* ✅ Stats Section */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 mt-4">
            <div className="text-center animate-count-up">
            <p className="text-3xl font-bold text-[#385399]">
  {parseInt(happyPatientsCount.toString().replace(/,/g, "")) >= 10000
    ? "10k"
    : happyPatientsCount}
  +
</p>

              <p className="text-gray-600 text-sm sm:text-base">Happy Patients</p>
            </div>
            <div className="text-center animate-count-up">
              <p className="text-3xl font-bold text-[#385399]">
                {doctorsCount}+
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Specialist Doctors
              </p>
            </div>
            <div className="text-center animate-count-up">
              <p className="text-3xl font-bold text-[#385399]">
                {experienceCount}+
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Years Experience
              </p>
            </div>
          </div>

          {/* ✅ Button */}
          <div className="mt-6">
            <button className="border border-[#385399] text-[#385399] px-6 py-3 rounded-full font-medium transition duration-300 ">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Animations */}
      <style jsx global>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out;
        }

        .animate-count-up {
          animation: countUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default MissionSection;
