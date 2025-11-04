import React from 'react';

const CoreValues = () => {
  return (
    <section className="py-10 bg-[#385399]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Our Core Values
          </h1>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Excellence Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md p-8 text-center border border-blue-100 hover:shadow-lg transition duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Excellence
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pursuing the highest standards in healthcare delivery
            </p>
          </div>

          {/* Compassion Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md p-8 text-center border border-blue-100 hover:shadow-lg transition duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Compassion
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Treating every patient with empathy and understanding
            </p>
          </div>

          {/* Innovation Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md p-8 text-center border border-blue-100 hover:shadow-lg transition duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Innovation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Embracing advanced medical technologies and techniques
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;