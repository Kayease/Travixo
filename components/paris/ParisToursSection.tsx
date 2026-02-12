"use client";
import React from "react";
import TourCard from "@/components/ui/TourCard";

/**
 * Tour data for Paris
 */
const PARIS_TOURS = [
  {
    id: "paris-1",
    image: "/images/paris/cards/tour-2.png",
    discount: "27% Off",
    currentPrice: 100,
    originalPrice: 120,
    rating: 4.9,
    reviews: 311,
    title: "Eiffel Tower",
    description:
      "Ascend the iconic Eiffel Tower for panoramic views of Paris, with skip-the-line access and a guided history tour.",
    duration: "4 hours",
    people: "2-18",
    location: "Paris, France",
    slug: "/products/grand-palace-tour",
  },
  {
    id: "paris-2",
    image: "/images/paris/cards/tour-3.png",
    discount: "27% Off",
    currentPrice: 100,
    originalPrice: 120,
    rating: 4.9,
    reviews: 311,
    title: "Louvre Museum",
    description:
      "Explore the world's largest art museum with a curated tour of masterpieces including the Mona Lisa and Venus de Milo.",
    duration: "4 hours",
    people: "2-18",
    location: "Paris, France",
    slug: "/products/grand-palace-tour",
  },
  {
    id: "paris-3",
    image: "/images/paris/cards/tour-4.png",
    discount: "27% Off",
    currentPrice: 100,
    originalPrice: 120,
    rating: 4.9,
    reviews: 311,
    title: "Centre Pompidou",
    description:
      "Discover modern and contemporary art at this architectural marvel, featuring works by Picasso, Kandinsky, and more.",
    duration: "4 hours",
    people: "2-18",
    location: "Paris, France",
    slug: "/products/grand-palace-tour",
  },
  {
    id: "paris-4",
    image: "/images/paris/cards/tour-5.png",
    discount: "27% Off",
    currentPrice: 100,
    originalPrice: 120,
    rating: 4.9,
    reviews: 311,
    title: "Arc de Triomphe",
    description:
      "Climb to the top of this majestic monument for sweeping views down the Champs-Élysées and across Paris.",
    duration: "4 hours",
    people: "2-18",
    location: "Paris, France",
    slug: "/products/grand-palace-tour",
  },
  {
    id: "paris-5",
    image: "/images/paris/cards/tour-6.png",
    discount: "27% Off",
    currentPrice: 100,
    originalPrice: 120,
    rating: 4.9,
    reviews: 311,
    title: "Catacombs of Paris",
    description:
      "Venture deep beneath the streets of Paris to explore the hauntingly beautiful underground ossuaries and tunnels.",
    duration: "4 hours",
    people: "2-18",
    location: "Paris, France",
    slug: "/products/grand-palace-tour",
  },
  {
    id: "paris-6",
    image: "/images/paris/cards/tour-1.png",
    discount: "27% Off",
    currentPrice: 100,
    originalPrice: 120,
    rating: 4.9,
    reviews: 311,
    title: "Seine River Cruises",
    description:
      "Cruise along the Seine at sunset, passing illuminated landmarks like Notre-Dame, the Louvre, and Pont Alexandre III.",
    duration: "4 hours",
    people: "2-18",
    location: "Paris, France",
    slug: "/products/grand-palace-tour",
  },
];

/**
 * ParisToursSection Component
 */
export const ParisToursSection = () => {
  return (
    <section className="w-full bg-white py-20 flex justify-center">
      <div className="w-full max-w-[1440px] px-4 md:px-6 lg:px-20 relative">
        {/* Title */}
        <h2 className="font-display italic font-semibold text-[28px] leading-[37px] text-[#4B3621] text-center mb-12">
          Most Favorite Tour in Paris
        </h2>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 lg:gap-y-8 justify-items-center">
          {PARIS_TOURS.map((tour) => (
            <TourCard
              key={tour.id}
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
          ))}
        </div>
      </div>
    </section>
  );
};
