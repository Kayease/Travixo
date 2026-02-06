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
    imageUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
    slug: "/destinations/france",
  },
  {
    id: 2,
    name: "United Kingdom",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    slug: "/destinations/united-kingdom",
  },
  {
    id: 3,
    name: "Indonesia",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    slug: "/destinations/indonesia",
  },
  {
    id: 4,
    name: "Thailand",
    imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
    slug: "/destinations/thailand",
  },
  {
    id: 5,
    name: "India",
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
    slug: "/destinations/india",
  },
  {
    id: 6,
    name: "Japan",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    slug: "/destinations/japan",
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
 * - Container: Background #FFFCF5
 * - Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
 * - Card spacing: Consistent gap between cards
 * - Load More Button: 200x45px, #FF6E00, 12px border-radius
 * 
 * @param {DestinationsGridSectionProps} props - Component configuration
 * @returns {JSX.Element} The rendered destinations grid section
 */
export const DestinationsGridSection: React.FC<DestinationsGridSectionProps> = ({
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
    setVisibleCount((prev) => Math.min(prev + loadMoreCount, destinations.length));
  };

  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-[52px]"
      style={{ backgroundColor: "#FFFCF5" }}
      aria-labelledby="destinations-grid-title"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Screen reader only title */}
        <h2 id="destinations-grid-title" className="sr-only">
          All Destinations
        </h2>

        {/* Destinations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-[33px]">
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
          <div className="flex justify-center mt-12 md:mt-16 lg:mt-[72px]">
            <button
              onClick={handleLoadMore}
              className="font-display italic font-medium text-lg md:text-[20px] leading-[27px] text-white transition-all duration-300 hover:opacity-90 hover:shadow-xl active:scale-95 cursor-pointer"
              style={{
                width: "200px",
                height: "45px",
                backgroundColor: "#FF6E00",
                borderRadius: "12px",
                boxShadow: "0px 8px 24px rgba(255, 110, 0, 0.25)",
              }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationsGridSection;
