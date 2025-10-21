import React from 'react';

const MapSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Simple Two Maps Side by Side */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/Map1.png" 
              alt="Clerisy Medical PC Location Map 1"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/Map2.png" 
              alt="Clerisy Medical PC Location Map 2"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;