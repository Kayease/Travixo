/**
 * PortfolioCTASection Component
 *
 * Call-to-action banner encouraging users to start planning their trip.
 *
 * Design specs from Figma:
 * - Container: 1280px wide, cream background, border, shadow, radius 12px
 * - Title: Playfair Display italic, 28px, 600 weight
 * - Description: Poppins 18px, centered
 * - Button: 431x45px, orange #FF6E00, radius 12px
 */

import React from "react";
import Link from "next/link";

const PortfolioCTASection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FFF7E5] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        {/* CTA Card */}
        <div className="bg-[#FFFCF5] border border-brand-brown/20 shadow-[0px_0px_4px_rgba(0,0,0,0.1)] rounded-xl py-10 md:py-12 lg:py-[52px] px-6 md:px-10 lg:px-16 text-center">
          {/* Title */}
          <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-4 md:mb-6">
            Let Us Plan Your Next Chapter
          </h2>

          {/* Description */}
          <p className="font-body font-medium text-base md:text-lg leading-[28px] md:leading-[30px] text-brand-brown max-w-[863px] mx-auto mb-8 md:mb-10">
            At travixo, we create immersive and sustainable safari experiences
            that connect travelers with Africa&apos;s beauty. Our goal is to
            offer authentic adventures while supporting local communities and
            protecting wildlife for future generations.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full max-w-[431px] h-[45px] bg-brand-orange border border-brand-orange rounded-[12px] overflow-hidden transition-all duration-300 relative group"
          >
            {/* Fill animation from bottom to top */}
            <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
            <span className="relative z-10 font-display italic font-normal text-[18px] leading-[24px] text-white group-hover:text-brand-orange transition-colors duration-300">
              Start Planning
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCTASection;
