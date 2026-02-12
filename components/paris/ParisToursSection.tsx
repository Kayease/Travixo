"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    id: "paris-1",
    image: "/images/paris/cards/tour-2.png",
    discount: "27% Off",
    currentPrice: "$100",
    originalPrice: "$120",
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
    currentPrice: "$100",
    originalPrice: "$120",
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
    currentPrice: "$100",
    originalPrice: "$120",
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
    currentPrice: "$100",
    originalPrice: "$120",
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
    currentPrice: "$100",
    originalPrice: "$120",
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
    currentPrice: "$100",
    originalPrice: "$120",
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
 * ParisTourCard Component
 */
import { useRouter } from "next/navigation";
import { useCart, CartItem } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { WishlistItem } from "@/components/wishlist/WishlistCard";

// ... existing code ...

const ParisTourCard = ({
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
  id: string | number;
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
  const { addToCart, cartItems } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(id.toString());
  const isInCart = cartItems.some((item) => item.title === title);

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isWishlisted) {
      // Optional: Remove from wishlist if already added, or show message?
      // For now, just show message via addToWishlist logic or do nothing
      // But typically toggle is expected. The context handles "already in wishlist" toast.
    }

    const priceValue = parseInt(currentPrice.replace(/[^0-9]/g, "")) || 0;
    const originalPriceValue = parseInt(originalPrice.replace(/[^0-9]/g, "")) || 0;
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

    // Parse price
    const priceValue = parseInt(currentPrice.replace(/[^0-9]/g, "")) || 0;

    const cartItem: CartItem = {
      id: `${title}-${Date.now()}`,
      type: "experience",
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

    // Parse price
    const priceValue = parseInt(currentPrice.replace(/[^0-9]/g, "")) || 0;

    const cartItem: CartItem = {
      id: `${title}-${Date.now()}`,
      type: "experience",
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
        className="relative rounded-xl p-4 border border-brand-orange/20 transition-all duration-300 hover:shadow-lg h-full z-20"
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
            className="absolute bottom-0 right-0 bg-white shadow-sm z-10 flex items-center justify-center gap-2"
            style={{
              width: '102px',
              height: '47px',
              borderRadius: '100px 100px 0px 100px'
            }}
          >
            <span className="font-body font-medium text-[18px] leading-[27px] text-[#FF6E00]">
              {currentPrice}
            </span>
            <span className="font-body font-medium text-[14px] leading-[21px] text-black/60 line-through">
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
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-50 lg:opacity-0 lg:translate-y-12 transform lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto transition-all duration-500 ease-out">
        <button
          onClick={handleBookNow}
          className="relative flex items-center justify-center w-[253px] h-[50px] bg-white border border-brand-orange rounded-xl font-display italic text-lg text-brand-brown overflow-hidden group/btn transition-all duration-300 shadow-lg lg:shadow-none cursor-pointer"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-[62px] justify-items-center">
          {PARIS_TOURS.map((tour) => (
            <ParisTourCard
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
