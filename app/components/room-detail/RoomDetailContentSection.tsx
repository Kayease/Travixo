"use client";

import React, { useState } from "react";
import Image from "next/image";

/**
 * BookingWidget Component
 * Sidebar widget for booking with date selection and guest counters
 */
const BookingWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"book" | "enquiry">("book");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  return (
    <div
      className="bg-[#FFF7E5] rounded-[12px] w-full lg:w-[467px] relative"
      style={{ height: "480px" }}
    >
      {/* Price Section */}
      <div className="absolute top-[18px] left-[18px] w-[86px] h-[54px] flex flex-col">
        <span className="font-display italic font-medium text-[20px] leading-[27px] text-[#4B3621]">
          From
        </span>
        <span className="font-display italic font-medium text-[20px] leading-[27px] text-[#4B3621]">
          $45 <span className="text-[14px]">/person</span>
        </span>
      </div>

      {/* Tabs Section */}
      <div
        className="absolute top-[124px] left-[70px] cursor-pointer"
        onClick={() => setActiveTab("book")}
      >
        <span className="font-display italic font-medium text-[24px] leading-[32px] text-[#4B3621]">
          Book
        </span>
        <div
          className={`absolute top-[36px] left-[-9px] w-[69px] h-[1px] rounded-[8px] transition-colors duration-300 ${
            activeTab === "book" ? "bg-[#FF6E00]" : "bg-[#FF6E00]/20"
          }`}
        />
      </div>

      <div
        className="absolute top-[124px] left-[300px] cursor-pointer"
        onClick={() => setActiveTab("enquiry")}
      >
        <span className="font-display italic font-medium text-[24px] leading-[32px] text-[#4B3621]">
          Enquiry
        </span>
        <div
          className={`absolute top-[36px] left-[-2px] w-[87px] h-[1px] rounded-[8px] transition-colors duration-300 ${
            activeTab === "enquiry" ? "bg-[#FF6E00]" : "bg-[#FF6E00]/20"
          }`}
        />
      </div>

      {/* Rows */}
      {/* Date Row */}
      <div className="absolute top-[193px] left-[18px] right-[18px] flex justify-between items-center h-[30px]">
        <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621]">
          Date
        </span>
        <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621]">
          Jan 17, 2026
        </span>
      </div>
      {/* Separator Line 1 */}
      <div className="absolute top-[241px] left-[18px] right-[18px] h-px bg-black/20" />

      {/* Adult Row */}
      <div className="absolute top-[259px] left-[18px] h-[30px] flex items-center">
        <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621]">
          Adult ( 13+ age )
        </span>
      </div>
      {/* Adult Counter */}
      <div className="absolute top-[268px] right-[18px] flex items-center gap-3">
        <button
          onClick={() => setAdults(Math.max(0, adults - 1))}
          className="w-[20px] h-[20px] rounded-full bg-[#FF6E00]/40 flex items-center justify-center hover:bg-[#FF6E00]/60 transition-colors"
        >
          <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
            <rect width="10" height="2" rx="1" fill="#4B3621" />
          </svg>
        </button>
        <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621] w-[20px] text-center">
          {adults}
        </span>
        <button
          onClick={() => setAdults(adults + 1)}
          className="w-[20px] h-[20px] rounded-full bg-[#FF6E00] flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 0V10M0 5H10" stroke="white" strokeWidth="2" />
          </svg>
        </button>
      </div>
      {/* Separator Line 2 */}
      <div className="absolute top-[307px] left-[18px] right-[18px] h-px bg-black/20" />

      {/* Children Row */}
      <div className="absolute top-[325px] left-[18px] h-[30px] flex items-center">
        <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621]">
          Children ( age 3-12 )
        </span>
      </div>
      {/* Children Counter */}
      <div className="absolute top-[329px] right-[18px] flex items-center gap-3">
        <button
          onClick={() => setChildren(Math.max(0, children - 1))}
          className="w-[20px] h-[20px] rounded-full bg-[#FF6E00]/40 flex items-center justify-center hover:bg-[#FF6E00]/60 transition-colors"
        >
          <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
            <rect width="10" height="2" rx="1" fill="#4B3621" />
          </svg>
        </button>
        <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621] w-[20px] text-center">
          {children}
        </span>
        <button
          onClick={() => setChildren(children + 1)}
          className="w-[20px] h-[20px] rounded-full bg-[#FF6E00] flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 0V10M0 5H10" stroke="white" strokeWidth="2" />
          </svg>
        </button>
      </div>
      {/* Separator Line 3 */}
      <div className="absolute top-[373px] left-[18px] right-[18px] h-px bg-black/20" />

      {/* Button */}
      <button className="absolute top-[409px] left-1/2 -translate-x-1/2 w-[90%] md:w-[431px] h-[45px] bg-[#FF6E00] rounded-[12px] border border-[#FF6E00] overflow-hidden transition-all duration-300 active:scale-95 group relative">
        {/* Fill animation from bottom to top */}
        <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
        <span className="relative z-10 font-display italic font-normal text-[18px] leading-[24px] text-white group-hover:text-[#FF6E00] transition-colors duration-300">
          Check Availability
        </span>
      </button>
    </div>
  );
};

