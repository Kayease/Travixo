"use client";
import React, { useRef } from "react";
import Image from "next/image";

/**
 * Destination data for the carousel
 */
const DESTINATIONS = [
  {
    id: "maldives",
    name: "Maldives",
    listings: 3,
    image: "/images/home/destination/Frame 21.png",
  },
  {
    id: "dubai",
    name: "Dubai",
    listings: 3,
    image: "/images/home/destination/Frame 21 (1).png",
  },
  {
    id: "india",
    name: "India",
    listings: 3,
    image: "/images/home/destination/Frame 21 (2).png",
  },
  {
    id: "japan",
    name: "Japan",
    listings: 3,
    image: "/images/home/destination/Frame 21 (3).png",
  },
  {
    id: "south-korea",
    name: "South Korea",
    listings: 3,
    image: "/images/home/destination/Frame 21 (4).png",
  },
];

/**
 * Plane Icon for the badge
 */
const PlaneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 2.5L9.16667 10.8333M17.5 2.5L12.5 17.5L9.16667 10.8333M17.5 2.5L2.5 7.5L9.16667 10.8333"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * DestinationCard Component
 * Figma specs: 418x657px card with unique arch shape
 * Image: 418x519px at top:0, border-radius: 1000px
 * Container has curved cutout shape at bottom-left
 * TRAVEL TO: top: 537px, Inter 500 18px/22px
 * Destination name: top: 577px, Playfair Display italic 500 28px/37px
 */
const DestinationCard = ({
  name,
  image,
}: {
  name: string;
  listings: number;
  image: string;
}) => (
  <div
    className="shrink-0 relative cursor-pointer group"
    style={{
      width: "418px",
      height: "657px",
    }}
    onClick={() => console.log(`Viewing destination: ${name}`)}
  >
    {/* Card Container with curved cutout shape */}
    <div
      className="absolute"
      style={{
        width: "418px",
        height: "180px",
        left: "0px",
        bottom: "0px",
        background: "transparent",
        borderRadius: "0px 0px 0px 200px",
        border: "1px solid #FF6E00",
        borderTop: "none",
        zIndex: 20,
      }}
    />

    {/* Hover Orange Fill Effect - animated from top to bottom */}
    <div
      className="absolute overflow-hidden"
      style={{
        width: "418px",
        height: "180px",
        left: "0px",
        bottom: "0px",
        borderRadius: "0px 0px 0px 200px",
        zIndex: 10,
      }}
    >
      <div
        className="absolute w-full h-0 group-hover:h-full transition-all duration-500 ease-out"
        style={{
          background: "#FF8930",
          backgroundImage: "url('/images/hero-bg-texture.png')",
          backgroundSize: "cover",
          top: "0px",
          left: "0px",
        }}
      />
    </div>

    {/* Right border extension */}
    <div
      className="absolute"
      style={{
        width: "1px",
        height: "138px",
        right: "0px",
        bottom: "180px",
        background: "#FF6E00",
        zIndex: 20,
      }}
    />

    {/* Left border extension - connects image to bottom container */}
    <div
      className="absolute"
      style={{
        width: "1px",
        height: "200px",
        left: "0px",
        bottom: "180px",
        background: "#FF6E00",
        zIndex: 20,
      }}
    />

    {/* Image Container - Frame 21 */}
    <div
      className="absolute overflow-hidden"
      style={{
        width: "418px",
        height: "519px",
        left: "calc(50% - 418px/2)",
        top: "0px",
        borderRadius: "1000px",
        boxSizing: "border-box",
        border: "1px solid #FF6E00",
        zIndex: 20,
      }}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        sizes="418px"
      />
    </div>

    {/* TRAVEL TO Label */}
    <span
      className="absolute text-center transition-colors duration-500 group-hover:text-white z-30"
      style={{
        width: "98px",
        height: "22px",
        left: "calc(50% - 98px/2)",
        top: "537px",
        fontFamily: "'Inter', sans-serif",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "22px",
        color: "#4B3621",
      }}
    >
      TRAVEL TO
    </span>

    {/* Destination Name */}
    <h3
      className="absolute text-center font-display italic transition-colors duration-500 group-hover:text-white z-30"
      style={{
        left: "calc(50% - 110px/2)",
        top: "577px",
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "37px",
        color: "#4B3621",
      }}
    >
      {name}
    </h3>
  </div>
);

/**
 * DestinationsSection Component
 * Figma specs: 1440px x 761px, background with dotted texture on light background
 * Horizontally scrollable destination cards
 */
export const DestinationsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#FFF9F0",
        backgroundImage: "url('/images/hero-bg-texture.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "761px"
      }}
    >
      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex">
          {/* Left Content - positioned at left: 80px, top: 190px */}
          <div className="w-[422px] shrink-0 pl-[80px] pt-[138px]">
            {/* Destination List Badge - 204x30px */}
            <div
              className="inline-flex items-center justify-center gap-2 w-[204px] h-[30px] rounded-xl mb-[32px]"
              style={{ backgroundColor: "#FF6E00" }}
            >
              <PlaneIcon />
              <span className="font-display italic font-medium text-[14px] leading-[19px] text-white">
                DESTINATION LIST
              </span>
            </div>

            {/* Main Title - 322x74px, Playfair Display italic 600, 28px/37px */}
            <h2 className="font-display italic font-semibold text-[28px] leading-[37px] text-brand-brown mb-[18px] max-w-[322px]">
              Explore the Beautiful Places Around World
            </h2>

            {/* Description - 390x54px, Poppins 500, 18px/27px */}
            <p className="font-body font-medium text-[18px] leading-[27px] text-brand-brown mb-[52px] max-w-[390px]">
              Flexible classes refers to the process of acquiring is knowledge free.
            </p>

            {/* Discover More Button - 300x50px, white bg, orange border */}
            <button
              className="w-[300px] h-[50px] bg-white border border-brand-orange rounded-[12px] font-display italic font-normal text-[18px] leading-[24px] text-brand-orange overflow-hidden transition-all duration-300 relative group"
              onClick={() => console.log("Discovering more destinations...")}
            >
              {/* Fill animation from bottom to top */}
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange group-hover:h-full transition-all duration-300 ease-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Discover More
              </span>
            </button>
          </div>

          {/* Right Content - Scrollable Destinations at left: 502px, 858px visible width */}
          <div className="flex-1 pt-[52px] overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto pb-8 pr-8"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {DESTINATIONS.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  name={destination.name}
                  listings={destination.listings}
                  image={destination.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Hide CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
