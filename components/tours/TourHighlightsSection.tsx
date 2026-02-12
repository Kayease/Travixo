import React from "react";

/**
 * TourHighlightsSection Props Interface
 */
interface TourHighlightsSectionProps {
  /** Array of highlight items */
  highlights: string[];
}

/**
 * TourHighlightsSection Component
 * 
 * Displays tour highlights as a list with checkmark icons.
 * 
 * Design Specifications (from Figma):
 * - Title: Playfair Display, italic, 600 weight, 24px
 * - List items with orange checkmark icons
 * - Text: Poppins, 400 weight, 16px
 * 
 * @param {TourHighlightsSectionProps} props - Highlights data
 * @returns {JSX.Element} The rendered highlights section
 */
export const TourHighlightsSection: React.FC<TourHighlightsSectionProps> = ({
  highlights,
}) => {
  return (
    <section className="w-full py-6 border-t border-gray-200" aria-labelledby="highlights-title">
      {/* Section Title */}
      <h2
        id="highlights-title"
        className="font-display italic font-semibold text-xl md:text-[24px] leading-[32px] text-brand-brown mb-4"
      >
        Highlights
      </h2>

      {/* Highlights List */}
      <ul className="space-y-3">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* Checkmark Icon */}
            <svg
              className="w-5 h-5 mt-0.5 shrink-0"
              viewBox="0 0 20 20"
              fill="none"
              style={{ color: "#FF6E00" }}
            >
              <path
                d="M16.6667 5L7.50001 14.1667L3.33334 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-body text-sm md:text-base text-brand-brown/80">
              {highlight}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TourHighlightsSection;
