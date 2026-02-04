"use client";

import React from "react";
import Image from "next/image";

/**
 * Interface for community image data
 */
interface CommunityImage {
  id: string;
  src: string;
  alt: string;
}

/**
 * CommunityImageCard Component
 * Displays an image with Instagram icon overlay on hover
 */
const CommunityImageCard: React.FC<{ image: CommunityImage }> = ({ image }) => {
  return (
    <div className="relative w-full h-[280px] md:h-[320px] lg:h-[365px] rounded-xl overflow-hidden group cursor-pointer">
      {/* Image */}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover Overlay with Instagram Icon - Slides from top to bottom */}
      <div className="absolute inset-0 bg-black/40 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center">
        {/* Instagram Icon */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
        >
          <rect
            x="3.5"
            y="3.5"
            width="21"
            height="21"
            rx="5"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="14" cy="14" r="5" stroke="white" strokeWidth="2" />
          <circle cx="20.5" cy="7.5" r="1.5" fill="white" />
        </svg>
      </div>
    </div>
  );
};

/**
 * StayCommunitySection Component
 *
 * Displays a community section with title, description,
 * and a 4-column grid of interior/room images with
 * Instagram hover effect for social engagement.
 */
const StayCommunitySection: React.FC = () => {
  // Community images data
  const communityImages: CommunityImage[] = [
    {
      id: "1",
      src: "/images/stay/Component 87.png",
      alt: "Modern living room with orange chair",
    },
    {
      id: "2",
      src: "/images/stay/Component 88.png",
      alt: "Cozy workspace with green chair",
    },
    {
      id: "3",
      src: "/images/stay/Component 89.png",
      alt: "Elegant arched window with curtains",
    },
    {
      id: "4",
      src: "/images/stay/Component 90.png",
      alt: "Bright Mediterranean style room",
    },
  ];

  return (
    <section className="w-full bg-[#FFF7E5] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* ============================================
            Header Section
        ============================================ */}
        <div className="text-center mb-10 md:mb-12">
          {/* Section Title */}
          <h2 className="font-display text-2xl md:text-[28px] italic font-semibold leading-[37px] text-[#4B3621] mb-4">
            Join Our Stay Community
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg font-normal leading-7 text-[#4B3621] max-w-[505px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>

        {/* ============================================
            Image Grid
        ============================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-[12px]">
          {communityImages.map((image) => (
            <CommunityImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayCommunitySection;
