"use client";
import React from "react";
import TourCard from "@/components/ui/TourCard";

/**
 * Plane Icon for badge
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
 * Tour data
 */
const TOURS = [
  {
    id: 1,
    image: "/images/travixo-tours/cards/tour-1.png",
    discount: "27% Off",
    currentPrice: 100,
    originalPrice: 120,
    rating: 4.9,
    reviews: 311,
    title: "Boathouse Neighborhood",
    description:
      "Explore charming waterfront neighborhoods with guided boat tours and discover hidden local gems along the canals.",
    duration: "4 hours",
    people: "2-18",
    location: "Italy, Rome",
    slug: "/tour-listings/grand-palace-tour",
  },
  {
    id: 2,
    image: "/images/travixo-tours/cards/tour-2.png",
    discount: "27% Off",
    currentPrice: 100,
    originalPrice: 120,
    rating: 4.9,
    reviews: 311,
    title: "Venice Tour",
    description:
      "Glide through Venice's iconic canals, visit historic piazzas, and savor authentic Italian cuisine at local trattorias.",
    duration: "4 hours",
    people: "2-18",
    location: "Italy, Venice",
    slug: "/tour-listings/grand-palace-tour",
  },
  {
    id: 3,
    image: "/images/travixo-tours/cards/tour-3.png",
    discount: "27% Off",
    currentPrice: 100,
    originalPrice: 120,
    rating: 4.9,
    reviews: 311,
    title: "Paris Adventure",
    description:
      "Discover the City of Light with visits to the Eiffel Tower, Montmartre, and hidden courtyards of the Marais district.",
    duration: "4 hours",
    people: "2-18",
    location: "France, Paris",
    slug: "/tour-listings/grand-palace-tour",
  },
];

/**
 * FeaturedToursSection Component
 * "Most Favorite Tour Place" section with tour cards
 */
export const FeaturedToursSection = () => {
  return (
    <section className="relative w-full py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-4 lg:px-6 xl:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 lg:mb-16">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl mb-6 bg-[#FF6E00]"
          >
            <PlaneIcon />
            <span className="font-display italic font-medium text-sm text-white">
              FEATURED TOUR
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display italic font-semibold text-2xl md:text-[28px] leading-tight md:leading-[37px] text-brand-brown text-center max-w-[444px]">
            Most Favorite Tour Place
          </h2>
        </div>

        {/* Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 lg:gap-x-6 lg:gap-y-8 pb-12">
          {TOURS.map((tour) => (
            <div
              key={tour.id}
              className="flex justify-center md:last:col-span-2 md:last:px-[calc(25%+8px)] lg:last:col-span-1 lg:last:px-0 lg:last:block"
            >
              <TourCard
                id={tour.id}
                image={tour.image}
                discount={tour.discount}
                currentPrice={tour.currentPrice}
                originalPrice={tour.originalPrice}
                rating={tour.rating}
                reviews={tour.reviews}
                title={tour.title}
                description={tour.description}
                duration={tour.duration}
                people={tour.people}
                location={tour.location}
                slug={tour.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
