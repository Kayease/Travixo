"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useToast } from "@/app/context/ToastContext";

/**
 * BookingWidget Component
 * Sidebar widget for booking with date selection and guest counters
 */
const BookingWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"book" | "enquiry">("book");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [selectedDate, setSelectedDate] = useState("2026-01-17");

  const { showToast } = useToast();

  const handleAction = () => {
    if (activeTab === "book") {
      if (adults === 0 && children === 0) {
        showToast("Please select at least one guest.", "warning");
        return;
      }
      showToast(
        `Checking availability for ${adults} Adults and ${children} Children on ${selectedDate}...`,
        "info",
      );
    } else {
      showToast(
        `Sending enquiry for your stay on ${selectedDate}. We will contact you soon!`,
        "success",
      );
    }
  };

  return (
    <div
      className="bg-[#FFF7E5] rounded-[12px] w-full lg:w-[467px] relative p-6"
      style={{ minHeight: "480px" }}
    >
      {/* Price Section */}
      <div className="flex flex-col mb-8">
        <span className="font-display italic font-medium text-[20px] leading-[27px] text-[#4B3621]">
          From
        </span>
        <span className="font-display italic font-medium text-[20px] leading-[27px] text-[#4B3621]">
          $45 <span className="text-[14px]">/person</span>
        </span>
      </div>

      {/* Tabs Section */}
      <div className="flex gap-20 mb-10 justify-center">
        <div
          className="relative cursor-pointer"
          onClick={() => setActiveTab("book")}
        >
          <span className="font-display italic font-medium text-[24px] leading-[32px] text-[#4B3621]">
            Book
          </span>
          <div
            className={`absolute -bottom-1 left-[-9px] w-[69px] h-px rounded-[8px] transition-colors duration-300 ${
              activeTab === "book" ? "bg-[#FF6E00]" : "bg-transparent"
            }`}
          />
        </div>

        <div
          className="relative cursor-pointer"
          onClick={() => setActiveTab("enquiry")}
        >
          <span className="font-display italic font-medium text-[24px] leading-[32px] text-[#4B3621]">
            Enquiry
          </span>
          <div
            className={`absolute -bottom-1 left-[-2px] w-[87px] h-px rounded-[8px] transition-colors duration-300 ${
              activeTab === "enquiry" ? "bg-[#FF6E00]" : "bg-transparent"
            }`}
          />
        </div>
      </div>

      {/* Rows */}
      <div className="space-y-6">
        {/* Date Row */}
        <div className="flex justify-between items-center py-2 border-b border-black/10">
          <label
            htmlFor="booking-date"
            className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621]"
          >
            Date
          </label>
          <input
            id="booking-date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-transparent border-none font-sans italic font-medium text-[16px] text-[#4B3621] focus:outline-none cursor-pointer text-right"
          />
        </div>

        {activeTab === "book" && (
          <>
            {/* Adult Row */}
            <div className="flex justify-between items-center py-2 border-b border-black/10">
              <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621]">
                Adult ( 13+ age )
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setAdults(Math.max(0, adults - 1))}
                  className="w-[24px] h-[24px] rounded-full bg-[#FF6E00]/20 flex items-center justify-center hover:bg-[#FF6E00]/40 transition-colors cursor-pointer"
                >
                  <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                    <rect width="10" height="2" rx="1" fill="#4B3621" />
                  </svg>
                </button>
                <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621] w-[24px] text-center">
                  {adults}
                </span>
                <button
                  onClick={() => setAdults(adults + 1)}
                  className="w-[24px] h-[24px] rounded-full bg-[#FF6E00] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 0V10M0 5H10" stroke="white" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Children Row */}
            <div className="flex justify-between items-center py-2 border-b border-black/10">
              <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621]">
                Children ( age 3-12 )
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="w-[24px] h-[24px] rounded-full bg-[#FF6E00]/20 flex items-center justify-center hover:bg-[#FF6E00]/40 transition-colors cursor-pointer"
                >
                  <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                    <rect width="10" height="2" rx="1" fill="#4B3621" />
                  </svg>
                </button>
                <span className="font-sans italic font-medium text-[20px] leading-[30px] text-[#4B3621] w-[24px] text-center">
                  {children}
                </span>
                <button
                  onClick={() => setChildren(children + 1)}
                  className="w-[24px] h-[24px] rounded-full bg-[#FF6E00] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 0V10M0 5H10" stroke="white" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Button */}
      <div className="mt-8">
        <button
          onClick={handleAction}
          className="w-full h-[50px] bg-[#FF6E00] rounded-[12px] border border-[#FF6E00] overflow-hidden transition-all duration-300 active:scale-95 group relative cursor-pointer"
        >
          <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
          <span className="relative z-10 font-display italic font-normal text-[18px] leading-[24px] text-white group-hover:text-[#FF6E00] transition-colors duration-300">
            {activeTab === "book" ? "Check Availability" : "Send Enquiry"}
          </span>
        </button>
      </div>
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
              src="/images/room_detail/cards/detail-hero-1.png"
              alt="Room panoramic view"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 792px"
            />
          </div>

          {/* Two Smaller Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            <div className="relative w-full h-[280px] md:h-[350px] lg:h-[452px] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/images/room_detail/cards/detail-1.png"
                alt="Cozy room interior"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full h-[280px] md:h-[350px] lg:h-[452px] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/images/room_detail/cards/detail-2.png"
                alt="Comfortable seating area"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailContentSection;
