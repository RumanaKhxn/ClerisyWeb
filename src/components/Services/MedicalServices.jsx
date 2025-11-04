import React from "react";
import { motion } from "framer-motion";

// ✅ Reusable Animated Button Component
const AnimatedButton = ({ text, link, bgColor, large }) => {
  return (
    <motion.button
      onClick={() => (window.location.href = link)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`relative px-9 py-3  
        ${
          large
            ? "w-[150px] sm:w-[140px] h-[44px] sm:h-[42px]"
            : "w-[120px] sm:w-[120px] h-[38px] sm:h-[38px]"
        }
        rounded-full text-white group overflow-hidden flex items-center justify-center whitespace-nowrap text-[13px] sm:text-[14px]`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Normal State */}
      <div className="flex items-center justify-between absolute inset-0 transition-transform duration-500 transform translate-x-0 group-hover:-translate-x-full">
        <span className="ml-2">{text}</span>
        <div className="w-[29px] h-[29px] bg-white rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={bgColor}
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[15px] h-[15px]"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
      </div>

      {/* Hover State */}
      <div className="flex items-center justify-between absolute inset-0 transition-transform duration-500 transform translate-x-full group-hover:translate-x-0">
        <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={bgColor}
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[12px] h-[12px]"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
        <span className="mr-2">{text}</span>
      </div>
    </motion.button>
  );
};

// ✅ Fade animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

// ✅ Main Component
const MedicalServices = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-end justify-start p-8"
      style={{ backgroundImage: `url('/service1.jpg')` }}
    >
      <div className="max-w-2xl text-left mb-16 ml-8">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-[#385399] mb-6 leading-tight">
          <span className="animate-slide-up-word delay-100">Uncover</span>{" "}
          <span className="animate-slide-up-word delay-200">the</span>{" "}
          <span className="animate-slide-up-word delay-300">Services</span>{" "}
          <span className="animate-slide-up-word delay-400">That</span>{" "}
          <span className="animate-slide-up-word delay-500">Support</span>{" "}
          <span className="animate-slide-up-word delay-600">Every</span>{" "}
          <span className="animate-slide-up-word delay-700">Step</span>{" "}
          <span className="animate-slide-up-word delay-800">of</span>{" "}
          <span className="animate-slide-up-word delay-900">Your</span>{" "}
          <span className="text-gray-600">
            <span className="animate-slide-up-word delay-1000">Wellness</span>{" "}
            <span className="animate-slide-up-word delay-1100">Journey</span>
          </span>
        </h1>

        {/* Subheading */}
      <p className="text-[15px] sm:text-base md:text-lg text-[#191919] mb-10 leading-relaxed max-w-2xl">
  Clerisy Medical PC offers personalized care at every stage of life.
  Our services are designed to keep you healthy, informed, and supported
  — every step of the way.
</p>


        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="flex flex-wrap justify-start gap-3 mt-6"
        >
          <AnimatedButton
            text="Explore Services"
            link="/contact"
            bgColor="#ADAFB2"
            large // 👈 makes this one bigger
          />
          <AnimatedButton
            text="Appointment"
            link="/appointment"
            bgColor="#385399"
          />
        </motion.div>

        {/* Animation styles */}
        <style jsx>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slide-up-word {
            animation: slideUp 0.6s ease-out forwards;
            opacity: 0;
            display: inline-block;
          }
          .delay-100 {
            animation-delay: 0.1s;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
          .delay-400 {
            animation-delay: 0.4s;
          }
          .delay-500 {
            animation-delay: 0.5s;
          }
          .delay-600 {
            animation-delay: 0.6s;
          }
          .delay-700 {
            animation-delay: 0.7s;
          }
          .delay-800 {
            animation-delay: 0.8s;
          }
          .delay-900 {
            animation-delay: 0.9s;
          }
          .delay-1000 {
            animation-delay: 1s;
          }
          .delay-1100 {
            animation-delay: 1.1s;
          }
        `}</style>
      </div>
    </div>
  );
};

export default MedicalServices;
