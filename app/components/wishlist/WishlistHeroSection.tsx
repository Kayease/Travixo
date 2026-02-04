/**
 * WishlistHeroSection Component
 * 
 * Hero section for the Wishlist page displaying the page title
 * and a descriptive subtitle on a cream background.
 * 
 * Design specs from Figma:
 * - Container: 1440x285px, background #FFF7E5
 * - Title: Playfair Display italic, 28px, 600 weight
 * - Subtitle: Poppins medium, 18px, max-width 478px
 */

import React from 'react';

const WishlistHeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full bg-[#FFF7E5]"
      aria-labelledby="wishlist-title"
    >
      {/* Content Container */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Hero Content - Centered */}
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-[68px] min-h-[200px] md:min-h-[250px] lg:min-h-[285px]">
          {/* Page Title */}
          <h1
            id="wishlist-title"
            className="font-display italic font-semibold text-[24px] md:text-[26px] lg:text-[28px] leading-[32px] md:leading-[35px] lg:leading-[37px] text-center text-brand-brown mb-4 md:mb-5 lg:mb-[22px]"
          >
            My Wishlist
          </h1>

          {/* Page Subtitle */}
          <p className="font-body font-medium text-[16px] md:text-[17px] lg:text-[18px] leading-[26px] md:leading-[28px] lg:leading-[30px] text-center text-brand-brown max-w-[320px] md:max-w-[400px] lg:max-w-[478px]">
            Your curated sanctuary of dream escaped and luxuary journeys across the globe
          </p>
        </div>
      </div>
    </section>
  );
};

export default WishlistHeroSection;
