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
 * Cart Icon for top-right actions
 */
const CartIcon = ({ className = "" }: { className?: string }) => (
  <div
    className={`w-full h-full ${className}`}
    style={{
      maskImage: 'url("/images/navbar/mdi_cart-outline.png")',
      maskSize: "contain",
      maskRepeat: "no-repeat",
      maskPosition: "center",
      WebkitMaskImage: 'url("/images/navbar/mdi_cart-outline.png")',
      WebkitMaskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
    }}
  />
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
  const { addToCart, isInCart, removeFromCart, cartItems } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isWishlisted = mounted && isInWishlist(id.toString());
  const isInCartState = mounted && isInCart(title);

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

    if (!isInCartState) {
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
    } else {
      // Find the item ID in the cart to remove it
      const itemToRemove = cartItems.find((item) => item.title === title);
      const itemId = itemToRemove?.id;
      if (itemId) {
        removeFromCart(itemId);
      }
    }
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Add to cart before redirecting
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
    <div className="relative w-full max-w-[418px] group lg:hover:z-50 focus-within:z-50 pb-[58px] outline-none" tabIndex={0}>
      <Link href="/products" className="block">
        <div
          className="relative rounded-xl p-4 border border-brand-orange/20 transition-all duration-300 lg:hover:shadow-lg group-focus:shadow-lg group-active:shadow-lg z-10 h-full bg-[#FFFCF5] cursor-pointer"
        >
          {/* Image Container */}
          <div className="relative w-full h-[220px] md:h-[283px] rounded-xl overflow-hidden mb-4">
            <div className="block w-full h-full relative">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 418px"
                priority={priority}
              />
            </div>

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
            <div className="absolute top-3 right-3 flex flex-col gap-2 z-20 transition-all duration-500 ease-out xl:translate-x-12 xl:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100 group-active:translate-x-0 group-active:opacity-100">
              {/* Heart / Wishlist Button */}
              <button
                onClick={handleWishlistAction}
                className={`group/icon w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer outline-none ${isWishlisted
                  ? "bg-[#FF6E00]"
                  : "bg-white lg:hover:bg-[#FF6E00]"
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
                    : "bg-[#4B3621] lg:group-hover/icon:bg-white"
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
                className={`group/icon w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer outline-none ${isInCartState
                  ? "bg-[#FF6E00] text-white"
                  : "bg-white text-[#4B3621] lg:hover:bg-[#FF6E00] lg:hover:text-white"
                  }`}
                aria-label="Add to cart"
              >
                <div className="scale-[0.8] w-6 h-6">
                  <CartIcon
                    className={isInCartState
                      ? "bg-white"
                      : "bg-[#4B3621] group-hover/icon:bg-white transition-colors duration-300"
                    }
                  />
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
          <div className="block">
            <h3 className="font-display italic font-semibold text-lg md:text-[22px] leading-[29px] text-brand-brown mb-3 transition-colors">
              {title}
            </h3>
          </div>

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
      </Link>

      {/* Book Now Button — slides up on hover */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 xl:opacity-0 xl:translate-y-4 transform lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto group-focus:opacity-100 group-focus:translate-y-0 group-focus:pointer-events-auto transition-all duration-500 ease-out">
        <button
          onClick={handleBookNow}
          className="relative flex items-center justify-center w-[253px] h-[50px] bg-white border border-brand-orange rounded-xl font-display italic text-lg text-brand-brown overflow-hidden group/btn transition-all duration-300 cursor-pointer shadow-md xl:shadow-none outline-none"
        >
          <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange lg:group-hover/btn:h-full transition-all duration-300 ease-out" />
          <span className="relative z-10 lg:group-hover/btn:text-white transition-colors duration-300">
            Book Now
          </span>
        </button>
      </div>
    </div>
  );
};

TourCard.displayName = "TourCard";
export default TourCard;
