import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ text, link, bgColor = "#385399" }) => {
  return (
    <motion.button
      onClick={() => (window.location.href = link)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`relative px-9 py-3  
        ${
          text === "Contact Us"
            ? "w-[120px] sm:w-[110px]"
            : "w-[120px] sm:w-[120px]"
        } 
        h-[38px] sm:h-[38px]
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

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-[77vh] bg-white flex items-center px-4 sm:px-6">
      <main className="max-w-4xl mx-auto py-16 md:py-20 w-full">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-2xl md:text-2xl text-[#385399] mb-4 tracking-tight"
          >
            About Us
          </motion.h2>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="text-4xl md:text-4xl text-[#385399] mb-3 tracking-tight"
          >
            Experience Compassionate Care
          </motion.h2>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="text-4xl md:text-4xl text-[#385399] leading-relaxed mt-2"
          >
            Rooted in Our Mission and Values at
          </motion.h1>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="text-4xl md:text-4xl font-semibold text-gray-400 mt-1"
          >
            Clerisy Medical PC
          </motion.h1>
        </div>

        {/* Description */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="max-w-3xl mx-auto mb-5 md:mb-6"
        >
          <p className="text-lg md:text-xl text-black leading-relaxed text-center">
            We are dedicated to compassionate, patient-first care. Our values
            guide every action, ensuring you feel heard, respected, and supported
            on your health journey.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="flex flex-wrap justify-center gap-3 mt-6"
        >
          <AnimatedButton text="Contact Us" link="/contact" bgColor="#ADAFB2" />
          <AnimatedButton text="Appointment" link="/appointment" bgColor="#385399" />
        </motion.div>
      </main>
    </div>
  );
};

export default About;
