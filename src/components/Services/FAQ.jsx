import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of insurance do you accept?",
      answer: "We accept a wide range of insurance plans. Please check our website or contact us directly to verify if your insurance is covered."
    },
    {
      question: "How do I schedule an appointment?",
      answer: ""
    },
    {
      question: "What should I bring to my first visit? ",
      answer: ""
    },
    {
      question: "What should I bring to my first visit? ",
      answer: ""
    },
    {
      question: "What should I bring to my first visit? ",
      answer: ""
    }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-7 md:mb-7lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#191919]">
            FAQ's
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              {/* Question with Arrow */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#191919]">
                  {faq.question}
                </h3>
                {/* Down Arrow */}
                <svg 
                  className="w-5 h-5 text-gray-500 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Answer - Only show if answer exists */}
              {faq.answer && (
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
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