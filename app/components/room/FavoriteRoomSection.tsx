/**
 * FavoriteRoomSection Component
 *
 * Full-width featured section showcasing the most popular room.
 * Features a background image with overlay, a room preview card,
 * and promotional content with a booking CTA.
 */

import React from "react";
import Image from "next/image";

const FavoriteRoomSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[650px] lg:min-h-[705px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/room/frame-492.png"
          alt="Luxurious bedroom background"
          fill
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 md:px-6 lg:px-20 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16">
          {/* ============================================
              Left - Room Card
          ============================================ */}
          <div className="w-full max-w-[418px] bg-[#FFFCF5] rounded-xl overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)] shrink-0">
            {/* Room Image */}
            <div className="relative w-full h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
              <Image
                src="/images/room/frame-494-2.png"
                alt="Special room with golden interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Room Details */}
            <div className="p-4 md:p-5">
              {/* Room Name */}
              <h3 className="font-display text-xl md:text-2xl italic font-semibold leading-8 text-[#4B3621] mb-2">
                Special
              </h3>

              {/* Price */}
              <p className="font-display text-lg md:text-xl italic font-medium leading-[27px] text-[#4B3621] mb-3">
                $45{" "}
                <span className="text-base font-normal not-italic">/Night</span>
              </p>

              {/* Description */}
              <p className="text-base md:text-lg font-normal leading-7 text-[#4B3621] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>

              {/* Check Availability Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-lg md:text-xl font-normal text-[#4B3621] hover:text-[#FF6E00] transition-colors duration-300 group"
              >
                <span>Check Availability</span>
                {/* Arrow Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* ============================================
              Right - Featured Content
          ============================================ */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            {/* Label */}
            <span className="font-display text-base md:text-lg italic font-semibold text-white mb-3">
              Favorite Room
            </span>

            {/* Title */}
            <h2 className="font-display text-2xl md:text-[28px] lg:text-[32px] italic font-semibold leading-tight lg:leading-[43px] text-white mb-4 md:mb-5">
              Our most booked and beloved room
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl font-normal leading-7 text-white mb-6 md:mb-8 max-w-[512px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            {/* Book Now Button */}
            <button className="group relative w-full max-w-[300px] h-[50px] mx-auto lg:mx-0 bg-white border border-[#FF6E00] rounded-xl overflow-hidden transition-all duration-300">
              {/* Fill animation from bottom to top */}
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#FF6E00] group-hover:h-full transition-all duration-300 ease-out" />

              {/* Button Text */}
              <span className="relative z-10 font-display text-lg italic text-[#FF6E00] group-hover:text-white transition-colors duration-300">
                Book Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteRoomSection;

