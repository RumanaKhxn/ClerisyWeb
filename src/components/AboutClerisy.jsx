import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const AboutClerisy = () => {
  const leftItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Counter for stats
  const Counter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = parseInt(target.replace(/\D/g, ""));
        const incrementTime = Math.abs(Math.floor(duration / end));
        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= end) clearInterval(timer);
        }, incrementTime);
        return () => clearInterval(timer);
      }
    }, [isInView, target, duration]);

    return (
      <span ref={ref}>
        {count}
        {target.includes("k") && count === parseInt(target) ? "k" : ""}
        {target.includes("+") && "+"}
      </span>
    );
  };

  // Counter for image bottom-right
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
    <section
      className="relative bg-[#e8f1ff] overflow-hidden mx-4 sm:mx-8 lg:mx-12 mt-9 mb-5"
      style={{
        borderRadius: "100px 25px 100px 25px",
        padding: "50px 20px",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-[100px]">
        {/* Left Image */}
        <motion.div
          variants={leftItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start relative"
        >
          <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-full max-w-md">
            <motion.img
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src="/about-image.png"
              alt="About Clerisy Medical PC"
              className="w-full h-auto object-cover rounded-2xl"
            />

            {/* Bottom-right Counter on Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1.2}
              className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4  rounded-1xl px-3 py-2 sm:px-4 sm:py-3 flex flex-col items-end"
            >
              <div className="flex -space-x-2 mb-1 sm:mb-2">
                <img
                  src="/image1.png"
                  alt="Patient"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-sm border-none"
                />
                <img
                  src="/image2.png"
                  alt="Patient"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-sm border-none"
                />
                <img
                  src="/image3.png"
                  alt="Patient"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-sm border-none"
                />
              </div>
              <div className="text-end">
                <p className="text-[#FFFFFF] font-semibold text-base sm:text-lg leading-tight mb-0.5">
                  {count.toLocaleString()}+
                </p>
                <p className="text-[#FFFFFF] text-[10px] sm:text-sm leading-tight">
                  Our Worldwide Patients
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={rightItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 text-center lg:text-left px-4 sm:px-0"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#385399] leading-tight"
          >
            About Clerisy Medical PC
          </motion.h2>

          <motion.p
            variants={fadeInUpVariants}
            className="text-gray-700 text-sm sm:text-base leading-relaxed"
          >
            At Clerisy Medical PC, we are committed to delivering compassionate,
            patient-centered care with the highest standards of medical excellence.
            Our experienced team of healthcare professionals offers comprehensive
            services tailored to your unique needs, from routine checkups to
            specialized treatments. With a focus on trust, transparency, and advanced
            medical technology, we strive to be your trusted partner in health and
            wellness.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mt-2"
          >
            <motion.div variants={fadeInUpVariants} className="text-center">
              <p className="text-2xl font-bold text-[#385399]">
                <Counter target="20+" />
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">Years Experience</p>
            </motion.div>

            <motion.div variants={fadeInUpVariants} className="text-center">
              <p className="text-2xl font-bold text-[#385399]">
                <Counter target="50+" />
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">Specialist Doctors</p>
            </motion.div>

            <motion.div variants={fadeInUpVariants} className="text-center">
              <p className="text-2xl font-bold text-[#385399]">
                <Counter target="10k+" />
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">Happy Patients</p>
            </motion.div>
          </motion.div>

          {/* Button */}
          <motion.div
            variants={fadeInUpVariants}
            transition={{ delay: 0.8 }}
            className="mt-4"
          >
            <button className="border border-[#385399] text-[#385399] px-5 py-2 rounded-full font-medium hover:bg-[#385399] hover:text-white transition duration-300 text-sm sm:text-base">
              Read More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutClerisy;
