/**
 * StayHeroSection Component
 * 
 * Hero section for the Stay page featuring a title and description
 * with a warm cream background. Provides an inviting introduction
 * to accommodation options.
 */

import React from "react";

const StayHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFF7E5] py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* Content Container */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Main Title */}
          <h1 className="font-display text-2xl md:text-[28px] italic font-semibold leading-[37px] text-[#4B3621] mb-5">
            Enjoy every comfort
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg font-medium leading-[30px] text-[#4B3621] max-w-[589px]">
            A Curated odyssey through the world&apos;s most breathtaking
            sanctuaries, documented with precision and a refined lens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StayHeroSection;
