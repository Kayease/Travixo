"use client";
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
export const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  name,
  imageUrl,
  imageAlt,
  slug = "#",
}) => {
  return (
    <Link 
      href={slug}
      className="group block w-full"
    >
      {/* Image Container */}
      <div
        className="relative w-full aspect-[418/487] overflow-hidden transition-all duration-300 group-hover:shadow-xl"
        style={{
          border: "1px solid rgba(75, 54, 33, 0.2)",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        }}
      >
        <Image
          src={imageUrl}
          alt={imageAlt || name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ borderRadius: "12px" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 418px"
        />
      </div>

      {/* Destination Name - Playfair Display Italic */}
      <h3 className="font-display italic font-semibold text-xl md:text-2xl lg:text-[28px] leading-[37px] text-brand-brown text-center mt-4 md:mt-5 transition-colors duration-300 group-hover:text-brand-orange">
        {name}
      </h3>
    </Link>
  );
};

export default DestinationCard;
