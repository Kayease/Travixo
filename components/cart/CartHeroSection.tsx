/**
 * CartHeroSection Component
 * 
 * Hero section for the Cart page featuring a title and description
 * with a warm cream background. Provides an introduction to the
 * user's travel selection.
 */

import React from "react";

const CartHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFF7E5] py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* Content Container */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Main Title */}
          <h1 className="font-display text-2xl md:text-[28px] italic font-semibold leading-[32px] md:leading-[37px] text-[#4B3621] mb-4 md:mb-5">
            Your Travel Selection
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg font-medium leading-[26px] md:leading-[30px] text-[#4B3621] max-w-[589px]">
            A Curated odyssey through the world&apos;s most breathtaking
            sanctuaries, documented with precision and a refined lens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CartHeroSection;
