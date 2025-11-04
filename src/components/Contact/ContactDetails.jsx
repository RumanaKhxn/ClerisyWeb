import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactDetails = () => {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-10 xl:px-16 mt-7">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* ===== LEFT SIDE ===== */}
        <div className="flex flex-col gap-6">
          {/* --- CONTACT DETAILS CARD --- */}
          <div className="bg-[#E6F3FF] rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-1xl sm:text-1xl text-[#385399] mb-5">
              Contact Details
            </h2>

            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="text-[#385399] w-5 h-5" />
                <p className="text-gray-800 leading-relaxed">
                  <span className="font-semibold">Tel:</span> (718)305-1900, (718)421-1756
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="text-[#385399] w-5 h-5" />
                <p className="text-gray-800 leading-relaxed">
                  <span className="font-semibold">Email:</span> clerisymedicalpc@gmail.com
                </p>
              </div>

              {/* Address 1 */}
              <div className="flex items-start gap-3">
                <MapPin className="text-[#385399] w-5 h-5" />
                <p className="text-gray-800 leading-relaxed">
                  <span className="font-semibold">Address 1:</span> 101-20 Lefferts Blvd South Richmond Hill NY 11419
                </p>
              </div>

              {/* Address 2 */}
              <div className="flex items-start gap-3">
                <MapPin className="text-[#385399] w-5 h-5" />
                <p className="text-gray-800 leading-relaxed">
                  <span className="font-semibold">Address 2:</span> 1225 Foster Avenue Brooklyn NY 11230
                </p>
              </div>
            </div>
          </div>

          {/* --- OPENING HOURS CARD --- */}
          <div className="bg-[#E6F3FF] rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-1xl sm:text-1xl text-[#385399] mb-5">
              Opening Hours
            </h3>
            <div className="space-y-3 text-gray-800">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-[#191919]">8:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-[#191919]">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-[#191919]">Closed</span>
              </div>
              <div className="border-t border-gray-300 pt-3 mt-3 flex justify-between">
                <span className="text-red-600 font-semibold">Emergency</span>
                <span className="text-red-600 font-semibold">24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDE: CONTACT FORM ===== */}
        <div className="bg-[#E6F3FF] rounded-2xl border border-gray-200 shadow-sm p-8 lg:p-10 w-full">
          <h1 className="text-3xl sm:text-xl text-[#385399] mb-3">
            We’re here <span className="text-gray-500">for you.</span>
          </h1>

          <form className="space-y-6">
            {/* Two-column inputs */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#385399]"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#385399]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#385399]"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#385399]"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                rows="1"
                placeholder="Tell us how we can help?"
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#385399] resize-none"
              ></textarea>
            </div>

            <div className="pt-3 flex justify-end mb-21">
              <button
                type="submit"
                className="bg-[#ADAFB2] hover:bg-[#ADAFB2] text-white font-semibold py-3 px-6 rounded-full transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
