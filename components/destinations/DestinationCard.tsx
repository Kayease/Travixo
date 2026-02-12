import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * DestinationCard Props Interface
 * Defines the structure for destination data
 */
export interface DestinationCardProps {
  /** Unique identifier for the destination */
  id: string | number;
  /** Country/destination name */
  name: string;
  /** URL to the destination image */
  imageUrl: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Link to the destination details page */
  slug?: string;
}

/**
 * DestinationCard Component
 *
 * A reusable card component for displaying destination previews.
 * Features an image with country name below.
 *
 * Design Specifications (from Figma):
 * - Card image: 418x487px, border-radius 12px
 * - Border: 1px solid rgba(75, 54, 33, 0.2)
 * - Shadow: 0px 0px 4px rgba(0, 0, 0, 0.1)
 * - Country name: Playfair Display, italic, 600 weight, 28px, #4B3621
 *
 * @param {DestinationCardProps} props - Destination data
 * @returns {JSX.Element} The rendered destination card
 */
export const DestinationCard: React.FC<DestinationCardProps> = React.memo(({
  id: _id,
  name,
  imageUrl,
  imageAlt,
  slug = "#",
}) => {
  return (
    <Link
      href={slug}
      className="group w-full cursor-pointer flex flex-col items-center"
    >
      {/* Image Container - Rectangular with 12px radius */}
      <div
        className="relative w-full aspect-418/487 overflow-hidden transition-all duration-300 group-hover:shadow-xl rounded-xl"
      >
        <Image
          src={imageUrl}
          alt={imageAlt || name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Destination Name - Playfair Display Italic */}
      <h3 className="font-display italic font-semibold text-lg md:text-xl lg:text-[28px] leading-[37px] text-[#4B3621] text-center mt-3 md:mt-6 lg:mt-8 transition-colors duration-300 group-hover:text-[#FF6E00]">
        {name}
      </h3>
    </Link>
  );
});
DestinationCard.displayName = "DestinationCard";

export default DestinationCard;
