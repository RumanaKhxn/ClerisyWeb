import React from 'react';

const ContactDetails = () => {
  return (
    <section className="py-11 bg-white">
      <div className="max-w-6xl mx-auto px-6 mt-15" >

        {/* First Row - Both Contact Details */}
        <div className="grid md:grid-cols-2 gap-8 max-w-9xl mx-auto mb-8">
          
          {/* Section 1 - Contact Details */}
          <div className="bg-[#E6F3FF] rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700">info@healthcare.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address 1</h3>
                <p className="text-gray-700 leading-relaxed">
                  123 Medical Center Drive<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 - Contact Details */}
          <div className="bg-[#E6F3FF] rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700">info@healthcare.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address 2</h3>
                <p className="text-gray-700 leading-relaxed">
                  123 Medical Center Drive<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Both Operating Hours */}
        <div className="grid md:grid-cols-2 gap-8 max-w-9xl mx-auto">
          
          {/* Section 3 - Operating Hours */}
          <div className="bg-[#E6F3FF] rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Operating Hours</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Monday - Friday</span>
                <span className="text-gray-900 font-medium">8:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Saturday</span>
                <span className="text-gray-900 font-medium">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Sunday</span>
                <span className="text-gray-900 font-medium">Closed</span>
              </div>
              
              {/* Border after Sunday */}
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between">
                  <span className="text-red-600">Emergency</span>
                  <span className="text-red-600 font-medium">24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 - Operating Hours */}
          <div className="bg-[#E6F3FF] rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Operating Hours</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Monday - Friday</span>
                <span className="text-gray-900 font-medium">8:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Saturday</span>
                <span className="text-gray-900 font-medium">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Sunday</span>
                <span className="text-gray-900 font-medium">Closed</span>
              </div>
              
              {/* Border after Sunday */}
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between">
                  <span className="text-red-600">Emergency</span>
                  <span className="text-red-600 font-medium">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;