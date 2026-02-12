/**
 * HistoryHeroSection Component
 * 
 * Hero section for the Travel History page displaying the page title
 * and a descriptive subtitle on a cream background.
 * 
 * Design specs from Figma:
 * - Container: 1440x285px, background #FFF7E5
 * - Title: "Your Travel Legacy" - Playfair Display italic, 28px, 600 weight
 * - Subtitle: Poppins medium, 18px, max-width 589px
 */

import React from 'react';

const HistoryHeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full bg-[#FFF7E5]"
      aria-labelledby="history-title"
    >
      {/* Content Container */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-10 xl:px-20">
        {/* Hero Content - Centered */}
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-[68px] min-h-[200px] md:min-h-[250px] lg:min-h-[285px]">
          {/* Page Title */}
          <h1
            id="history-title"
            className="font-display italic font-semibold text-[24px] md:text-[26px] lg:text-[28px] leading-[32px] md:leading-[35px] lg:leading-[37px] text-center text-brand-brown mb-4 md:mb-5 lg:mb-[22px]"
          >
            Your Travel Legacy
          </h1>

          {/* Page Subtitle */}
          <p className="font-body font-medium text-[16px] md:text-[17px] lg:text-[18px] leading-[26px] md:leading-[28px] lg:leading-[30px] text-center text-brand-brown max-w-[360px] md:max-w-[480px] lg:max-w-[589px]">
            A Curated odyssey through the world&apos;s most breathtaking sanctuaries, documented with precision and a refined lens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoryHeroSection;
