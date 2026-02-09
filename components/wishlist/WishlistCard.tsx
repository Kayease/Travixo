/**
 * WishlistCard Component
 *
 * Reusable tour/destination card for the wishlist page.
 * Features image with discount badge, price, rating, and meta info.
 *
 * Design specs from Figma:
 * - Card: 418x530px, background #FFFCF5, border 1px rgba(255,110,0,0.2), radius 12px
 * - Image: 382x283px with rounded corners
 * - Discount badge: orange #FF6E00, Poppins 14px medium
 * - Price bubble: white background, radius 100px 100px 0px 100px
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Type definition for wishlist item
export interface WishlistItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  discountPercent?: number;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  duration: string;
  groupSize: string;
  type: "tour" | "destination";
  location: string;
}

interface WishlistCardProps {
  item: WishlistItem;
  onRemove?: (id: string) => void;
  onAddToCart?: (id: string) => void;
  priority?: boolean;
}

const WishlistCard: React.FC<WishlistCardProps> = ({
  item,
  onRemove,
  onAddToCart,
  priority = false,
}) => {
  // Render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // Full star
        stars.push(
          <svg key={i} className="w-[17px] h-4" viewBox="0 0 17 16" fill="none">
            <path
              d="M8.5 1L10.6 5.3L15.5 6L12 9.4L12.8 14.3L8.5 12L4.2 14.3L5 9.4L1.5 6L6.4 5.3L8.5 1Z"
              fill="#FF6E00"
              stroke="#FF6E00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>,
        );
      } else if (i === fullStars && hasHalfStar) {
        // Half star (outline)
        stars.push(
          <svg key={i} className="w-[17px] h-4" viewBox="0 0 17 16" fill="none">
            <path
              d="M8.5 1L10.6 5.3L15.5 6L12 9.4L12.8 14.3L8.5 12L4.2 14.3L5 9.4L1.5 6L6.4 5.3L8.5 1Z"
              stroke="#FF6E00"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>,
        );
      } else {
        // Empty star (outline)
        stars.push(
          <svg key={i} className="w-[17px] h-4" viewBox="0 0 17 16" fill="none">
            <path
              d="M8.5 1L10.6 5.3L15.5 6L12 9.4L12.8 14.3L8.5 12L4.2 14.3L5 9.4L1.5 6L6.4 5.3L8.5 1Z"
              stroke="#FF6E00"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>,
        );
      }
    }
    return stars;
  };

  return (
    <article className="group relative bg-[#FFFCF5] border border-[rgba(255,110,0,0.2)] rounded-xl transition-all duration-300 hover:shadow-lg hover:z-10">
      {/* Card Inner Container */}
      <div className="p-[18px]">
        {/* Image Container */}
        <div className="relative w-full aspect-382/283 rounded-xl overflow-hidden mb-4">
          <Link
            href="/paris"
            className="block relative w-full h-full cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 418px"
              priority={priority}
            />
          </Link>

          {/* Discount Badge */}
          {item.discountPercent && (
            <div className="absolute top-3 left-3 bg-brand-orange px-2 py-0.5 rounded-sm">
              <span className="font-body font-medium text-sm leading-[21px] text-white">
                {item.discountPercent}% Off
              </span>
            </div>
          )}

          {/* Price Bubble */}
          <div className="absolute bottom-0 right-0 bg-white px-2 py-2.5 rounded-[100px_100px_0px_100px] min-w-[102px]">
            <div className="flex items-center gap-1">
              <span className="font-body font-medium text-lg leading-[27px] text-brand-orange">
                ${item.price}
              </span>
              {item.originalPrice && (
                <span className="font-body font-medium text-sm leading-[21px] text-brand-brown/60 line-through">
                  ${item.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons - Heart & Cart */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
            {/* Heart/Remove Button */}
            <button
              onClick={() => onRemove?.(item.id)}
              className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center hover:bg-[#FF6E00] text-[#4B3621] hover:text-white transition-colors cursor-pointer"
              aria-label="Remove from wishlist"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Cart Button */}
            <button
              onClick={() => onAddToCart?.(item.id)}
              className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center hover:bg-[#FF6E00] text-[#4B3621] hover:text-white transition-colors cursor-pointer"
              aria-label="Add to cart"
            >
              <svg
                className="w-[18px] h-[14px]"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M17.25 9.5H5.25L4.5 7.25H15.75L17.25 2H3L1.5 0.5H0V2H1.5L4.5 11H17.25V9.5ZM5.25 12.5C4.42 12.5 3.75 13.17 3.75 14C3.75 14.83 4.42 15.5 5.25 15.5C6.08 15.5 6.75 14.83 6.75 14C6.75 13.17 6.08 12.5 5.25 12.5ZM14.25 12.5C13.42 12.5 12.75 13.17 12.75 14C12.75 14.83 13.42 15.5 14.25 15.5C15.08 15.5 15.75 14.83 15.75 14C15.75 13.17 15.08 12.5 14.25 12.5Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {renderStars(item.rating)}
          </div>
          <span className="font-body font-normal text-base leading-6 text-brand-brown ml-1">
            {item.rating}
          </span>
          <span className="w-px h-4 bg-brand-brown mx-1" />
          <span className="font-body font-normal text-base leading-6 text-brand-brown">
            ({item.reviewCount} Reviews)
          </span>
        </div>

        {/* Title */}
        <Link href="/paris" className="cursor-pointer">
          <h3 className="font-display italic font-semibold text-[22px] leading-[29px] text-brand-brown mb-3 hover:text-brand-orange transition-colors">
            {item.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="font-body font-normal text-sm leading-6 text-brand-brown/60 mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-brand-brown/20 mb-4" />

        {/* Meta Info */}
        <div className="flex items-center gap-6 flex-wrap">
          {/* Duration */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#FF6E00" strokeWidth="2" />
              <path
                d="M12 7V12L15 15"
                stroke="#FF6E00"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-body font-normal text-sm leading-6 text-brand-brown">
              {item.duration}
            </span>
          </div>

          {/* Group Size */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="6" r="3" fill="#FF6E00" />
              <path
                d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20"
                stroke="#FF6E00"
                strokeWidth="2"
                fill="#FF6E00"
              />
            </svg>
            <span className="font-body font-normal text-sm leading-6 text-brand-brown">
              {item.groupSize}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                stroke="#FF6E00"
                strokeWidth="2"
              />
              <circle cx="12" cy="9" r="2.5" stroke="#FF6E00" strokeWidth="2" />
            </svg>
            <span className="font-body font-normal text-sm leading-6 text-brand-brown">
              {item.location}
            </span>
          </div>
        </div>
      </div>

      {/* Hover State - Book Now Button - Slides up from bottom on card hover */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out w-[253px]">
        <Link
          href={`/checkout?name=${encodeURIComponent(item.title)}&price=${item.price}&image=${encodeURIComponent(item.image)}`}
          className="flex items-center justify-center w-full h-[50px] bg-white border border-[#FF6E00] rounded-xl shadow-lg relative overflow-hidden group/btn transition-all duration-300 cursor-pointer"
        >
          <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#FF6E00] group-hover/btn:h-full transition-all duration-300 ease-out" />
          <span className="relative z-10 font-display italic font-normal text-[18px] leading-[24px] text-brand-brown group-hover/btn:text-white transition-colors duration-300">
            Book Now
          </span>
        </Link>
      </div>
    </article>
  );
};

export default WishlistCard;
