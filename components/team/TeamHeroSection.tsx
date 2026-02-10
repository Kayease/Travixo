"use client";
import React from "react";

/**
 * TeamHeroSection Props Interface
 * Allows customization of title and subtitle
 */
interface TeamHeroSectionProps {
  /** Main title displayed in the hero section */
  title?: string;
  /** Subtitle/description text below the title */
  subtitle?: string;
}

/**
 * TeamHeroSection Component
 * 
 * A hero banner section for the team page.
 * Features a cream background with centered title and subtitle text.
 * 
 * Design Specifications (from Figma):
 * - Background: #FFF7E5 (warm cream)
 * - Height: 285px on desktop
 * - Title: Playfair Display, italic, 600 weight, 28px, #4B3621
 * - Subtitle: Poppins, 500 weight, 18px, line-height 30px, #4B3621
 * 
 * @param {TeamHeroSectionProps} props - Component props
 * @returns {JSX.Element} The rendered hero section
 */
export const TeamHeroSection: React.FC<TeamHeroSectionProps> = ({
  title = "Meet our teams",
  subtitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}) => {
  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-[68px]"
      style={{ backgroundColor: "#FFF7E5" }}
      aria-labelledby="team-hero-title"
    >
      {/* Container with max-width for content alignment */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Centered Header Content */}
        <div className="text-center">
          {/* Main Title - Playfair Display Italic */}
          <h1
            id="team-hero-title"
            className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-4 md:mb-5"
          >
            {title}
          </h1>

          {/* Subtitle - Poppins Medium */}
          <p className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-brand-brown max-w-[360px] md:max-w-[478px] mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamHeroSection;