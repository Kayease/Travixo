"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, CartItem } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { WishlistItem } from "@/components/wishlist/WishlistCard";

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
  const router = useRouter();
  const { addToCart, cartItems } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const handleAddToCart = (tour: RelatedTour) => {
    const cartItem: CartItem = {
      id: `${tour.id}-${Date.now()}`,
      type: "experience",
      title: tour.title,
      image: tour.imageUrl,
      location: tour.location,
      dates: new Date().toISOString().split("T")[0],
      amenities: [tour.duration, tour.groupSize],
      price: tour.price,
      actionLabel: "Customize",
    };
    addToCart(cartItem);
  };

  const handleBookNow = (tour: RelatedTour) => {
    const cartItem: CartItem = {
      id: `${tour.id}-${Date.now()}`,
      type: "experience",
      title: tour.title,
      image: tour.imageUrl,
      location: tour.location,
      dates: new Date().toISOString().split("T")[0],
      amenities: [tour.duration, tour.groupSize],
      price: tour.price,
      actionLabel: "Customize",
    };

    addToCart(cartItem);
    router.push("/cart");
  };

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
        {tours.map((tour) => {
          const isInWishlistState = isInWishlist(tour.id.toString());
          const isInCartState = cartItems.some(item => item.title === tour.title);

          const handleToggleWishlist = () => {
            if (isInWishlistState) {
              removeFromWishlist(tour.id.toString());
            } else {
              const wishlistItem: WishlistItem = {
                id: tour.id.toString(),
                slug: tour.slug,
                title: tour.title,
                description: tour.description,
                image: tour.imageUrl,
                price: tour.price,
                originalPrice: tour.originalPrice,
                rating: tour.rating,
                reviewCount: tour.reviewCount,
                duration: tour.duration,
                groupSize: tour.groupSize,
                location: tour.location,
                type: "tour",
                discountPercent: tour.discount ? parseInt(tour.discount) : undefined,
              };
              addToWishlist(wishlistItem);
            }
          };

          return (
            <div key={tour.id} className="group block relative hover:z-50 md:odd:last:col-span-2 md:odd:last:justify-self-center md:odd:last:mt-12 lg:odd:last:col-auto lg:odd:last:justify-self-auto lg:odd:last:mt-0">
              <article
                className="relative flex flex-col z-10 p-4 lg:p-3 xl:p-[18px]"
                style={{
                  width: "100%",
                  maxWidth: "418px",
                  minHeight: "530px",
                  backgroundColor: "#FFFCF5",
                  border: "1px solid rgba(255, 110, 0, 0.2)",
                  borderRadius: "12px",
                  boxSizing: "border-box",
                }}
              >
                {/* Image Container (Frame 51) */}
                <div className="relative w-full h-[220px] md:h-[283px] overflow-hidden rounded-[12px] group mb-4">
                  <Link
                    href={`/products/${tour.slug || tour.id}`}
                    className="block w-full h-full relative cursor-pointer"
                  >
                    {tour.imageUrl ? (
                      <Image
                        src={tour.imageUrl}
                        alt={tour.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 418px"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </Link>

                  {/* Discount Badge */}
                  {tour.discount && (
                    <div className="absolute top-3 left-3 bg-[#FF6E00] px-3 py-1 z-20">
                      <span className="font-poppins font-bold text-[14px] text-white uppercase tracking-wider">
                        {tour.discount}
                      </span>
                    </div>
                  )}

                  {/* Hover Icons: Slide in from Right */}
                  <div className="absolute top-[12px] right-[12px] flex flex-col gap-2 z-10 lg:translate-x-[50px] lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-all duration-300 ease-out">

                    {/* Heart Icon */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleToggleWishlist();
                      }}
                      className={`group/icon w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${isInWishlistState ? "bg-[#FF6E00]" : "bg-white hover:bg-[#FF6E00]"
                        }`}
                      aria-label="Add to wishlist"
                    >
                      <div
                        className={`w-[24px] h-[24px] transition-colors duration-300 ${isInWishlistState
                          ? "bg-white"
                          : "bg-[#4B3621] group-hover/icon:bg-white"
                          }`}
                        style={{
                          maskImage:
                            'url("/images/icons/line-md_heart.png")',
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

                    {/* Cart Icon */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(tour);
                      }}
                      className={`group/icon w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${isInCartState ? "bg-[#FF6E00]" : "bg-white hover:bg-[#FF6E00]"
                        }`}
                      aria-label="Add to cart"
                    >
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12C2 10.9 2.9 10 4 10C5.1 10 6 10.9 6 12ZM16 12C16 13.1 15.1 14 14 14C12.9 14 12 13.1 12 12C12 10.9 12.9 10 14 10C15.1 10 16 10.9 16 12ZM1 0H3L4.5 4H15L17 2H18V4L16.5 8H5L4 10H16V12H4L2.5 8L1 4V0Z"
                          className={`transition-colors duration-300 ${isInCartState ? "fill-white" : "fill-[#4B3621] group-hover/icon:fill-white"
                            }`}
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Price Tag (Frame 53) */}
                  <div
                    className="absolute bottom-0 right-0 bg-white shadow-sm z-10 flex items-center justify-center gap-2"
                    style={{
                      width: '102px',
                      height: '47px',
                      borderRadius: '100px 100px 0px 100px'
                    }}
                  >
                    <span className="font-poppins font-medium text-[18px] leading-[27px] text-[#FF6E00]">
                      ${tour.price}
                    </span>
                    {tour.originalPrice && (
                      <span className="font-poppins font-medium text-[14px] leading-[21px] text-black/60 line-through">
                        ${tour.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center h-[19px] mb-4">
                  <div className="flex gap-px">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="relative w-[17px] h-[16px]">
                        <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.5 0L10.9706 5.34094L16.8116 6.009L12.4828 9.99844L13.6599 15.75L8.5 12.8638L3.34008 15.75L4.51722 9.99844L0.188358 6.009L6.02931 5.34094L8.5 0Z"
                            fill={star <= 4 ? "#FF6E00" : "#D1D5DB"}
                          />
                        </svg>
                      </div>
                    ))}
                  </div>

                  <span className="ml-[10px] font-poppins font-normal text-base lg:text-sm xl:text-[16px] leading-[24px] text-brand-brown">
                    {tour.rating}
                  </span>

                  <div className="mx-[8px] w-px h-[16px] bg-[#4B3621]" />

                  <span className="font-poppins font-normal text-[16px] leading-[24px] text-brand-brown whitespace-nowrap">
                    ({tour.reviewCount} Reviews)
                  </span>
                </div>

                {/* Title */}
                <div className="mb-3">
                  <Link href={`/products/grand-palace-tour`} className="cursor-pointer">
                    <h3 className="font-display italic font-semibold text-[20px] md:text-[22px] leading-[29px] text-brand-brown line-clamp-1 hover:text-brand-orange transition-colors">
                      {tour.title}
                    </h3>
                  </Link>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="font-poppins font-normal text-[14px] leading-[24px] text-[rgba(75,54,33,0.6)] line-clamp-2">
                    {tour.description}
                  </p>
                </div>

                {/* Separator Line */}
                <div className="w-full h-px bg-[rgba(0,0,0,0.2)] mb-4" />

                {/* Bottom Info Row */}
                <div className="flex items-center justify-between gap-1 lg:gap-1.5 xl:gap-2 h-auto mb-4">
                  {/* Duration */}
                  <div className="flex items-center gap-2 lg:gap-1 xl:gap-[8px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 lg:w-4 lg:h-4 xl:w-6 xl:h-6"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="#FF6E00"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 6V12H16.5"
                        stroke="#FF6E00"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="font-poppins font-normal text-sm lg:text-[12px] xl:text-[14px] leading-[24px] text-brand-brown">
                      {tour.duration}
                    </span>
                  </div>

                  {/* Group Size */}
                  <div className="flex items-center gap-2 lg:gap-1 xl:gap-[8px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 lg:w-4 lg:h-4 xl:w-6 xl:h-6"
                    >
                      <path
                        d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21"
                        stroke="#FF6E00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="7"
                        r="4"
                        stroke="#FF6E00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-poppins font-normal text-sm lg:text-[12px] xl:text-[14px] leading-[24px] text-brand-brown">
                      {tour.groupSize}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-[6px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 21C16 17 20 13 20 9C20 4.58 16.42 1 12 1C7.58 1 4 4.58 4 9C4 13 8 17 12 21Z"
                        stroke="#FF6E00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="9"
                        r="3"
                        stroke="#FF6E00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-poppins font-normal text-sm lg:text-[12px] xl:text-[14px] leading-[24px] text-brand-brown line-clamp-1">
                      {tour.location}
                    </span>
                  </div>
                </div>

                {/* Book Now Button - Permanent on Mobile/Tablet, Hover on Desktop */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 lg:opacity-0 lg:translate-y-12 transform lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto transition-all duration-500 ease-out">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleBookNow(tour);
                    }}
                    className="relative flex items-center justify-center w-[253px] h-[50px] bg-white border border-[#FF6E00] rounded-[12px] font-display italic text-lg text-brand-brown overflow-hidden group/btn transition-all duration-300 cursor-pointer shadow-md lg:shadow-none"
                  >
                    <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#FF6E00] group-hover/btn:h-full transition-all duration-300 ease-out" />
                    <span className="relative z-10 font-medium text-[20px] group-hover/btn:text-white transition-colors duration-300">
                      Book Now
                    </span>
                  </button>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedToursSection;
