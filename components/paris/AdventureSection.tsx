"use client";

import React from "react";

export const AdventureSection = () => {
  return (
    <section className="w-full h-[350px] md:h-[450px] lg:h-[650px] relative overflow-hidden flex justify-center bg-gray-900">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 object-[55%_center] lg:object-[center_35%] adventure-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/images/paris/149980-797471122_medium.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent md:from-black/40" />

      {/* Content Container */}
      <div className="w-full max-w-[1440px] h-full relative px-6 md:px-[80px] flex flex-col justify-center">
        <div className="max-w-[220px] sm:max-w-[383px] md:max-w-[450px] lg:max-w-[607px] z-10">
          {/* Title */}
          <h2 className="font-display italic font-semibold text-[22px] sm:text-[28px] leading-[28px] sm:leading-[37px] text-white mb-4 md:mb-6">
            Adventure Awaits Beyond Every Horizon
          </h2>

          {/* Description */}
          <p className="font-sans font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[18px] leading-relaxed text-white/90">
            Step into new cultures, stunning landscapes, and exciting adventures.
            Whether it’s mountains, beaches, or cities, we create journeys that
            stay with you forever.
          </p>
        </div>
      </div>

      {/* iPhone 14 Pro Max Portrait Styles (430x932) */}
      <style jsx>{`
        @media only screen 
          and (min-width: 430px) 
          and (max-width: 430px) 
          and (min-height: 932px) 
          and (max-height: 932px) 
          and (orientation: portrait) {
          .adventure-video {
            object-position: 75% center !important;
          }
        }
      `}</style>
    </section>
  );
};
