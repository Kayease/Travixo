import React from "react";

/**
 * TourIncludesSection Props Interface
 */
interface TourIncludesSectionProps {
  /** Items included in the tour */
  includes: string[];
  /** Items excluded from the tour */
  excludes: string[];
}

/**
 * TourIncludesSection Component
 * 
 * Displays what's included and excluded in the tour.
 * 
 * Design Specifications (from Figma):
 * - Title: Playfair Display, italic, 600 weight, 24px
 * - Included items: Green/orange checkmarks
 * - Excluded items: Red X marks
 * - Text: Poppins, 400 weight, 16px
 * 
 * @param {TourIncludesSectionProps} props - Includes/excludes data
 * @returns {JSX.Element} The rendered includes section
 */
export const TourIncludesSection: React.FC<TourIncludesSectionProps> = ({
  includes,
  excludes,
}) => {
  return (
    <section className="w-full py-6 border-t border-gray-200" aria-labelledby="includes-title">
      {/* Section Title */}
      <h2
        id="includes-title"
        className="font-display italic font-semibold text-xl md:text-[24px] leading-[32px] text-brand-brown mb-4"
      >
        Includes/Excludes
      </h2>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Included Items */}
        <ul className="space-y-3">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-3">
              {/* Checkmark Icon */}
              <svg
                className="w-5 h-5 mt-0.5 shrink-0 text-green-500"
                viewBox="0 0 20 20"
                fill="none"
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
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Excluded Items */}
        <ul className="space-y-3">
          {excludes.map((item) => (
            <li key={item} className="flex items-start gap-3">
              {/* X Icon */}
              <svg
                className="w-5 h-5 mt-0.5 shrink-0 text-red-500"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-body text-sm md:text-base text-brand-brown/80">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TourIncludesSection;
