import React from 'react';

const FacilityGallery = () => {
  const facilityImages = [
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/gallery4.png",
    "/gallery5.png",
    "/gallery6.png"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#385399]">
            Our State-of-the-Art Facility
          </h1>
        </div>

        {/* Simple Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityImages.map((src, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={src}
                alt={`Clerisy Medical Facility ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilityGallery;