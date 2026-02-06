/**
 * RoomDetailHeroSection Component
 *
 * Hero section for individual room detail page featuring
 * a full-width background image with overlay, a featured
 * room image on the left, and room title with description.
 */

import React from "react";
import Image from "next/image";

const RoomDetailHeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[705px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/room_detail/frame-496.png"
          alt="Luxurious room interior background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay - darker to match design */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 md:px-8 lg:px-20 h-full min-h-[500px] md:min-h-[600px] lg:min-h-[705px] flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full py-12 md:py-16">
          {/* ============================================
              Left - Featured Room Image
          ============================================ */}
          <div className="relative w-full max-w-[350px] md:max-w-[400px] lg:max-w-[445px] h-[450px] md:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl shrink-0">
            <Image
              src="/images/room_detail/frame-495.png"
              alt="Serenity Suite with mountain view"
              fill
              className="object-cover object-top"
            />
            {/* Subtle border glow effect */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
          </div>

          {/* ============================================
              Right - Room Details
          ============================================ */}
          <div className="flex flex-col justify-center text-center lg:text-left max-w-[600px]">
            {/* Room Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-[42px] italic font-medium leading-tight lg:leading-[56px] text-white mb-4 md:mb-6">
              Serenity Suite
            </h1>

            {/* Room Description */}
            <p className="text-base md:text-lg lg:text-xl font-normal leading-7 lg:leading-8 text-white/90 max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailHeroSection;

