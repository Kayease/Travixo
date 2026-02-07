"use client";
import React from "react";

/**
 * TourCancellationSection Props Interface
 */
interface TourCancellationSectionProps {
  /** Cancellation policy text */
  policy: string;
}

/**
 * TourCancellationSection Component
 * 
 * Displays the tour cancellation policy.
 * 
 * Design Specifications (from Figma):
 * - Title: Playfair Display, italic, 600 weight, 24px
 * - Policy text: Poppins, 400 weight, 16px
 * 
 * @param {TourCancellationSectionProps} props - Policy data
 * @returns {JSX.Element} The rendered cancellation section
 */
export const TourCancellationSection: React.FC<TourCancellationSectionProps> = ({
  policy,
}) => {
  return (
    <section className="w-full py-6 border-t border-gray-200" aria-labelledby="cancellation-title">
      {/* Section Title */}
      <h2
        id="cancellation-title"
        className="font-display italic font-semibold text-xl md:text-[24px] leading-[32px] text-brand-brown mb-3"
      >
        Cancellation policy
      </h2>

      {/* Policy Text */}
      <p className="font-body text-sm md:text-base text-brand-brown/80 leading-relaxed">
        {policy}
      </p>
    </section>
  );
};

export default TourCancellationSection;
