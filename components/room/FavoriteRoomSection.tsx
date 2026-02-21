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

const FavoriteRoomSection: React.FC = () => {
  const router = useRouter();
  const { addToCart, isInCart, cartItems, removeFromCart } = useCart();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isInCartState = mounted && isInCart("Special Room");

  const handleCartAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isInCartState) {
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
    } else {
      const itemToRemove = cartItems.find((item) => item.title === "Special Room");
      if (itemToRemove) {
        removeFromCart(itemToRemove.id);
      }
    }
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isInCartState) {
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
      <div className="relative w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-8 md:py-16 lg:py-20 my-8 md:my-16 lg:my-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16">
          {/* ============================================
              Left - Room Card
          ============================================ */}
          <Link
            href="/room-detail"
            className="block w-full max-w-[418px] bg-[#FFFCF5] rounded-xl overflow-hidden shrink-0 outline-none focus-within:z-50 pb-0 transition-transform duration-300 hover:shadow-xl cursor-pointer"
          >
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
              <div className="absolute top-4 right-4 z-30 transition-all duration-500 xl:translate-x-12 xl:opacity-0 xl:group-hover/card:translate-x-0 xl:group-hover/card:opacity-100 group-focus/card:translate-x-0 group-focus/card:opacity-100 group-active/card:translate-x-0 group-active/card:opacity-100">
                <button
                  onClick={handleCartAction}
                  className={`group/icon w-[35px] h-[35px] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer shadow-md outline-none ${isInCartState
                    ? "bg-[#FF6E00] text-white"
                    : "bg-white text-[#4B3621] hover:bg-[#FF6E00] hover:text-white"
                    }`}
                  aria-label={isInCartState ? "Remove from cart" : "Add to cart"}
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

            </div>
          </Link>

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
