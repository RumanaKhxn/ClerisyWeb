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
            ? "w-[140px] h-[44px]" // consistent across all screens
            : "w-[120px] h-[38px]"
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
const GetStarted = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-[70px] sm:py-[80px] md:py-[100px] px-4 sm:px-8 md:px-12"
      style={{
        backgroundImage: `url('getstart.jpg')`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Content */}
      <div className="relative w-full max-w-[1280px] text-center z-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#385399] mb-4">
          Ready to Get Started?
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-[#191919] leading-relaxed mb-8 max-w-2xl mx-auto">
          Schedule your appointment today and take the first step towards better health.
        </p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <AnimatedButton
            text="Explore Services"
            link="/contact"
            bgColor="#ADAFB2"
            large
          />
          <AnimatedButton
            text="Appointment"
            link="/appointment"
            bgColor="#385399"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
