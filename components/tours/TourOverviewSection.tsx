"use client";
import React, { useState } from "react";

/**
 * TourOverviewSection Props Interface
 */
interface TourOverviewSectionProps {
  /** Tour duration (e.g., "4 hours") */
  duration: string;
  /** Group size range (e.g., "2-18") */
  groupSize: string;
  /** Tour type (e.g., "Daily Tour") */
  tourType: string;
  /** Available languages */
  languages: string[];
  /** Full description text */
  description: string;
}

/**
 * TourOverviewSection Component
 *
 * Displays tour overview with quick info icons and description.
 *
 * Design Specifications (from Figma):
 * - Title: Playfair Display, italic, 600 weight, 24px
 * - Icons with labels for duration, group size, tour type, languages
 * - Description: Poppins, 400 weight, 16px
 * - "Load More" button for expandable content
 *
 * @param {TourOverviewSectionProps} props - Overview data
 * @returns {JSX.Element} The rendered overview section
 */
export const TourOverviewSection: React.FC<TourOverviewSectionProps> = ({
  duration,
  groupSize,
  tourType,
  languages,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Truncate description if not expanded
  const truncatedDescription =
    description.length > 400
      ? description.substring(0, 400) + "..."
      : description;

  return (
    <section className="w-full" aria-labelledby="overview-title">
      {/* Section Title */}
      <h2
        id="overview-title"
        className="font-display italic font-semibold text-xl md:text-[24px] leading-[32px] text-brand-brown mb-4"
      >
        Overview
      </h2>

      {/* Quick Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {/* Duration */}
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-brand-brown/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="font-body text-sm md:text-base text-brand-brown">
            {duration}
          </span>
        </div>

        {/* Group Size */}
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-brand-brown/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>
          <span className="font-body text-sm md:text-base text-brand-brown">
            {groupSize}
          </span>
        </div>

        {/* Tour Type */}
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-brand-brown/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          <span className="font-body text-sm md:text-base text-brand-brown">
            {tourType}
          </span>
        </div>

        {/* Languages */}
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-brand-brown/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
            />
          </svg>
          <span className="font-body text-sm md:text-base text-brand-brown">
            {languages.join(", ")}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="font-body text-sm md:text-base leading-relaxed text-brand-brown/80 mb-4">
        <p>{isExpanded ? description : truncatedDescription}</p>
      </div>

      {/* Load More Button */}
      {description.length > 400 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-6 py-2 bg-[#FF6E00] border border-[#FF6E00] rounded-[12px] overflow-hidden transition-all duration-300 active:scale-95 relative group cursor-pointer"
        >
          {/* Fill animation from bottom to top */}
          <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
          <span className="relative z-10 font-display italic font-normal text-[18px] leading-[24px] text-white group-hover:text-[#FF6E00] transition-colors duration-300">
            {isExpanded ? "Show Less" : "Load More"}
          </span>
        </button>
      )}
    </section>
  );
};

export default TourOverviewSection;
