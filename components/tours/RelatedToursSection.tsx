"use client";
import React from "react";
import TourCard from "@/components/ui/TourCard";

/**
 * Related Tour Card Interface
 */
interface RelatedTour {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  reviewCount: number;
  duration: string;
  groupSize: string;
  location: string;
  slug: string;
}

/**
 * RelatedToursSection Props Interface
 */
interface RelatedToursSectionProps {
  /** Array of related tours */
  tours: RelatedTour[];
  /** Section title */
  title?: string;
}

export const RelatedToursSection: React.FC<RelatedToursSectionProps> = ({
  tours,
  title = "You might also like...",
}) => {
  return (
    <section
      className="w-full py-8 md:py-12"
      aria-labelledby="related-tours-title"
    >
      {/* Section Title */}
      <h2
        id="related-tours-title"
        className="font-display italic font-semibold text-2xl md:text-[28px] leading-[37px] text-brand-brown mb-6 md:mb-8"
      >
        {title}
      </h2>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 place-items-center">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="w-full flex justify-center md:last:col-span-2 lg:last:col-span-1"
          >
            <TourCard
              id={tour.id}
              image={tour.imageUrl}
              title={tour.title}
              description={tour.description}
              currentPrice={tour.price}
              originalPrice={tour.originalPrice}
              discount={tour.discount}
              rating={tour.rating}
              reviews={tour.reviewCount}
              duration={tour.duration}
              people={tour.groupSize}
              location={tour.location}
              slug={`/products/${tour.slug || tour.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedToursSection;
