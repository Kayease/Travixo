"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { WishlistItem } from "@/components/wishlist/WishlistCard";

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
 * Tour data
 */
const TOURS = [
  {
    id: 1,
    image: "/images/travixo-tours/cards/tour-1.png",
    discount: "27% Off",
    currentPrice: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    title: "Boathouse Neighborhood",
    description:
      "Explore charming waterfront neighborhoods with guided boat tours and discover hidden local gems along the canals.",
    duration: "4 hours",
    people: "2-18",
    location: "Italy, Rome",
    slug: "/products/grand-palace-tour",
  },
  {
    id: 2,
    image: "/images/travixo-tours/cards/tour-2.png",
    discount: "27% Off",
    currentPrice: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    title: "Venice Tour",
    description:
      "Glide through Venice's iconic canals, visit historic piazzas, and savor authentic Italian cuisine at local trattorias.",
    duration: "4 hours",
    people: "2-18",
    location: "Italy, Venice",
    slug: "/products/grand-palace-tour",
  },
  {
    id: 3,
    image: "/images/travixo-tours/cards/tour-3.png",
    discount: "27% Off",
    currentPrice: "$100",
    originalPrice: "$120",
    rating: 4.9,
    reviews: 311,
    title: "Paris Adventure",
    description:
      "Discover the City of Light with visits to the Eiffel Tower, Montmartre, and hidden courtyards of the Marais district.",
    duration: "4 hours",
    people: "2-18",
    location: "France, Paris",
    slug: "/products/grand-palace-tour",
  },
];

/**
 * TourCard Component
 */
const TourCard = ({
  id,
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
  id: number;
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
}) => {
  const router = useRouter();
  const { addToWishlist, isInWishlist } = useWishlist();
  const { addToCart, cartItems } = useCart();
  const isWishlisted = isInWishlist(id.toString());
  const isInCart = cartItems.some((item) => item.title === title);

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const priceValue = parseInt(currentPrice.replace(/[^0-9]/g, "")) || 0;
    const originalPriceValue =
      parseInt(originalPrice.replace(/[^0-9]/g, "")) || 0;
    const discountValue = parseInt(discount.replace(/[^0-9]/g, "")) || 0;

    const wishlistItem: WishlistItem = {
      id: id.toString(),
      slug: slug,
      title: title,
      description: description,
      image: image,
      price: priceValue,
      originalPrice: originalPriceValue,
      rating: rating,
      reviewCount: reviews,
      duration: duration,
      groupSize: people,
      location: location,
      type: "tour",
      discountPercent: discountValue,
    };

    addToWishlist(wishlistItem);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Parse price (remove $ and commas)
    const priceValue = parseInt(currentPrice.replace(/[^0-9]/g, "")) || 0;

    const cartItem = {
      id: `${id}-${Date.now()}`,
      type: "experience" as const,
      title: title,
      image: image,
      location: location,
      dates: new Date().toISOString().split("T")[0],
      amenities: [duration, people],
      price: priceValue,
      actionLabel: "Customize",
    };

    addToCart(cartItem);
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Parse price (remove $ and commas)
    const priceValue = parseInt(currentPrice.replace(/[^0-9]/g, "")) || 0;

    const cartItem = {
      id: `${id}-${Date.now()}`,
      type: "experience" as const,
      title: title,
      image: image,
      location: location,
      dates: new Date().toISOString().split("T")[0],
      amenities: [duration, people],
      price: priceValue,
      actionLabel: "Customize",
    };

    addToCart(cartItem);
    router.push("/cart");
  };

  return (
    <div className="relative w-full max-w-[418px] group hover:z-50">
      {/* Card Container */}
      <div
        className="relative rounded-xl p-4 border border-brand-orange/20 transition-all duration-300 hover:shadow-lg z-10"
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
          <div className="absolute top-3 left-3 bg-[#FF6E00] px-3 py-1 z-20">
            <span className="font-body font-bold text-[14px] text-white uppercase tracking-wider">
              {discount}
            </span>
          </div>

          {/* Price Badge (Frame 53) */}
          <div
            className="absolute bottom-1 right-1 bg-white z-10 flex items-center justify-center gap-1.5"
            style={{
              width: "136px",
              height: "52px",
              borderRadius: "40px 80px 0px 40px",
              boxShadow: "-2px -2px 10px rgba(0, 0, 0, 0.08)",
            }}
          >
            <span className="font-body font-semibold text-[20px] leading-[27px] text-[#FF6E00]">
              {currentPrice}
            </span>
            <span className="font-body font-medium text-[15px] leading-[21px] text-black/40 line-through">
              {originalPrice}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-20 lg:translate-x-12 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out">
            <button
              onClick={handleAddToWishlist}
              className={`group/icon w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${isWishlisted ? "bg-[#FF6E00]" : "bg-white hover:bg-[#FF6E00]"
                }`}
              aria-label="Add to wishlist"
            >
              <div
                className={`w-[24px] h-[24px] transition-colors duration-300 ${isWishlisted
                  ? "bg-white"
                  : "bg-[#4B3621] group-hover/icon:bg-white"
                  }`}
                style={{
                  maskImage: 'url("/images/icons/line-md_heart.png")',
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskImage:
                    'url("/images/icons/line-md_heart.png")',
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                }}
              />
            </button>
            <button
              onClick={handleAddToCart}
              className={`group/icon w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${isInCart ? "bg-[#FF6E00]" : "bg-white hover:bg-[#FF6E00]"
                }`}
              aria-label="Add to cart"
            >
              <div className="relative w-[18px] h-[14px]">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12C2 10.9 2.9 10 4 10C5.1 10 6 10.9 6 12ZM16 12C16 13.1 15.1 14 14 14C12.9 14 12 13.1 12 12C12 10.9 12.9 10 14 10C15.1 10 16 10.9 16 12ZM1 0H3L4.5 4H15L17 2H18V4L16.5 8H5L4 10H16V12H4L2.5 8L1 4V0Z"
                    className={`transition-colors duration-300 ${isInCart
                      ? "fill-white"
                      : "fill-[#4B3621] group-hover/icon:fill-white"
                      }`}
                  />
                </svg>
              </div>
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

      {/* Book Now Button - Permanent on Mobile/Tablet, Hover on Desktop */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 lg:opacity-0 lg:translate-y-12 transform lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto transition-all duration-500 ease-out">
        <button
          onClick={handleBookNow}
          className="relative flex items-center justify-center w-[253px] h-[50px] bg-white border border-brand-orange rounded-xl font-display italic text-lg text-brand-brown overflow-hidden group/btn transition-all duration-300 cursor-pointer shadow-md lg:shadow-none"
        >
          <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange group-hover/btn:h-full transition-all duration-300 ease-out" />
          <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
            Book Now
          </span>
        </button>
      </div>
    </div>
  );
};

/**
 * FeaturedToursSection Component
 * "Most Favorite Tour Place" section with tour cards
 * Background: White/transparent
 */
export const FeaturedToursSection = () => {
  return (
    <section className="relative w-full py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-4 lg:px-6 xl:px-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-6 pb-12">
          {TOURS.map((tour) => (
            <div
              key={tour.id}
              className="flex justify-center md:last:col-span-2 lg:last:col-span-1 lg:last:block"
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
