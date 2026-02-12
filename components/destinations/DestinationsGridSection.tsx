"use client";
import React, { useState, useCallback, useMemo } from "react";
import { DestinationCard, DestinationCardProps } from "./DestinationCard";

/**
 * Sample destinations data
 * Replace with actual data from CMS or API
 */
const SAMPLE_DESTINATIONS: DestinationCardProps[] = [
  { id: 1, name: "France", imageUrl: "/images/destinations/cards/Component_68.png", slug: "/paris" },
  { id: 2, name: "United Kingdom", imageUrl: "/images/destinations/cards/Component_69.png", slug: "/paris" },
  { id: 3, name: "Indonesia", imageUrl: "/images/destinations/cards/Component_70.png", slug: "/paris" },
  { id: 4, name: "Thailand", imageUrl: "/images/destinations/cards/Component_71.png", slug: "/paris" },
  { id: 5, name: "India", imageUrl: "/images/destinations/cards/Component_72.png", slug: "/paris" },
  { id: 6, name: "Japan", imageUrl: "/images/destinations/cards/Component_73.png", slug: "/paris" },
  { id: 7, name: "Italy", imageUrl: "/images/destinations/cards/tour-4.png", slug: "/paris" },
  { id: 8, name: "Spain", imageUrl: "/images/destinations/cards/tour-6.png", slug: "/paris" },
  { id: 9, name: "Greece", imageUrl: "/images/destinations/cards/tour-7.png", slug: "/paris" },
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
  /** Optional search query to filter destinations */
  searchQuery?: string;
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
  initialCount = 3,
  loadMoreCount = 3,
  showLoadMore = true,
  searchQuery = "",
}) => {
    // State for managing visible destinations count
    const [visibleCount, setVisibleCount] = useState(initialCount);

    // Filter destinations based on search query — memoized to avoid re-filtering on unrelated state changes
    const filteredDestinations = useMemo(() =>
      (destinations || SAMPLE_DESTINATIONS).filter(dest =>
        !searchQuery || dest.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
      [destinations, searchQuery]
    );

    // Get currently visible destinations — memoized since it drives the grid render
    const visibleDestinations = useMemo(() =>
      filteredDestinations.slice(0, visibleCount),
      [filteredDestinations, visibleCount]
    );

    // Check if there are more destinations to load
    const hasMoreDestinations = visibleCount < filteredDestinations.length;

    // Handler for loading more destinations
    const handleLoadMore = useCallback(() => {
      setVisibleCount((prev) =>
        Math.min(prev + loadMoreCount, destinations.length),
      );
    }, [loadMoreCount, destinations.length]);

    return (
      <section
        className="relative w-full py-8 md:py-12 lg:py-[52px] bg-[#FFFCF5]"
        aria-labelledby="destinations-grid-title"
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
          {/* Screen reader only title */}
          <h2 id="destinations-grid-title" className="sr-only">
            All Destinations
          </h2>

          {/* Destinations Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-12 lg:gap-y-[32px] gap-x-4 md:gap-x-6 lg:gap-x-[13px]">
            {visibleDestinations.length > 0 ? (
              visibleDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  id={destination.id}
                  name={destination.name}
                  imageUrl={destination.imageUrl}
                  imageAlt={destination.imageAlt}
                  slug={destination.slug}
                />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="font-display italic text-2xl text-brand-brown/60">
                  No destinations found matching your search.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 text-[#FF6E00] font-medium hover:underline"
                >
                  View all destinations
                </button>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {showLoadMore && hasMoreDestinations && (
            <div className="flex justify-center mt-8 md:mt-12 lg:mt-[76px]">
              <button
                onClick={handleLoadMore}
                className="group relative flex items-center justify-center w-[200px] h-[50px] bg-white border border-[#FF6E00] rounded-xl overflow-hidden transition-all duration-300 cursor-pointer shadow-[0px_8px_24px_rgba(255,110,0,0.15)]"
              >
                {/* Fill animation from bottom to top */}
                <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#FF6E00] group-hover:h-full transition-all duration-300 ease-out" />

                {/* Button Text */}
                <span className="relative z-10 font-display italic font-medium text-lg md:text-[20px] leading-[27px] text-[#FF6E00] group-hover:text-white transition-colors duration-300">
                  Load More
                </span>
              </button>
            </div>
          )}
        </div>
      </section>
    );
  };

export default DestinationsGridSection;
