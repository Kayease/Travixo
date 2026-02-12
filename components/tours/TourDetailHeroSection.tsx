import React from "react";

/**
 * TourDetailHeroSection Props Interface
 * Allows customization for different tour details
 */
interface TourDetailHeroSectionProps {
  /** Tour title */
  title: string;
  /** Rating value (e.g., 4.8) */
  rating?: number;
  /** Number of reviews */
  reviewCount?: number;
  /** Location city */
  city?: string;
  /** Location country */
  country?: string;
}

/**
 * TourDetailHeroSection Component
 * 
 * A hero banner section for the tour/product detail page.
 * Displays tour title, rating, reviews count, and location.
 * 
 * Design Specifications (from Figma):
 * - Background: #FFF7E5 (warm cream)
 * - Height: 285px on desktop
 * - Title: Playfair Display, italic, 600 weight, 28px, #4B3621
 * - Rating/Location: Poppins, 500 weight, 18px, line-height 30px, #4B3621
 * 
 * @param {TourDetailHeroSectionProps} props - Tour detail data
 * @returns {JSX.Element} The rendered hero section
 */
export const TourDetailHeroSection: React.FC<TourDetailHeroSectionProps> = ({
  title,
  rating,
  reviewCount,
  city,
  country,
}) => {
  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-[68px]"
      style={{ backgroundColor: "#FFF7E5" }}
      aria-labelledby="tour-detail-title"
    >
      {/* Container with max-width for content alignment */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Centered Header Content */}
        <div className="text-center">
          {/* Tour Title - Playfair Display Italic */}
          <h1
            id="tour-detail-title"
            className="font-display italic font-semibold text-[22px] md:text-[26px] lg:text-[28px] leading-[1.3] md:leading-[37px] text-brand-brown mb-4 md:mb-5 max-w-[651px] mx-auto"
          >
            {title}
          </h1>

          {/* Rating and Location Info - Poppins Medium */}
          <div className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown max-w-[478px] mx-auto space-y-0">
            {/* Rating and Reviews */}
            {rating !== undefined && (
              <p className="flex items-center justify-center gap-1">
                <span>{rating}</span>
                {reviewCount !== undefined && (
                  <span>({reviewCount} reviews)</span>
                )}
              </p>
            )}

            {/* Location */}
            {(city || country) && (
              <p>
                {city && country ? `${city}, ${country}` : city || country}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetailHeroSection;
