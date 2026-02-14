"use client";
/**
 * FavoriteRoomSection Component
 *
 * Full-width featured section showcasing the most popular room.
 * Features a background image with overlay, a room preview card,
 * and promotional content with a booking CTA.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

const CartIcon = () => (
  <svg
    width="25"
    height="20"
    viewBox="0 0 25 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.75 12.5H10V3.75H8.75C8.06 3.75 7.5 4.3098 7.5 5V11.25C7.5 11.9402 8.06 12.5 8.75 12.5ZM22.5 11.25V5C22.5 4.3098 21.94 3.75 21.25 3.75H20V12.5H21.25C21.94 12.5 22.5 11.9402 22.5 11.25ZM24.38 15H5V0.625C5 0.2797 4.72 0 4.38 0H0.62C0.28 0 0 0.2797 0 0.625V1.875C0 2.2203 0.28 2.5 0.62 2.5H2.5V16.875C2.5 17.2203 2.78 17.5 3.12 17.5H6.36C6.29 17.6965 6.25 17.9047 6.25 18.125C6.25 19.1605 7.09 20 8.12 20C9.16 20 10 19.1605 10 18.125C10 17.9047 9.96 17.6965 9.89 17.5H17.61C17.54 17.6965 17.5 17.9047 17.5 18.125C17.5 19.1605 18.34 20 19.38 20C20.41 20 21.25 19.1605 21.25 18.125C21.25 17.9047 21.21 17.6965 21.14 17.5H24.38C24.72 17.5 25 17.2203 25 16.875V15.625C25 15.2797 24.72 15 24.38 15ZM18.75 3.75V1.875C18.75 0.8395 17.91 0 16.88 0H13.12C12.09 0 11.25 0.8395 11.25 1.875V12.5H18.75V3.75ZM16.88 3.75H13.12V1.875H16.88V3.75Z"
      fill="currentColor"
    />
  </svg>
);

const FavoriteRoomSection: React.FC = () => {
  const router = useRouter();
  const { addToCart, isInCart } = useCart();

  const handleCartAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isInCart("Special Room")) {
      addToCart({
        id: `special-room-${Date.now()}`,
        type: "room",
        title: "Special Room",
        image: "/images/room/cards/room-card-3.png",
        location: "Luxurious Hotel",
        dates: new Date().toISOString().split("T")[0],
        amenities: ["Golden Interior", "Premium Amenities"],
        price: 45,
        actionLabel: "Customize",
      });
    }

    router.push("/cart");
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();

    addToCart({
      id: `special-room-${Date.now()}`,
      type: "room",
      title: "Special Room",
      image: "/images/room/cards/room-card-3.png",
      location: "Luxurious Hotel",
      dates: new Date().toISOString().split("T")[0],
      amenities: ["Golden Interior", "Premium Amenities"],
      price: 45,
      actionLabel: "Customize",
    });

    router.push("/checkout");
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[650px] lg:min-h-[705px]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/room/cards/hero-3.png"
          alt="Luxurious bedroom background"
          fill
          className="object-cover scale-105"
          sizes="100vw"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto py-8 md:py-16 lg:py-20 my-8 md:my-16 lg:my-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16">
          {/* ============================================
              Left - Room Card
          ============================================ */}
          <div className="w-full max-w-[418px] bg-[#FFFCF5] rounded-xl overflow-hidden shrink-0">
            {/* Room Image */}
            <div className="relative w-full h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden group/card">
              <Image
                src="/images/room/cards/room-card-3.png"
                alt="Special room with golden interior"
                fill
                className="object-cover scale-105"
                sizes="(max-width: 768px) 100vw, 418px"
              />

              {/* Cart Icon in top right */}
              <div className="absolute top-4 right-4 z-30 transition-all duration-500 xl:translate-x-12 xl:opacity-0 xl:group-hover/card:translate-x-0 xl:group-hover/card:opacity-100">
                <button
                  onClick={handleCartAction}
                  className="w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center text-[#4B3621] hover:bg-[#FF6E00] hover:text-white transition-colors cursor-pointer shadow-md"
                >
                  <div className="scale-[0.6]">
                    <CartIcon />
                  </div>
                </button>
              </div>
            </div>

            {/* Room Details */}
            <div className="p-4 md:p-5">
              {/* Room Name */}
              <h3 className="font-display text-xl md:text-2xl italic font-semibold leading-8 text-[#4B3621] mb-2">
                Special
              </h3>

              {/* Price */}
              <p className="font-display text-lg md:text-xl italic font-medium leading-[27px] text-[#4B3621] mb-3">
                $45{" "}
                <span className="text-base font-normal not-italic">/Night</span>
              </p>

              {/* Description */}
              <p className="text-base md:text-lg font-normal leading-7 text-[#4B3621] mb-4">
                A refined retreat with golden accents and premium amenities for
                a restful stay.
              </p>

              {/* Check Availability Link */}
              <Link
                href="/room-detail"
                className="inline-flex items-center gap-2 text-lg md:text-xl font-normal text-[#4B3621] hover:text-[#FF6E00] transition-colors duration-300 group"
              >
                <span>Check Availability</span>
                {/* Arrow Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* ============================================
              Right - Featured Content
          ============================================ */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            {/* Label */}
            <span className="font-display text-xl md:text-2xl italic font-semibold text-white mb-2">
              Favorite Room
            </span>

            {/* Title */}
            <h2 className="font-display text-2xl md:text-[28px] lg:text-[32px] italic font-semibold leading-tight lg:leading-[43px] text-white mb-4 md:mb-5">
              Our most booked and beloved room
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl font-normal leading-7 text-white mb-6 md:mb-8 max-w-[512px]">
              Indulge in our most sought-after suite, where timeless elegance
              meets modern comfort for an unforgettable stay.
            </p>

            {/* Book Now Button */}
            <button
              onClick={handleBookNow}
              className="group relative w-full max-w-[300px] h-[50px] mx-auto lg:mx-0 bg-white border border-[#FF6E00] rounded-xl overflow-hidden transition-all duration-300 cursor-pointer flex items-center justify-center font-display text-lg italic text-[#FF6E00]"
            >
              {/* Fill animation from bottom to top */}
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#FF6E00] group-hover:h-full transition-all duration-300 ease-out" />

              {/* Button Text */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Book Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteRoomSection;
