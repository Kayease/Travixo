import React from "react";

/**
 * DestinationsHeroSection Props Interface
 * Allows customization of title and subtitle for reusability
 */
interface DestinationsHeroSectionProps {
  /** Main title displayed in the hero section */
  title?: string;
  /** Subtitle/description text below the title */
  subtitle?: string;
}

/**
 * DestinationsHeroSection Component
 * 
 * A hero banner section for the destinations/view-all page.
 * Features a cream background with centered title and subtitle text.
 * 
 * Design Specifications (from Figma):
 * - Background: #FFF7E5 (warm cream)
 * - Height: 285px on desktop
 * - Title: Playfair Display, italic, 600 weight, 28px, #4B3621
 * - Subtitle: Poppins, 500 weight, 18px, line-height 30px, #4B3621
 * 
 * @param {DestinationsHeroSectionProps} props - Component props
 * @returns {JSX.Element} The rendered hero section
 */
export const DestinationsHeroSection: React.FC<DestinationsHeroSectionProps> = ({
  title = "Discover the Taravixo",
  subtitle = "From vast savannas teeming with wildlife to breathtaking landscapes untouched by time, every safari promises adventure.",
}) => {
  return (
    <section
      className="relative w-full py-10 md:py-16 lg:py-[68px]"
      style={{ backgroundColor: "#FFF7E5" }}
      aria-labelledby="destinations-hero-title"
    >
      {/* Container with max-width for content alignment */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Centered Header Content */}
        <div className="text-center">
          {/* Main Title - Playfair Display Italic */}
          <h1
            id="destinations-hero-title"
            className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-4 md:mb-5"
          >
            {title}
          </h1>

          {/* Subtitle - Poppins Medium */}
          <p className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-brand-brown max-w-[478px] mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DestinationsHeroSection;
