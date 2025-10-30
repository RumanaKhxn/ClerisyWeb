import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        {/* Main Container with Blue Background - Animated */}
        <div 
          className="bg-[#E6F3FF] p-8  lg:grid lg:grid-cols-2 lg:gap-12 items-center transform transition-all duration-1000 ease-out translate-y-12 opacity-0 animate-containerSlideUp"
          style={{
            borderRadius: "100px 25px 100px 25px"
          }}
        >
          {/* Left Column: Info */}
          <div className="space-y-6">
            <h2 className="text-6xl text-[#385399] sm:text-5xl">
              We're here <br /> <span className="text-[#ADAFB2]">for you.</span>
            </h2>
            <img src="./public/contact.png" alt="Contact illustration" />
          </div>

          {/* Right Column: Form */}
          <div className="space-y-8">
            {/* Two Column Form Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* First Name */}
                <div>
                  <label className="block text-lg font-semibold text-[#385399] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500 bg-transparent transition-colors duration-300"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-lg font-semibold text-[#385399] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500 bg-transparent transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Last Name */}
                <div>
                  <label className="block text-lg font-semibold text-[#385399] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500 bg-transparent transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-lg font-semibold text-[#385399] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500 bg-transparent transition-colors duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Full Width Message Field */}
            <div>
              <label className="block text-lg font-semibold text-[#385399] mb-1">
                Message
              </label>
              <textarea
                placeholder="Tell us how we can help?"
                rows={4}
                className="w-full px-4 py-3  border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500 bg-transparent resize-none transition-colors duration-300"
              />
            </div>

            {/* Single Divider Line */}
            <div className="h-px bg-gray-300 my-1 mb-3"></div>

            {/* Send Button - Right Aligned */}
            <div className="flex justify-end">
              <button className="bg-[#385399] hover:bg-[#2f467f] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 text-lg transform hover:scale-105">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes containerSlideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-containerSlideUp {
          animation: containerSlideUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;