import React from 'react';

const ExpertDoctors = () => {
  return (
    <section
      className="py-8 bg-white" // 🔹 Reduced padding from py-5 (and inline 40px) to 8 (≈ 32px)
      style={{
        borderRadius: "100px 25px 100px 25px",
        margin: "30px",
        padding: "20px 0", // 🔹 Reduced from 40px to 20px
        backgroundColor: "#e8f1ff",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Main Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#385399] mb-4">
            Meet Our Expert Doctors
          </h1>
          <p className="text-lg md:text-xl text-[#385399] max-w-2xl mx-auto">
            We aim to share information about our team
          </p>
        </div>

        {/* Doctor Profile */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Doctor Image */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-sm">
                <img
                  src="/doctor.svg"
                  alt="Dr. Gulam Khan, MD - Gastroenterologist"
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Doctor Information */}
            <div className="lg:w-2/3">
              {/* Doctor Name and Specialty */}
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#385399] mb-2">
                  Dr. Gulam Khan, MD
                </h2>
                <p className="text-lg md:text-xl text-[#191919] font-bold">
                  Gastroenterologist
                </p>
              </div>

              {/* Doctor Description */}
              <div className="space-y-4">
                <p className="text-base md:text-lg text-[#191919] leading-relaxed">
                  Dr. Gulam Khan is a gastroenterologist providing quality care and proudly serving the East Meadow, Hicksville Long Island, Brooklyn, Floral Park and Richmond Hill communities in New York.
                </p>

                <p className="text-base md:text-lg text-[#191919] leading-relaxed">
                  Dr. Khan attended the Osmania Medical College, University of Health Sciences, graduating in 1982, and completed his Residency at the Maimonides Med Center. Dr. Khan is American Board of Internal Medicine and Gastroenterology certified. He is also a member of the American Society for Gastrointestinal Endoscopy and the American College of Gastroenterology.
                </p>

                <p className="text-base md:text-lg text-[#191919] leading-relaxed">
                  Dr. Khan and his office staff are highly bilingual, speaking English, Arabic, Italian and Spanish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertDoctors;
