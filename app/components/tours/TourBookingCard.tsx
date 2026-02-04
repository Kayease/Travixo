"use client";
import React, { useState } from "react";

/**
 * TourBookingCard Props Interface
 */
interface TourBookingCardProps {
  /** Price per person */
  price: number;
  /** Currency symbol */
  currency?: string;
  /** Default date */
  defaultDate?: string;
}

/**
 * TourBookingCard Component
 *
 * Sticky booking card with price, date picker, and guest counter.
 *
 * Design Specifications (from Figma):
 * - Card: White background, shadow, border-radius 12px
 * - Price: Large, bold display
 * - Date picker, Adult/Children counters
 * - "Check Availability" CTA button
 *
 * @param {TourBookingCardProps} props - Booking data
 * @returns {JSX.Element} The rendered booking card
 */
export const TourBookingCard: React.FC<TourBookingCardProps> = ({
  price,
  currency = "$",
  defaultDate = "Jan 17, 2026",
}) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [activeTab, setActiveTab] = useState<"book" | "enquiry">("book");

  return (
    <aside
      className="w-full lg:w-[320px] p-5 md:p-6"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Price Display */}
      <div className="mb-5">
        <span className="font-body text-sm text-brand-brown/60">From</span>
        <p className="font-display italic font-semibold text-2xl md:text-[28px] text-brand-brown">
          {currency}
          {price} <span className="text-base font-normal">/person</span>
        </p>
      </div>

      {/* Book / Enquiry Tabs */}
      <div className="flex gap-8 mb-5 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("book")}
          className={`font-display italic font-medium text-base pb-2 transition-colors ${
            activeTab === "book"
              ? "text-brand-brown border-b-2 border-brand-orange"
              : "text-brand-brown/50"
          }`}
        >
          Book
        </button>
        <button
          onClick={() => setActiveTab("enquiry")}
          className={`font-display italic font-medium text-base pb-2 transition-colors ${
            activeTab === "enquiry"
              ? "text-brand-brown border-b-2 border-brand-orange"
              : "text-brand-brown/50"
          }`}
        >
          Enquiry
        </button>
      </div>

      {/* Date Selection */}
      <div className="mb-4">
        <label className="font-body text-sm text-brand-brown mb-1 block">
          Date
        </label>
        <input
          type="text"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full font-body text-base text-brand-brown bg-transparent border-b border-gray-200 pb-2 outline-none focus:border-brand-orange transition-colors"
          placeholder="Select date"
        />
      </div>

      {/* Adult Counter */}
      <div className="flex items-center justify-between mb-3 py-2">
        <div>
          <span className="font-display italic font-medium text-base text-brand-brown">
            Adult
          </span>
          <span className="font-body text-xs text-brand-brown/60 ml-1">
            (13+ age)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setAdults(Math.max(0, adults - 1))}
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-brand-brown/60 hover:border-brand-orange hover:text-brand-orange transition-colors"
          >
            −
          </button>
          <span className="font-body text-base text-brand-brown w-4 text-center">
            {adults}
          </span>
          <button
            onClick={() => setAdults(adults + 1)}
            className="w-7 h-7 rounded-full flex items-center justify-center text-white transition-colors"
            style={{ backgroundColor: "#FF6E00" }}
          >
            +
          </button>
        </div>
      </div>

      {/* Children Counter */}
      <div className="flex items-center justify-between mb-6 py-2">
        <div>
          <span className="font-display italic font-medium text-base text-brand-brown">
            Children
          </span>
          <span className="font-body text-xs text-brand-brown/60 ml-1">
            (age 3-12)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setChildren(Math.max(0, children - 1))}
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-brand-brown/60 hover:border-brand-orange hover:text-brand-orange transition-colors"
          >
            −
          </button>
          <span className="font-body text-base text-brand-brown w-4 text-center">
            {children}
          </span>
          <button
            onClick={() => setChildren(children + 1)}
            className="w-7 h-7 rounded-full flex items-center justify-center text-white transition-colors"
            style={{ backgroundColor: "#FF6E00" }}
          >
            +
          </button>
        </div>
      </div>

      {/* Check Availability Button */}
      <button className="w-full py-3 bg-[#FF6E00] border border-[#FF6E00] rounded-[12px] overflow-hidden transition-all duration-300 active:scale-[0.98] relative group">
        {/* Fill animation from bottom to top */}
        <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
        <span className="relative z-10 font-display italic font-normal text-[18px] leading-[24px] text-white group-hover:text-[#FF6E00] transition-colors duration-300">
          Check Availability
        </span>
      </button>
    </aside>
  );
};

export default TourBookingCard;
