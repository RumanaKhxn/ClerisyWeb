import React from 'react';

const ExpertDoctors = () => {
  return (
    <section className="py-5 bg-white">
      {/* Divider Line */}
      <div className="h-px mb-12"></div>
      
      {/* Outer colored section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Inner white container */}
          <div className="bg-[#e8f1ff] rounded-2xl p-8 md:p-12 shadow-lg round-6-3">
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-4xl font-bold text-[#385399] mb-6">
                Meet Our Expert Doctors
              </h1>
              <p className="text-xl text-[#385399] max-w-2xl mx-auto">
                We aim to share information about our team
              </p>
            </div>

            {/* Doctor Profile with Image */}
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Doctor Image */}
                <div className="lg:w-1/3">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/doctor.png" 
                      alt="Dr. Gulam Khan, MD - Gastroenterologist"
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                  </div>
                </div>

                {/* Doctor Information */}
                <div className="lg:w-2/3">
                  {/* Doctor Name and Specialty */}
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#385399] mb-2">
                      Dr. Gulam Khan, MD
                    </h2>
                    <p className="text-xl text-[#191919] font-bold">
                      Gastroenterologist
                    </p>
                  </div>

                  {/* Doctor Description */}
                  <div className="space-y-6">
                    <p className="text-lg text-[#191919] leading-relaxed">
                      Dr. Gulam Khan is a gastroenterologist providing quality care and proudly serving the East Meadow, Hicksville Long Island, Brooklyn, Floral Park and Richmond Hill communities in New York.
                    </p>

                    <p className="text-lg text-[#191919] leading-relaxed">
                      Dr. Khan attended the Osmania Medical College, University of Health Sciences, graduating in 1982, and completed his Residency at the Maimonides Med Center. Dr. Khan is American Board of Internal Medicine and Gastroenterology certified. He is also a member of the American Society for Gastrointestinal Endoscopy and the American College of Gastroenterology.
                    </p>

                    <p className="text-lg text-[#191919] leading-relaxed">
                      Dr. Khan and his office staff are highly bilingual, speaking English, Arabic, Italian and Spanish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertDoctors;