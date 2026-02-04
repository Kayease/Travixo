"use client";
import React, { useState } from "react";

/**
 * FAQ Item Interface
 */
interface FAQItem {
  question: string;
  answer: string;
}

/**
 * TourFAQSection Props Interface
 */
interface TourFAQSectionProps {
  /** Array of FAQ items */
  faqs: FAQItem[];
}

/**
 * TourFAQSection Component
 * 
 * Accordion-style FAQ section for tour details.
 * 
 * Design Specifications (from Figma):
 * - Title: Playfair Display, italic, 600 weight, 24px
 * - Accordion items with expand/collapse
 * - Question text: Poppins, 400 weight, 16px
 * 
 * @param {TourFAQSectionProps} props - FAQ data
 * @returns {JSX.Element} The rendered FAQ section
 */
export const TourFAQSection: React.FC<TourFAQSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-6 border-t border-gray-200" aria-labelledby="faq-title">
      {/* Section Title */}
      <h2
        id="faq-title"
        className="font-display italic font-semibold text-xl md:text-[24px] leading-[32px] text-brand-brown mb-4"
      >
        Frequently asked questions
      </h2>

      {/* FAQ Accordion */}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-body text-sm md:text-base text-brand-brown pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-brand-brown/60 shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
              </svg>
            </button>

            {/* Answer Content */}
            {openIndex === index && (
              <div className="px-4 pb-4 bg-white">
                <p className="font-body text-sm md:text-base text-brand-brown/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourFAQSection;
