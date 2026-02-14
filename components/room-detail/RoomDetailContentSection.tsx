"use client";

import React from "react";
import Image from "next/image";
import { TourBookingCard } from "@/components/tours/TourBookingCard";

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
    <section className="w-full bg-[#FFFCF5] py-8 md:py-16 lg:py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-20">
        {/* ============================================
            Top Section - Description & Booking Widget Side by Side
        ============================================ */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 mb-8 md:mb-10">
          {/* Left Content - Description & Rules */}
          <div className="flex-1 max-w-[792px]">
            {/* Section Title */}
            <h2 className="font-display text-xl md:text-[28px] italic font-semibold leading-7 text-[#4B3621] mb-3 md:mb-4">
              Peaceful Escape
            </h2>

            {/* Divider */}
            <div className="w-full h-[0.5px] bg-black/40 mb-4 md:mb-5" />

            {/* Description */}
            <p className="text-sm md:text-lg font-normal leading-6 md:leading-7 text-[#4B3621] mb-6 md:mb-10">
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
            <h3 className="font-display text-lg md:text-2xl italic font-semibold leading-7 text-[#4B3621] mb-3 md:mb-4">
              House Rules
            </h3>

            {/* House Rules List */}
            <ul className="list-disc list-inside space-y-2 mb-2">
              {houseRules.map((rule) => (
                <li
                  key={rule}
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
            <TourBookingCard
              price={45}
              title="Serenity Suite"
              image="/images/room_detail/cards/room-1.png"
              location="Serenity Suite, Travixo"
              type="room"
            />
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
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full h-[280px] md:h-[350px] lg:h-[452px] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/images/room_detail/cards/detail-2.png"
                alt="Comfortable seating area"
                fill
                className="object-cover"
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