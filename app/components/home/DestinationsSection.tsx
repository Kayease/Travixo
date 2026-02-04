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
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "dubai",
    name: "Dubai",
    listings: 3,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "india",
    name: "India",
    listings: 3,
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "japan",
    name: "Japan",
    listings: 3,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "south-korea",
    name: "South Korea",
    listings: 3,
    image:
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=800&auto=format&fit=crop",
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * DestinationCard Component
 * Displays a single destination with pill-shaped image
 */
const DestinationCard = ({
  name,
  listings,
  image,
}: {
  name: string;
  listings: number;
  image: string;
}) => (
  <div className="shrink-0 w-[320px] md:w-[380px] lg:w-[418px] flex flex-col items-center group cursor-pointer">
    {/* Card Container with unique pill shape */}
    <div
      className="relative w-full h-[450px] md:h-[519px] overflow-hidden bg-white"
      style={{
        borderRadius: "1000px 1000px 0px 0px",
      }}
    >
      {/* Image */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 320px, (max-width: 1024px) 380px, 418px"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />

      {/* Listings Badge */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-16 px-3 py-1 rounded-xl text-white font-body text-sm"
        style={{ backgroundColor: "#FF8930" }}
      >
        {listings} Listings
      </div>
    </div>

    {/* Content Below Image */}
    <div className="mt-4 text-center">
      {/* Travel To Label */}
      <span className="font-body font-medium text-base text-brand-brown tracking-wide">
        TRAVEL TO
      </span>

      {/* Destination Name */}
      <h3 className="font-display italic font-medium text-[28px] leading-[37px] text-brand-brown mt-2">
        {name}
      </h3>
    </div>

    {/* Decorative Bottom Border */}
    <div
      className="w-full h-[138px] mt-2 relative"
      style={{
        borderLeft: "2px solid #FF6E00",
        borderRight: "2px solid #FF6E00",
        borderBottom: "2px solid #FF6E00",
        borderRadius: "0 0 200px 0",
      }}
    />
  </div>
);

/**
 * DestinationsSection Component
 * Horizontally scrollable destination cards section
 * Background: #FFFCF5 (cream)
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
      className="relative w-full py-16 overflow-hidden"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-[350px] shrink-0">
            {/* Destination List Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl mb-8"
              style={{ backgroundColor: "#FF6E00" }}
            >
              <PlaneIcon />
              <span className="font-display italic font-medium text-sm text-white">
                DESTINATION LIST
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-display italic font-semibold text-[28px] leading-[37px] text-brand-brown mb-6">
              Explore the Beautiful Places Around World
            </h2>

            {/* Description */}
            <p className="font-body font-medium text-lg text-brand-brown leading-[27px] mb-10">
              Flexible classes refers to the process of acquiring is knowledge
              free.
            </p>

            {/* Discover Button */}
            <button className="w-[300px] h-[50px] bg-white border border-brand-orange rounded-[12px] font-display italic text-[18px] leading-[24px] text-brand-orange overflow-hidden transition-all duration-300 relative group">
              {/* Fill animation from bottom to top */}
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange group-hover:h-full transition-all duration-300 ease-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Discover More
              </span>
            </button>

            {/* Navigation Arrows (Desktop) */}
            <div className="hidden lg:flex gap-4 mt-8">
              <button
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-brand-brown/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M15 18l-6-6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-brand-brown/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Scrollable Destinations */}
          <div className="flex-1 relative">
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide"
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
      `}</style>
    </section>
  );
};
