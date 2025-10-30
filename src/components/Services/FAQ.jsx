import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of insurance do you accept?",
      answer: "We accept a wide range of insurance plans. Please check our website or contact us directly to verify if your insurance is covered."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by calling our office or booking online through our website."
    },
    {
      question: "What should I bring to my first visit?",
      answer: "Please bring a valid ID, your insurance card, and any medical records or test results that might be relevant."
    },
    {
      question: "Do you accept walk-in patients?",
      answer: "Walk-ins are accepted based on availability, but we recommend booking an appointment in advance to ensure timely service."
    },
    {
      question: "Can I reschedule my appointment?",
      answer: "Yes, appointments can be rescheduled up to 24 hours in advance through our online system or by calling our support team."
    }
  ];

  return (
    <section className="relative bg-white py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 overflow-hidden">
      <div className="max-w-[1080px] mx-auto">
        {/* Header */}
        <div className="text-start mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#191919]">
            FAQ's
          </h1>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-[12px] px-[30px] py-[10px] hover:shadow-sm transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg sm:text-xl font-semibold text-[#191919]">
                  {faq.question}
                </h3>
                <svg
                  className="w-5 h-5 text-gray-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {faq.answer && (
                <p className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