/**
 * RoomDetailContentSection Component
 *
 * Displays room details including description, house rules,
 * image gallery, and a booking widget sidebar.
 */
const RoomDetailContentSection: React.FC = () => {
  // House rules list
  const houseRules = [
    "Check-in: From 3:00 PM",
    "Check-out: By 11:00 AM",
    "No smoking inside the rooms",
    "Pets: Allowed in select rooms – please inform us in advance",
    "Damage: Any damages or missing items may be charged",
  ];

  return (
    <section className="w-full bg-[#FFFCF5] py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* ============================================
            Top Section - Description & Booking Widget Side by Side
        ============================================ */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 mb-10">
          {/* Left Content - Description & Rules */}
          <div className="flex-1 max-w-[792px]">
            {/* Section Title */}
            <h2 className="font-display text-2xl md:text-[28px] italic font-semibold leading-7 text-[#4B3621] mb-4">
              Peaceful Escape
            </h2>

            {/* Divider */}
            <div className="w-full h-[0.5px] bg-black/40 mb-5" />

            {/* Description */}
            <p className="text-base md:text-lg font-normal leading-7 text-[#4B3621] mb-10">
              Discover pure relaxation in the Serenity Suite, a tranquil space
              designed to soothe your senses and provide the ultimate comfort.
              With soft, calming colors and carefully chosen decor, this suite
              offers a peaceful retreat from the busy world. Spacious and
              thoughtfully arranged, it features a cozy sitting area, luxurious
              bedding, and modern amenities to make your stay effortless and
              restful. Whether you&apos;re unwinding after a long day or
              enjoying a quiet morning, the Serenity Suite creates a serene
              atmosphere perfect for recharging your mind and body.
            </p>

            {/* House Rules Title */}
            <h3 className="font-display text-xl md:text-2xl italic font-semibold leading-7 text-[#4B3621] mb-4">
              House Rules
            </h3>

            {/* House Rules List */}
            <ul className="list-disc list-inside space-y-2 mb-2">
              {houseRules.map((rule, index) => (
                <li
                  key={index}
                  className="text-base md:text-lg font-normal leading-7 text-[#4B3621]"
                >
                  {rule}
                </li>
              ))}
            </ul>

            {/* Thank You Note */}
            <p className="text-base md:text-lg font-normal leading-7 text-[#4B3621]">
              Thank you for respecting our space and fellow guests. We&apos;re
              here to make your stay as pleasant as possible!
            </p>
          </div>

          {/* Right Sidebar - Booking Widget */}
          <div className="w-full lg:w-auto">
            <BookingWidget />
          </div>
        </div>

        {/* ============================================
            Image Gallery - Full Width (No Booking Widget)
        ============================================ */}
        <div className="max-w-[792px]">
          {/* Large Image */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[452px] rounded-xl overflow-hidden mb-4 lg:mb-5">
            <Image
              src="/images/room_detail/Frame 496.png"
              alt="Room panoramic view"
              fill
              className="object-cover"
            />
          </div>

          {/* Two Smaller Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            <div className="relative w-full h-[280px] md:h-[350px] lg:h-[452px] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/images/room_detail/Frame 498.png"
                alt="Cozy room interior"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full h-[280px] md:h-[350px] lg:h-[452px] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/images/room_detail/Frame 497.png"
                alt="Comfortable seating area"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailContentSection;
