import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MapSection = () => {
  const maps = [
    {
      id: 1,
      title: "Foster Family Medical Center",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.203095066393!2d-73.96942522373609!3d40.63951477141159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b8de46b54df%3A0xc1849db99ce558f2!2sFoster%20Family%20Medical%20Center%2C%201225%20Foster%20Ave%2C%20Brooklyn%2C%20NY%2011230%2C%20USA!5e0!3m2!1sen!2sin!4v1730679656508!5m2!1sen!2sin",
    },
    {
      id: 2,
      title: "101-20 Lefferts Blvd",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5587957709614!2d-73.82937072373637!3d40.68587597141279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2605d97f803e3%3A0x59a5ff7cf9c74238!2s101-20%20Lefferts%20Blvd%2C%20South%20Richmond%20Hill%2C%20NY%2011419%2C%20USA!5e0!3m2!1sen!2sin!4v1730679656508!5m2!1sen!2sin",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === maps.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? maps.length - 1 : prev - 1));

  return (
    <section className="w-full bg-white py-10 flex justify-center">
      <div className="relative w-[110%] md:w-[90%] h-[430px] overflow-hidden rounded-2xl shadow-lg">
        {maps.map((map, index) => (
          <div
            key={map.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <iframe
              title={map.title}
              src={map.src}
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 rounded-2xl"
            ></iframe>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#385399] text-white p-3 rounded-full shadow-md hover:bg-[#2c4078] transition z-20"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#385399] text-white p-3 rounded-full shadow-md hover:bg-[#2c4078] transition z-20"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default MapSection;
