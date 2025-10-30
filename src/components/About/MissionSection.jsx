import React, { useState, useEffect, useRef } from "react";

const MissionSection = () => {
  const [patientsCount, setPatientsCount] = useState(0);
  const [happyPatientsCount, setHappyPatientsCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate worldwide patients count
      animateCount(0, 254300, 2000, setPatientsCount);
      
      // Animate happy patients count
      animateCount(0, 10000, 1500, setHappyPatientsCount);
      
      // Animate doctors count
      animateCount(0, 50, 1000, setDoctorsCount);
      
      // Animate experience count
      animateCount(0, 20, 1000, setExperienceCount);
    }
  }, [isVisible]);

  const animateCount = (start, end, duration, setCount) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      
      // Format number with commas
      const formattedCount = currentCount.toLocaleString();
      setCount(formattedCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#e8f1ff] overflow-hidden"
      style={{
        borderRadius: "100px 25px 100px 25px",
        margin: "40px",
        padding: "40px 0"
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16 py-10 px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Left Image with animation */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm lg:max-w-md animate-fade-in-left">
            <img
              src="/mission.png"
              alt="Clerisy Medical PC Mission"
              className="w-full h-48 sm:h-90 md:h-120 object-cover rounded-2xl shadow-xl"
            />

            {/* Small Overlay (like Figma patients info) */}
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md flex items-center gap-2">
              <div className="flex -space-x-2">
                <img src="./public/image1.png" alt="Patient" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src="./public/image2.png" alt="Patient" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src="./public/image3.png" alt="Patient" className="w-6 h-6 rounded-full border-2 border-white" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm leading-tight">
                  {patientsCount}+
                </p>
                <p className="text-gray-600 text-xs leading-tight">Our Worldwide Patients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content with animation */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 text-center lg:text-left animate-fade-in-right">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#385399] leading-tight">
            Our Mission
          </h2>

          {/* Mission Description */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At Clerisy Medical PC, we are dedicated to providing exceptional medical care with compassion and expertise. 
            Our mission is to improve the health and well-being of our community through innovative treatments, 
            personalized care, and unwavering commitment to patient satisfaction.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 mt-4">
            <div className="text-center animate-count-up">
              <p className="text-3xl font-bold text-[#385399]">
                {happyPatientsCount}+
              </p>
              <p className="text-gray-600 text-sm sm:text-base">Happy Patients</p>
            </div>
            <div className="text-center animate-count-up">
              <p className="text-3xl font-bold text-[#385399]">
                {doctorsCount}+
              </p>
              <p className="text-gray-600 text-sm sm:text-base">Specialist Doctors</p>
            </div>
            <div className="text-center animate-count-up">
              <p className="text-3xl font-bold text-[#385399]">
                {experienceCount}+
              </p>
              <p className="text-gray-600 text-sm sm:text-base">Years Experience</p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <button className="border border-[#385399] text-[#385399] px-8 py-3 rounded-full font-medium transition duration-300">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Add Tailwind CSS animations */}
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