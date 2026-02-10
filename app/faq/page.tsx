"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 * FAQ Hero Section
 */
const FAQHeroSection = () => {
  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-[98px]"
      style={{ backgroundColor: "#FFF7E5" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="text-center">
          <h1 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-body font-medium text-[15px] sm:text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-brand-brown max-w-[90%] md:max-w-[780px] mx-auto">
            Find answers to common questions about our tours, bookings, and
            travel services
          </p>
        </div>
      </div>
    </section>
  );
};

/**
 * FAQ Item Interface
 */
interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

/**
 * FAQ Data
 */
const faqData: FAQItem[] = [
  {
    category: "Booking & Payment",
    question: "How do I book a tour with Travixo?",
    answer:
      "Booking a tour is easy! Browse our destinations, select your preferred tour, choose your dates, and proceed to checkout. You can also contact our travel experts for personalized assistance.",
  },
  {
    category: "Booking & Payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), UPI, and bank transfers. All payments are processed securely through encrypted payment gateways.",
  },
  {
    category: "Booking & Payment",
    question: "Can I make changes to my booking after confirmation?",
    answer:
      "Yes, you can modify your booking up to 14 days before departure. Changes are subject to availability and may incur additional fees depending on the tour and timing.",
  },
  {
    category: "Booking & Payment",
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 30+ days before departure receive a full refund minus 10% processing fee. 15-30 days: 50% refund. Less than 15 days: no refund. Travel insurance is recommended.",
  },
  {
    category: "Travel & Tours",
    question: "Are your tours suitable for families with children?",
    answer:
      "Yes! We offer family-friendly tours designed for all ages. Each tour listing indicates the recommended age range and any specific requirements for children.",
  },
  {
    category: "Travel & Tours",
    question: "What is included in the tour package?",
    answer:
      "Tour packages typically include accommodation, guided tours, specified meals, and transportation as detailed in each tour description. Flights and travel insurance are usually not included unless specified.",
  },
  {
    category: "Travel & Tours",
    question: "Do I need travel insurance?",
    answer:
      "While not mandatory, we strongly recommend travel insurance to cover unexpected events, medical emergencies, trip cancellations, and lost baggage. We can help you arrange coverage.",
  },
  {
    category: "Travel & Tours",
    question: "What should I pack for my tour?",
    answer:
      "Packing requirements vary by destination and season. You'll receive a detailed packing list after booking. Generally, bring comfortable walking shoes, weather-appropriate clothing, and any personal medications.",
  },
  {
    category: "Safety & Support",
    question: "Is it safe to travel with Travixo?",
    answer:
      "Absolutely. Safety is our top priority. We work with certified local guides, vetted accommodations, and follow strict safety protocols. Our 24/7 support team is always available during your trip.",
  },
  {
    category: "Safety & Support",
    question: "What if I need assistance during my trip?",
    answer:
      "Our 24/7 emergency support line is available throughout your journey. You'll receive emergency contact numbers and your tour guide's details before departure.",
  },
  {
    category: "Safety & Support",
    question: "Do you provide travel documents and visa assistance?",
    answer:
      "Yes, we provide detailed information about visa requirements for your destination. While we don't process visas directly, we can guide you through the application process and required documentation.",
  },
  {
    category: "Special Requirements",
    question: "Can you accommodate dietary restrictions?",
    answer:
      "Yes! Please inform us of any dietary requirements, allergies, or preferences when booking. We'll work with our partners to accommodate your needs wherever possible.",
  },
  {
    category: "Special Requirements",
    question: "Are your tours accessible for travelers with disabilities?",
    answer:
      "We strive to make our tours accessible to everyone. Many of our tours can be adapted for travelers with mobility issues. Please contact us to discuss specific requirements.",
  },
  {
    category: "Special Requirements",
    question: "Can I customize my tour itinerary?",
    answer:
      "Absolutely! We offer custom tour packages tailored to your preferences. Contact our travel experts to design your perfect adventure.",
  },
];

/**
 * FAQ Accordion Item Component
 */
interface FAQAccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-4 md:py-6 flex justify-between items-start text-left hover:bg-gray-50 transition-colors duration-200 px-4 md:px-6 cursor-pointer"
      >
        <div className="flex-1 pr-4 md:pr-8">
          <h3 className="font-body font-semibold text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-brand-brown">
            {item.question}
          </h3>
        </div>
        <div className="shrink-0">
          <svg
            className={`w-6 h-6 text-brand-orange transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""
              }`}
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
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"
          }`}
      >
        <div className="px-4 md:px-6 pb-4 md:pb-6">
          <p className="font-body font-normal text-[15px] sm:text-[16px] leading-[24px] md:leading-[28px] text-gray-700">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * FAQ Content Section
 */
const FAQContentSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Group FAQs by category
  const categories = Array.from(new Set(faqData.map((item) => item.category)));

  return (
    <section
      className="relative w-full py-12 lg:py-[80px]"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-10">
        {categories.map((category, categoryIndex) => (
          <div key={category} className={categoryIndex > 0 ? "mt-12" : ""}>
            {/* Category Title */}
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[34px] md:leading-[40px] text-brand-brown mb-4 md:mb-6">
              {category}
            </h2>

            {/* FAQ Items */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              {faqData
                .filter((item) => item.category === category)
                .map((item, index) => {
                  const globalIndex = faqData.indexOf(item);
                  return (
                    <FAQAccordionItem
                      key={globalIndex}
                      item={item}
                      isOpen={openIndex === globalIndex}
                      onToggle={() =>
                        setOpenIndex(
                          openIndex === globalIndex ? null : globalIndex,
                        )
                      }
                    />
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/**
 * Still Have Questions CTA Section
 */
const StillHaveQuestionsSection = () => {
  return (
    <section
      className="relative w-full py-8 md:py-12 lg:py-[60px]"
      style={{ backgroundColor: "#FFF7E5" }}
    >
      <div className="max-w-[1080px] mx-auto px-5 md:px-10 text-center">
        <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] lg:text-[36px] leading-[32px] md:leading-[44px] text-brand-brown mb-3 md:mb-4">
          Still have questions?
        </h2>
        <p className="font-body font-medium text-[15px] sm:text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-brand-brown mb-6 md:mb-8 max-w-[90%] md:max-w-[600px] mx-auto">
          Can't find the answer you're looking for? Our friendly team is here to
          help you plan your perfect adventure.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-[12px] font-display italic font-normal transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange relative overflow-hidden group px-6 py-2.5 text-[18px] leading-[24px] bg-brand-orange border border-brand-orange text-white"
        >
          <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
          <span className="relative z-10 group-hover:text-brand-orange transition-colors duration-300">
            Contact Us
          </span>
        </a>
      </div>
    </section>
  );
};

/**
 * FAQ Page Component
 */
export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <FAQHeroSection />
        <FAQContentSection />
        <StillHaveQuestionsSection />
      </main>
      <Footer />
    </>
  );
}
