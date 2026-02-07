import React from "react";

export const AdventureSection = () => {
  return (
    <section className="w-full h-[476px] relative overflow-hidden flex justify-center bg-gray-900">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-fill opacity-80"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/images/paris/recolored_video_FFFCF5.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content Container */}
      <div className="w-full max-w-[1440px] h-full relative px-[20px] md:px-[80px]">
        {/* Title */}
        <h2 className="absolute top-[145px] left-[20px] md:left-[80px] max-w-[383px] font-display italic font-semibold text-[28px] leading-[37px] text-white">
          Adventure Awaits Beyond Every Horizon
        </h2>

        {/* Description */}
        <p className="absolute top-[241px] left-[20px] md:left-[80px] max-w-[607px] font-sans font-medium text-[18px] leading-[30px] text-white">
          Step into new cultures, stunning landscapes, and exciting adventures.
          Whether it’s mountains, beaches, or cities, we create journeys that
          stay with you forever.
        </p>
      </div>
    </section>
  );
};
