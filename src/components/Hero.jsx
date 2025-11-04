import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BorderButton = ({ text, link, borderColor = "#ADAFB2" }) => {
  return (
    <button
      onClick={() => (window.location.href = link)}
      className="w-45 sm:w-45 h-12 border-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:bg-[#ADAFB2] hover:text-white"
      style={{
        borderColor: borderColor,
        color: borderColor,
        backgroundColor: "transparent",
      }}
    >
      {text}
    </button>
  );
};



const SolidButton = ({ text, link, bgColor = "#385399" }) => {
  return (
    <button
      onClick={() => (window.location.href = link)}
      className="w-45 sm:w-45 h-12 rounded-full font-medium text-sm sm:text-base text-white transition-all duration-300 hover:opacity-90"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {text}
    </button>
  );
};


// ✅ Main Hero Section
const Hero = () => {
  const [count, setCount] = useState(0);

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

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden flex items-center">
      {/* Right Background Image (Desktop) */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(0,0,0,0.45), rgba(255,255,255,0.25)), url('/hero-image.png')",
          backgroundBlendMode: "overlay",
          maskImage: "linear-gradient(to left, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black 90%, transparent)",
          borderTopLeftRadius: "100px",
          borderTopRightRadius: "25px",
          borderBottomRightRadius: "100px",
          borderBottomLeftRadius: "25px",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-0 flex items-center justify-start">
        <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-7xl gap-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-[#38539A] leading-snug md:leading-tight mb-6 mt-27"
            >
              <motion.span className="block">Health Solutions In</motion.span>
              <motion.span className="block">
                <span className="text-[#ADAFB2]">
                  Every Stage <span className="text-[#38539A]">Of Life.</span>
                </span>
              </motion.span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="text-[#191919] text-base sm:text-lg md:text-xl max-w-md mb-8 mx-auto md:mx-0"
            >
              Providing comprehensive and compassionate care for you and your
              family.
            </motion.p>

                {/* Buttons Section */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={0.9}
  className="flex flex-row flex-nowrap justify-center md:justify-start gap-4 mb-6"
>
  <BorderButton
    text="Learn More About Us"
    link="/about"
    borderColor="#ADAFB2"
  />
  <SolidButton
    text="Book Appointment"
    link="/appointment"
    bgColor="#385399"
  />
</motion.div>



            {/* Patients Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1.2}
              className="flex flex-col items-left mt-16 md:mt-36"
            >
              <div className="flex -space-x-2 mb-2">
                <img
                  src="/image1.png"
                  alt="Patient"
                  className="w-9 h-9 rounded-full shadow-sm border-none"
                />
                <img
                  src="/image2.png"
                  alt="Patient"
                  className="w-9 h-9 rounded-full shadow-sm border-none"
                />
                <img
                  src="/image3.png"
                  alt="Patient"
                  className="w-9 h-9 rounded-full shadow-sm border-none"
                />
              </div>
              <div className="text-left">
                <p className="text-black font-bold text-lg leading-tight pl-1 mb-1">
                  {count.toLocaleString()}+
                </p>
                <p className="text-black text-base leading-tight">
                  Our Worldwide Patients
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Image (Mobile Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="md:hidden w-full flex flex-col items-center"
          >
            <img
              src="/hero-image.png"
              alt="Healthcare professionals"
              className="w-full max-w-sm sm:max-w-md rounded-[40px]"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Blur Shape */}
      <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 w-[180px] sm:w-[250px] h-[180px] sm:h-[250px] bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>
    </section>
  );
};

export default Hero;
