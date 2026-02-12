"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";

/**
 * Shared TourCard Props
 *
 * A single, consistent card component used across the entire site:
 * Home (Featured), Paris, Related Tours, and Wishlist pages.
 *
 * Pass `variant="wishlist"` for wishlist-specific behavior:
 *   - Heart button removes from wishlist instead of adding
 *   - Book Now links to checkout instead of adding to cart
 *   - Supports `onRemove` and `onAddToCart` callbacks
 */
export interface TourCardProps {
  id: string | number;
  image: string;
  title: string;
  description: string;
  currentPrice: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  reviews: number;
  duration: string;
  people: string;
  location: string;
  slug: string;
  /** "default" for standard tour cards, "wishlist" for wishlist behavior */
  variant?: "default" | "wishlist";
  /** Wishlist only: callback when heart (remove) button is clicked */
  onRemove?: (id: string) => void;
  /** Wishlist only: callback when cart button is clicked */
  onAddToCart?: (id: string) => void;
  /** Pass true for above-the-fold images */
  priority?: boolean;
}

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
 * TourCard Component
 * Single reusable card with consistent UI across the entire site.
 */
const TourCard: React.FC<TourCardProps> = ({
  id,
  image,
  title,
  description,
  currentPrice,
  originalPrice,
  discount,
  rating,
  reviews,
  duration,
  people,
  location,
  slug,
  variant = "default",
  onRemove,
  onAddToCart,
  priority = false,
}) => {
  const router = useRouter();
  const { addToCart, isInCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const isWishlisted = isInWishlist(id.toString());
  const isInCartState = isInCart(title);

  const handleWishlistAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (variant === "wishlist") {
      onRemove?.(id.toString());
      return;
    }

    if (isWishlisted) {
      removeFromWishlist(id.toString());
    } else {
      addToWishlist({
        id: id.toString(),
        slug,
        title,
        description,
        image,
        price: currentPrice,
        originalPrice,
        rating,
        reviewCount: reviews,
        duration,
        groupSize: people,
        location,
        type: "tour",
        discountPercent: discount
          ? parseInt(discount.replace(/[^0-9]/g, "")) || undefined
          : undefined,
      });
    }
  };

  const handleCartAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (variant === "wishlist") {
      onAddToCart?.(id.toString());
      return;
    }

    addToCart({
      id: `${id}-${crypto.randomUUID()}`,
      type: "experience",
      title,
      image,
      location,
      dates: new Date().toISOString().split("T")[0],
      amenities: [duration, people],
      price: currentPrice,
      actionLabel: "Customize",
    });
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (variant === "wishlist") {
      router.push(
        `/checkout?name=${encodeURIComponent(title)}&price=${currentPrice}&image=${encodeURIComponent(image)}`,
      );
      return;
    }

    addToCart({
      id: `${id}-${crypto.randomUUID()}`,
      type: "experience",
      title,
      image,
      location,
      dates: new Date().toISOString().split("T")[0],
      amenities: [duration, people],
      price: currentPrice,
      actionLabel: "Customize",
    });
    router.push("/cart");
  };

  const fullStars = Math.floor(rating);

  return (
    <div className="relative w-full max-w-[418px] group hover:z-50 pb-[58px]">
      {/* Card Container */}
      <div
        className="relative rounded-xl p-4 border border-brand-orange/20 transition-all duration-300 hover:shadow-lg z-10 h-full"
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
              priority={priority}
            />
          </Link>

          {/* Discount Badge */}
          {discount && (
            <div className="absolute top-3 left-3 bg-[#FF6E00] px-3 py-1 z-20">
              <span className="font-body font-bold text-[14px] text-white uppercase tracking-wider">
                {discount}
              </span>
            </div>
          )}

          {/* Price Badge */}
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
              ${currentPrice}
            </span>
            {originalPrice && (
              <span className="font-body font-medium text-[15px] leading-[21px] text-black/40 line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-20 lg:translate-x-12 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out">
            {/* Heart / Wishlist Button */}
            <button
              onClick={handleWishlistAction}
              className={`group/icon w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${isWishlisted
                  ? "bg-[#FF6E00]"
                  : "bg-white hover:bg-[#FF6E00]"
                }`}
              aria-label={
                variant === "wishlist"
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
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
                  WebkitMaskImage: 'url("/images/icons/line-md_heart.png")',
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                }}
              />
            </button>

            {/* Cart Button */}
            <button
              onClick={handleCartAction}
              className={`group/icon w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${isInCartState
                  ? "bg-[#FF6E00]"
                  : "bg-white hover:bg-[#FF6E00]"
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
                    className={`transition-colors duration-300 ${isInCartState
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
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} filled={i <= fullStars} />
            ))}
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
            <Image
              src="/images/home/featured/tdesign_time.png"
              alt="Duration"
              width={24}
              height={24}
            />
            <span className="font-body font-normal text-sm text-brand-brown">
              {duration}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/home/featured/formkit_people-1.png"
              alt="People"
              width={24}
              height={24}
            />
            <span className="font-body font-normal text-sm text-brand-brown">
              {people}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/home/featured/akar-icons_location.png"
              alt="Location"
              width={24}
              height={24}
            />
            <span className="font-body font-normal text-sm text-brand-brown">
              {location}
            </span>
          </div>
        </div>
      </div>

      {/* Book Now Button — slides up on hover */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 lg:opacity-0 lg:translate-y-4 transform lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto transition-all duration-500 ease-out">
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

TourCard.displayName = "TourCard";
export default TourCard;
