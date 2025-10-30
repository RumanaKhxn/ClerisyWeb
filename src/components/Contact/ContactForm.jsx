import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-[1180px] mx-auto px-6">
        {/* Heading + Form Container (Same Flow) */}
        <div
          className="bg-[#E6F3FF] rounded-[20px] shadow-lg flex flex-col items-center gap-[40px]"
          style={{
            padding: "40px 100px",
          }}
        >
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl text-[#385399]">
              We're here <span className="text-gray-500">for you.</span>
            </h1>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            {/* Two Column Form */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-[#385399] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-[#385399] text-gray-700 placeholder-gray-500 bg-transparent"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-[#385399] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-[#385399] text-gray-700 placeholder-gray-500 bg-transparent"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-[#385399] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-[#385399] text-gray-700 placeholder-gray-500 bg-transparent"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-[#385399] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-[#385399] text-gray-700 placeholder-gray-500 bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="mt-8">
              <label className="block text-lg font-semibold text-[#385399] mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell us how we can help?"
                rows={4}
                className="w-full px-4 py-3 focus:outline-none focus:border-[#385399] text-gray-700 placeholder-gray-500 bg-transparent resize-none "
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-300 my-6"></div>

            {/* Send Button */}
            <div className="flex justify-end">
              <button className="bg-[#385399] hover:bg-[#2f467f] text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg shadow-md">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
