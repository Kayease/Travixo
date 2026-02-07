"use client";
import React, { useState } from "react";
import { DestinationCard, DestinationCardProps } from "./DestinationCard";

/**
 * Sample destinations data
 * Replace with actual data from CMS or API
 */
const SAMPLE_DESTINATIONS: DestinationCardProps[] = [
  {
    id: 1,
    name: "France",
    imageUrl: "/images/destinations/cards/Component_68.png",
    slug: "/paris",
  },
  {
    id: 2,
    name: "United Kingdom",
    imageUrl: "/images/destinations/cards/Component_69.png",
    slug: "/paris",
  },
  {
    id: 3,
    name: "Indonesia",
    imageUrl: "/images/destinations/cards/Component_70.png",
    slug: "/paris",
  },
  {
    id: 4,
    name: "Thailand",
    imageUrl: "/images/destinations/cards/Component_71.png",
    slug: "/paris",
  },
  {
    id: 5,
    name: "India",
    imageUrl: "/images/destinations/cards/Component_72.png",
    slug: "/paris",
  },
  {
    id: 6,
    name: "Japan",
    imageUrl: "/images/destinations/cards/Component_73.png",
    slug: "/paris",
  },
];

/**
 * DestinationsGridSection Props Interface
 */
interface DestinationsGridSectionProps {
  /** Array of destinations to display */
  destinations?: DestinationCardProps[];
  /** Initial number of destinations to show */
  initialCount?: number;
  /** Number of destinations to load on "Load More" click */
  loadMoreCount?: number;
  /** Whether to show the "Load More" button */
  showLoadMore?: boolean;
}

/**
 * DestinationsGridSection Component
 *
 * Displays a grid of destination cards with optional "Load More" functionality.
 *
 * Design Specifications (from Figma):
 * - Container: Background #FFFCF5, 1440px max-width
 * - Card size: 418x487px
 * - Grid: 3 columns with 13px gap (approx 2.3% on 1440px)
 * - Load More Button: 200x45px, #FF6E00, 12px border-radius
 */
export const DestinationsGridSection: React.FC<
  DestinationsGridSectionProps
> = ({
  destinations = SAMPLE_DESTINATIONS,
  initialCount = 6,
  loadMoreCount = 3,
  showLoadMore = true,
}) => {
  // State for managing visible destinations count
  const [visibleCount, setVisibleCount] = useState(initialCount);

  // Get currently visible destinations
  const visibleDestinations = destinations.slice(0, visibleCount);

  // Check if there are more destinations to load
  const hasMoreDestinations = visibleCount < destinations.length;

  // Handler for loading more destinations
  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + loadMoreCount, destinations.length),
    );
  };

  return (
    <section
      className="relative w-full py-[52px] lg:py-[52px]"
      style={{ backgroundColor: "#FFFCF5" }}
      aria-labelledby="destinations-grid-title"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Screen reader only title */}
        <h2 id="destinations-grid-title" className="sr-only">
          All Destinations
        </h2>

        {/* Destinations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 lg:gap-y-[32px] gap-x-4 md:gap-x-6 lg:gap-x-[13px]">
          {visibleDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              id={destination.id}
              name={destination.name}
              imageUrl={destination.imageUrl}
              imageAlt={destination.imageAlt}
              slug={destination.slug}
            />
          ))}
        </div>

        {/* Load More Button */}
        {showLoadMore && hasMoreDestinations && (
          <div className="flex justify-center mt-12 md:mt-20 lg:mt-[76px]">
            <button
              onClick={handleLoadMore}
              className="font-display italic font-medium text-lg md:text-[20px] leading-[27px] text-white transition-all duration-300 hover:opacity-90 hover:shadow-xl active:scale-95 cursor-pointer flex items-center justify-center"
              style={{
                width: "200px",
                height: "45px",
                backgroundColor: "#FF6E00",
                borderRadius: "12px",
                boxShadow: "0px 8px 24px rgba(255, 110, 0, 0.25)",
              }}
            >
              Explore More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationsGridSection;
