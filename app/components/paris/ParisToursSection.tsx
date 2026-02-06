"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  <Image
    src="/images/home/featured/tdesign_time.png"
    alt="Duration"
    width={24}
    height={24}
  />
);

/**
 * People Icon
 */
const PeopleIcon = () => (
  <Image
    src="/images/home/featured/formkit_people-1.png"
    alt="People"
    width={24}
    height={24}
  />
);

/**
 * Location Icon
 */
const LocationIcon = () => (
  <Image
    src="/images/home/featured/akar-icons_location.png"
    alt="Location"
    width={24}
    height={24}
  />
);

/**
 * Tour data for Paris
 */
const PARIS_TOURS = [
  {
    id: 1,
    image: "/images/paris/Frame 485.png",
    discount: "27% Off",
    currentPrice: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    title: "Eiffel Tower",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    duration: "4 hours",
    people: "2-18",
    location: "Paris, France",
    slug: "/products/eiffel-tower",
  },
  {
    id: 2,
    image: "/images/paris/Frame 486.png",
    discount: "27% Off",
    currentPrice: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    title: "Louvre Museum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    duration: "4 hours",
    people: "2-18",
    location: "Paris, France",
    slug: "/products/louvre-museum",
  },
  {
    id: 3,
    image: "/images/paris/Frame 487.png",
    discount: "27% Off",
    currentPrice: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    title: "Centre Pompidou",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    duration: "4 hours",
    people: "2-18",
    location: "Paris, France",
    slug: "/products/centre-pompidou",
  },
  {
    id: 4,
    image: "/images/paris/Frame 488.png",
    discount: "27% Off",
    currentPrice: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    title: "Arc de Triomphe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    duration: "4 hours",
    people: "2-18",
    location: "Paris, France",
    slug: "/products/champs-elysees",
  },
  {
    id: 5,
    image: "/images/paris/Frame 489.png",
    discount: "27% Off",
    currentPrice: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    title: "Catacombs of Paris",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    duration: "4 hours",
    people: "2-18",
    location: "Paris, France",
    slug: "/products/catacombs-of-paris",
  },
  {
    id: 6,
    image: "/images/paris/Frame 51.png",
    discount: "27% Off",
    currentPrice: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    title: "Seine River Cruises",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    duration: "4 hours",
    people: "2-18",
    location: "Paris, France",
    slug: "/products/seine-river-cruises",
  },
];

/**
 * ParisTourCard Component
 */
const ParisTourCard = ({
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
  slug,
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
  slug: string;
}) => (
  <div className="relative w-full max-w-[418px] group">
    {/* Card Container */}
    <div
      className="relative rounded-xl p-4 border border-brand-orange/20 transition-all duration-300 hover:shadow-lg h-full"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      {/* Image Container */}
      <div className="relative w-full h-[220px] md:h-[283px] rounded-xl overflow-hidden mb-4">
        <Link
          href={slug}
          className="block w-full h-full relative cursor-pointer"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 418px"
          />
        </Link>

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
        <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <button
            className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => console.log(`Liked ${title}`)}
          >
            <HeartIcon />
          </button>
          <button
            className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => console.log(`Added ${title} to cart`)}
          >
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
      <Link href={slug} className="cursor-pointer">
        <h3 className="font-display italic font-semibold text-lg md:text-[22px] leading-[29px] text-brand-brown mb-3 hover:text-brand-orange transition-colors">
          {title}
        </h3>
      </Link>

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
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 translate-y-12 transform group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
      <Link
        href={slug}
        className="relative block px-8 py-3 bg-white border border-brand-orange rounded-xl font-display italic text-lg text-brand-brown overflow-hidden group/btn transition-all duration-300 text-center shadow-lg"
      >
        <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange group-hover/btn:h-full transition-all duration-300 ease-out" />
        <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
          Book Now
        </span>
      </Link>
    </div>
  </div>
);

/**
 * ParisToursSection Component
 */
export const ParisToursSection = () => {
  return (
    <section className="w-full bg-white py-20 flex justify-center">
      <div className="w-full max-w-[1440px] px-4 md:px-20 relative">
        {/* Title */}
        <h2 className="font-display italic font-semibold text-[28px] leading-[37px] text-[#4B3621] text-center mb-12">
          Most Favorite Tour in Paris
        </h2>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-[62px] justify-items-center">
          {PARIS_TOURS.map((tour) => (
            <ParisTourCard
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
              slug={tour.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
