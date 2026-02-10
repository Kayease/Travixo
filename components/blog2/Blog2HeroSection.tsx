/**
 * Blog2HeroSection Component
 * 
 * Hero section for the Blog 2 page with title and subtitle.
 * 
 * Design specs from Figma:
 * - Container: 1440x285px, background #FFF7E5
 * - Title: "Our Journal" - Playfair Display italic, 28px, 600 weight, centered at top: 98px
 * - Subtitle: "Your Safari Hub: News, Tips, and Inspiration" - Poppins medium, 18px, centered at top: 157px
 */

import React from 'react';

const Blog2HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FFF7E5] h-[285px] flex items-center justify-center">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 w-full">
        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center">
          {/* Title - positioned at top: 98px */}
          <h1 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[32px] md:leading-[37px] text-[#4B3621] text-center mb-4 md:mb-6">
            Our Journal
          </h1>

          {/* Subtitle - positioned at top: 157px */}
          <p className="font-body font-medium text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#4B3621] text-center max-w-[320px] md:max-w-[415px]">
            Your Safari Hub: News, Tips, and Inspiration
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog2HeroSection;
