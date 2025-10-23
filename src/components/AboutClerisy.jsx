import React from "react";
import { motion } from "framer-motion";

const AboutClerisy = () => {
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

  const leftItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
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
    <section className="relative bg-[#e8f1ff] py-8 sm:py-7 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
        {/* Left Image - Comes from left */}
        <motion.div 
          variants={leftItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-sm lg:max-w-md">
            <motion.img
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src="/about-image.png"
              alt="About Clerisy Medical PC"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />

            {/* Small Overlay - Background Removed */}
            <motion.div 
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
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
                <p className="text-black font-semibold text-xs leading-tight shadow-sm">
                  2,54,300+
                </p>
                <p className="text-black text-xs leading-tight shadow-sm">
                  Our Worldwide Patients
                </p>
              </div>
            </motion.div>
          </div>

          {/* Text below image for mobile */}
          <motion.div 
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="block lg:hidden mt-4 text-center bg-white p-3 rounded-lg"
          >
            <p className="text-gray-900 font-semibold text-sm">2,54,300+</p>
            <p className="text-gray-600 text-sm">Our Worldwide Patients</p>
          </motion.div>
        </motion.div>

        {/* Right Content - Comes from right */}
        <motion.div 
          variants={rightItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 text-center lg:text-left"
        >
          {/* Heading */}
          <motion.h2 
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#385399] leading-tight"
          >
            About Clerisy Medical PC
          </motion.h2>

          {/* Paragraph */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            <motion.p 
              variants={fadeInVariants}
              className="text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              At Clerisy Medical PC, we are committed to delivering
              compassionate, patient-centered care with the highest standards of
              medical excellence. Our experienced team of healthcare
              professionals offers comprehensive services tailored to your
              unique needs, from routine checkups to specialized treatments.
              With a focus on trust, transparency, and advanced medical
              technology, we strive to be your trusted partner in health and
              wellness.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mt-2"
          >
            <motion.div variants={fadeInVariants}>
              <p className="text-2xl font-bold text-[#385399]">10k+</p>
              <p className="text-gray-600 text-xs sm:text-sm">Happy Patients</p>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="text-2xl font-bold text-[#385399]">50+</p>
              <p className="text-gray-600 text-xs sm:text-sm">
                Specialist Doctors
              </p>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="text-2xl font-bold text-[#385399]">20+</p>
              <p className="text-gray-600 text-xs sm:text-sm">
                Years Experience
              </p>
            </motion.div>
          </motion.div>

          {/* Button */}
          <motion.div 
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-4"
          >
            <button className="border border-[#385399] text-[#385399] px-4 py-2 rounded-full font-medium hover:bg-[#385399] hover:text-white transition duration-300 text-sm">
              Read More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutClerisy;