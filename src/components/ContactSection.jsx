import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Container with Blue Background */}
        <div className="bg-[#E6F3FF] rounded-2xl p-8 shadow-lg lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Left Column: Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-4xl">
              We're here for you.
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
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500 bg-transparent"
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
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500 bg-transparent"
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
                    placeholder="Last name"
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500 bg-transparent"
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
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500 bg-transparent"
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
                className="w-full px-4 py-3 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500 bg-transparent resize-none"
              />
            </div>

            {/* Single Divider Line */}
            <div className="h-px bg-gray-300 my-1"></div>

            {/* Send Button - Right Aligned */}
            <div className="flex justify-end">
              <button className="bg-[#385399] hover:bg-[#2f467f] text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;