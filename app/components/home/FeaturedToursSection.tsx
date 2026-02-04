"use client";
import React from "react";
import Image from "next/image";

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
 * Heart Icon
 */
const HeartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21C12 21 3 13.5 3 8.5C3 5.5 5.5 3 8.5 3C10.24 3 11.91 3.81 13 5.08C14.09 3.81 15.76 3 17.5 3C20.5 3 23 5.5 23 8.5C23 13.5 14 21 14 21"
      stroke="#4B3621"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Cart Icon
 */
const CartIcon = () => (
  <svg
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12C2 10.9 2.9 10 4 10C5.1 10 6 10.9 6 12ZM16 12C16 13.1 15.1 14 14 14C12.9 14 12 13.1 12 12C12 10.9 12.9 10 14 10C15.1 10 16 10.9 16 12ZM1 0H3L4.5 4H15L17 2H18V4L16.5 8H5L4 10H16V12H4L2.5 8L1 4V0Z"
      fill="#4B3621"
    />
  </svg>
);

/**
 * Star Icon
 */
const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 1L10.5 5.5L15.5 6L11.5 10L12.5 15L8.5 12.5L4.5 15L5.5 10L1.5 6L6.5 5.5L8.5 1Z"
      fill={filled ? "#FF6E00" : "none"}
      stroke="#FF6E00"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Clock Icon
 */
const ClockIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="9" stroke="#FF6E00" strokeWidth="2" />
    <path
      d="M12 7V12L15 15"
      stroke="#FF6E00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * People Icon
 */
const PeopleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="7" r="4" fill="#FF6E00" />
    <path d="M4 21C4 17 7.5 14 12 14C16.5 14 20 17 20 21" fill="#FF6E00" />
  </svg>
);

/**
 * Location Icon
 */
const LocationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
      stroke="#FF6E00"
      strokeWidth="2"
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
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    discount: "27% Off",
    currentPrice: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    title: "Boathouse Neighborhood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    duration: "4 hors",
    people: "2-18",
    location: "Italy, Rome",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    discount: "27% Off",
    currentPrice: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    title: "Venice Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    duration: "4 hors",
    people: "2-18",
    location: "Italy, Venice",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop",
    discount: "27% Off",
    currentPrice: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    title: "Paris Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    duration: "4 hors",
    people: "2-18",
    location: "France, Paris",
  },
];

/**
 * TourCard Component
 */
const TourCard = ({
  image,
  discount,
  currentPrice,
  originalPrice,
  rating,
  reviews,
  title,
  description,
  duration,
  people,
  location,
}: {
  image: string;
  discount: string;
  currentPrice: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  title: string;
  description: string;
  duration: string;
  people: string;
  location: string;
}) => (
  <div className="relative w-full max-w-[418px] group">
    {/* Card Container */}
    <div
      className="relative rounded-xl p-4 border border-brand-orange/20 transition-all duration-300 hover:shadow-lg"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      {/* Image Container */}
      <div className="relative w-full h-[220px] md:h-[283px] rounded-xl overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 418px"
        />

        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-brand-orange px-2 py-0.5">
          <span className="font-body font-medium text-sm text-white">
            {discount}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-3 right-3 bg-white rounded-tl-full rounded-tr-full rounded-bl-full px-3 py-2 flex items-center gap-2">
          <span className="font-body font-medium text-lg text-brand-orange">
            {currentPrice}
          </span>
          <span className="font-body font-medium text-sm text-black/60 line-through">
            {originalPrice}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <HeartIcon />
          </button>
          <button className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <CartIcon />
          </button>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map((i) => (
            <StarIcon key={i} filled />
          ))}
          <StarIcon filled={false} />
        </div>
        <span className="font-body font-normal text-base text-brand-brown">
          {rating}
        </span>
        <div className="w-px h-4 bg-brand-brown" />
        <span className="font-body font-normal text-base text-brand-brown">
          ({reviews} Reviews)
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display italic font-semibold text-lg md:text-[22px] leading-[29px] text-brand-brown mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body font-normal text-sm leading-6 text-brand-brown/60 mb-4 line-clamp-2">
        {description}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-black/20 mb-4" />

      {/* Info Row */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <ClockIcon />
          <span className="font-body font-normal text-sm text-brand-brown">
            {duration}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <PeopleIcon />
          <span className="font-body font-normal text-sm text-brand-brown">
            {people}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <LocationIcon />
          <span className="font-body font-normal text-sm text-brand-brown">
            {location}
          </span>
        </div>
      </div>
    </div>

    {/* Book Now Button - Shows on Hover */}
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
      <button className="px-8 py-3 bg-white border border-brand-orange rounded-xl font-display italic text-lg text-brand-brown hover:bg-brand-orange hover:text-white transition-all duration-300">
        Book Now
      </button>
    </div>

    {/* Orange Bottom Border */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[253px] h-[2px] bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

/**
 * FeaturedToursSection Component
 * "Most Favorite Tour Place" section with tour cards
 * Background: White/transparent
 */
export const FeaturedToursSection = () => {
  return (
    <section className="relative w-full py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 lg:mb-16">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl mb-6"
            style={{ backgroundColor: "#FF6E00" }}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 pb-12">
          {TOURS.map((tour) => (
            <TourCard
              key={tour.id}
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};
