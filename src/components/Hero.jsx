import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden flex items-center">
      {/* Right Side Background Image (Visible only on Desktop) */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/hero-image.png')",
        }}
      />

      {/* Background Image for Mobile */}
      <div 
        className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/hero-image.png')",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-0 flex items-center justify-start">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-7xl gap-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-left">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Heading with staggered animation */}
              <motion.h1 
                variants={containerVariants}
                className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-[#38539A] leading-snug md:leading-tight mb-6"
              >
                <motion.span variants={itemVariants} className="block">
                  Health Solutions for
                </motion.span>
                <motion.span variants={itemVariants} className="block">
                  <span className="text-[#ADAFB2]">Every Stage <span className="text-[#38539A]"> Of Life.</span></span>
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-[#191919] text-base sm:text-lg md:text-xl max-w-md mb-8"
              >
                Providing comprehensive and compassionate care for you and your
                family.
              </motion.p>

              {/* Buttons */}
              <motion.div 
                variants={containerVariants}
                className="flex flex-col sm:flex-row gap-3 mb-6"
              >
                <motion.button 
                  variants={buttonVariants}
                  className="border border-[#38539A] text-[#38539A] px-4 py-2 sm:px-4 sm:py-2 rounded-full font-medium hover:bg-[#385399] hover:text-white transition duration-300 text-sm sm:text-base"
                >
                  Learn More About Us
                </motion.button>
                <motion.button 
                  variants={buttonVariants}
                  className="bg-[#38539A] text-white px-4 py-2 sm:px-4 sm:py-2 rounded-full font-medium hover:bg-[#38539A] transition duration-300 text-sm sm:text-base"
                >
                  Book Appointment
                </motion.button>
              </motion.div>

              {/* Patients Info - Only show on desktop, positioned below content */}
              <motion.div 
                variants={itemVariants}
                className="hidden md:flex flex-col items-left mt-8"
              >
                <div className="flex -space-x-2 mb-2 pl-6">
                  <img
                    src="/image1.png"
                    alt="Patient"
                    className="w-9 h-9 rounded-full border-2 border-white"
                  />
                  <img
                    src="/image2.png"
                    alt="Patient"
                    className="w-9 h-9 rounded-full border-2 border-white"
                  />
                  <img
                    src="/image3.png"
                    alt="Patient"
                    className="w-9 h-9 rounded-full border-2 border-white"
                  />
                </div>
                <div className="text-left">
                  <p className="text-black font-bold text-lg leading-tight pl-9 mb-1">
                    3,000+
                  </p>
                  <p className="text-black text-base leading-tight">
                    Our Worldwide Patients
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image (Visible only on mobile/tablet) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="md:hidden w-full flex flex-col items-left"
          >
            <img
              src="/hero-image.png"
              alt="Healthcare professionals"
              className="w-full max-w-sm sm:max-w-md"
            />

            {/* Text below image for mobile */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="mt-4 text-left"
            >
              <div className="flex -space-x-2 justify-center mb-2 pl-6">
                <img
                  src="/image1.png"
                  alt="Patient"
                  className="w-9 h-9 rounded-full border-2 border-white"
                />
                <img
                  src="/image2.png"
                  alt="Patient"
                  className="w-9 h-9 rounded-full border-2 border-white"
                />
                <img
                  src="/image3.png"
                  alt="Patient"
                  className="w-9 h-9 rounded-full border-2 border-white"
                />
              </div>
              <p className="text-black font-bold text-lg pl-9 mb-1">3,000+</p>
              <p className="text-black text-base">Our Worldwide Patients</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Shape */}
      <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 w-[180px] sm:w-[250px] h-[180px] sm:h-[250px] bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>
    </section>
  );
};

export default Hero;