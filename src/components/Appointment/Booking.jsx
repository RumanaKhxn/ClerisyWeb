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

// ✅ Main Booking Component
const Booking = () => {
  return (
    <>
      {/* ===== Appointment Form Section ===== */}
      <section className="bg-white py-7 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Form */}
          <div className="lg:col-span-2 bg-white  rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Request an Appointment
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inputs */}
              {[
                { label: "Select a Provider", type: "select", placeholder: "Choose a provider" },
                { label: "Select a Location", type: "select", placeholder: "Choose a location" },
                { label: "First Name", type: "text", placeholder: "Enter your first name" },
                { label: "Last Name", type: "text", placeholder: "Enter your last name" },
                { label: "Date of Birth", type: "text", placeholder: "MM/DD/YYYY" },
                { label: "Phone Number", type: "text", placeholder: "(XXX) XXX-XXXX" },
                { label: "Email Address", type: "email", placeholder: "Enter your email" },
                { label: "Preferred Date/Time", type: "datetime-local" },
                { label: "Reason for Visit", type: "select", placeholder: "Choose a reason" },
                { label: "Previous Patient?", type: "select", placeholder: "Yes/No" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#0C1C6C]">
                      <option>{field.placeholder}</option>
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#0C1C6C]"
                    />
                  )}
                </div>
              ))}

              {/* Additional Info */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#0C1C6C]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-right">
                <button
                  type="submit"
                  className="bg-[#385399] text-white px-6 py-2 rounded-full hover:bg-[#0A1557] transition font-medium"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Patient Portal */}
            <div className="border border-gray-300 bg-[#E9F0FF] rounded-md p-5">
              <h3 className="text-black font-semibold mb-2 ml-4 text-lg">
                eClinicalWorks Patient Portal
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                Already a patient? Manage your appointments through our eCW portal
              </p>
              <button className="w-full bg-gray-400 text-white py-2 rounded-full font-medium cursor-not-allowed mb-3">
                Go to eCW Portal
              </button>
              <ul className="text-sm text-gray-500 space-y-1 list-disc ml-5">
                <li>View upcoming appointments</li>
                <li>Reschedule existing appointments</li>
                <li>Access medical records</li>
                <li>Message your healthcare provider</li>
              </ul>
            </div>

            {/* Urgent Care */}
            <div className="border border-red-500 rounded-md p-5 bg-white">
              <h3 className="text-red-600 font-semibold mb-2">Need Urgent Care?</h3>
              <p className="text-sm text-gray-700 mb-3">
                For emergency situations, please call our <span className="font-bold">24/7</span> emergency hotline.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-red-600 font-bold text-xl">911</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
                  Call Now
                </button>
              </div>
            </div>

           <div className="border border-blue-300 rounded-md p-5 bg-white">
  <h3 className="text-[#0C1C6C] font-semibold mb-3">Our Location</h3>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0193825367374!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1699253169872!5m2!1sen!2sus"
    width="100%"
    height="250"
    allowFullScreen=""
    loading="lazy"
    className="rounded-md mb-3 border-0"
  ></iframe>

  <p className="text-sm text-gray-700">
    <span className="block font-medium">123 Clerisy Medical PC</span>
    Medical District, MD 12345
  </p>
</div>
            </div>
        </div>

        {/* ===== Thank You Section ===== */}
       <div className="max-w-7xl mx-auto mt-20 px-6 text-gray-800 pl-9 text-left">
  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Thank You</h3>
  <p className="text-base mb-8 leading-relaxed text-gray-700">
    Your appointment request has been submitted. We will contact you
    within <span className="font-semibold text-gray-900">2 business days</span> 
    to confirm your appointment. For immediate assistance, please call us at 
    <span className="font-semibold text-gray-900"> (555) 123-4567</span>.
  </p>

  <h3 className="text-xl font-semibold mb-3 text-gray-900">Manage Your Appointments</h3>
  <p className="text-base mb-6 text-gray-700 leading-relaxed">
    You can manage your appointments through our eHealthRecords patient
    portal. Click the button below to access your account.
  </p>

  <button className="bg-[#ADAFB2] text-white px-6 py-2 rounded-full text-base font-medium hover:bg-[#8E9093] transition">
    Access eHealthRecords
  </button>
</div>

      </section>

      {/* ===== Get Started Section ===== */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-[90px] px-6"
        style={{ backgroundImage: `url('getstart.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#385399] mb-4">
            Ready to Get Started?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#191919] leading-relaxed mb-8">
            Schedule your appointment today and take the first step towards better health.
          </p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.0}
            className="flex flex-wrap justify-center gap-4 mt-4"
          >
            <AnimatedButton text="Explore Services" link="/contact" bgColor="#ADAFB2" large />
            <AnimatedButton text="Appointment" link="/appointment" bgColor="#385399" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Booking;
