"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

/**
 * Interface for room card data
 */
interface RoomCardData {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

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
 * RoomCard Component
 * Displays a single room with image, name, price, description,
 * and check availability link
 */
const RoomCard: React.FC<{ room: RoomCardData }> = ({ room }) => {
  const router = useRouter();
  const { addToCart, isInCart, cartItems, removeFromCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isWishlisted = mounted && isInWishlist(room.id);
  const isInCartState = mounted && isInCart(room.name);

  const handleWishlistAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isWishlisted) {
      removeFromWishlist(room.id);
    } else {
      addToWishlist({
        id: room.id,
        slug: "/room-detail",
        title: room.name,
        description: room.description,
        image: room.image,
        price: parseInt(room.price.replace(/[^0-9]/g, "")) || 0,
        type: "room",
        rating: 5,
        reviewCount: 0,
        duration: "1 night",
        groupSize: "2 guests",
        location: "Resort",
      });
    }
  };

  const handleCartAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isInCartState) {
      addToCart({
        id: `${room.id}-${Date.now()}`,
        type: "room",
        title: room.name,
        image: room.image,
        location: "Luxury Resort",
        dates: new Date().toISOString().split("T")[0],
        amenities: ["Free Wifi", "Breakfast Included"],
        price: parseInt(room.price.replace(/[^0-9]/g, "")) || 0,
        actionLabel: "Customize",
      });
    } else {
      const itemToRemove = cartItems.find((item) => item.title === room.name);
      if (itemToRemove) {
        removeFromCart(itemToRemove.id);
      }
    }
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isInCartState) {
      addToCart({
        id: `${room.id}-${Date.now()}`,
        type: "room",
        title: room.name,
        image: room.image,
        location: "Luxury Resort",
        dates: new Date().toISOString().split("T")[0],
        amenities: ["Free Wifi", "Breakfast Included"],
        price: parseInt(room.price.replace(/[^0-9]/g, "")) || 0,
        actionLabel: "Customize",
      });
    }
    router.push("/cart");
  };

  return (
    <div className="bg-[#FFFCF5] rounded-xl overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)] group relative">
      {/* Room Image */}
      <div className="relative w-full h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Action Buttons - Slide in from right */}
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 transition-all duration-500 ease-out xl:translate-x-12 xl:opacity-0 xl:group-hover:translate-x-0 xl:group-hover:opacity-100 focus-within:translate-x-0 focus-within:opacity-100">
          {/* Wishlist Button */}
          <button
            onClick={handleWishlistAction}
            className={`group/icon w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${isWishlisted
              ? "bg-[#FF6E00]"
              : "bg-white hover:bg-[#FF6E00]"
              }`}
            aria-label="Add to wishlist"
          >
            <div
              className={`w-[24px] h-[24px] transition-colors duration-300 ${isWishlisted
                ? "bg-white"
                : "bg-[#4B3621] group-hover/icon:bg-white"
                }`}
              aria-label="Wishlist heart"
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
              ? "bg-[#FF6E00] text-white"
              : "bg-white text-[#4B3621] hover:bg-[#FF6E00] hover:text-white"
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

      {/* Room Details */}
      <div className="p-4 md:p-5">
        {/* Room Name */}
        <h3 className="font-display text-lg md:text-2xl italic font-semibold leading-7 md:leading-8 text-[#4B3621] mb-1 md:mb-2">
          {room.name}
        </h3>

        {/* Price */}
        <p className="font-display text-lg md:text-xl italic font-medium leading-[27px] text-[#4B3621] mb-2 md:mb-3">
          {room.price}{" "}
          <span className="text-sm md:text-base font-normal not-italic">/Night</span>
        </p>

        {/* Description */}
        <p className="text-sm md:text-lg font-normal leading-6 md:leading-7 text-[#4B3621] mb-3 md:mb-4 line-clamp-3">
          {room.description}
        </p>

        {/* Check Availability Link */}
        <button
          onClick={handleBookNow}
          className="inline-flex items-center gap-2 mt-2 md:mt-4 cursor-pointer hover:text-[#FF6E00] text-[#4B3621] transition-colors duration-300 group/availability"
        >
          <span className="font-poppins text-lg transition-colors duration-300">
            Book Now
          </span>
          {/* Arrow Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-transform duration-300 group-hover/availability:translate-x-1"
          >
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

/**
 * RoomGridSection Component
 *
 * Displays a 3x2 grid of room cards showcasing different
 * accommodation options with images, prices, and descriptions.
 */
const RoomGridSection: React.FC = () => {
  // Room data
  const rooms: RoomCardData[] = [
    {
      id: "serenity-suite",
      name: "Serenity Suite",
      price: "$45",
      image: "/images/room/cards/room-card-2.png",
      description:
        "A tranquil retreat featuring floor-to-ceiling windows, plush bedding, and a private balcony with garden views.",
    },
    {
      id: "sunlight-terrace",
      name: "Sunlight Terrace Villa",
      price: "$45",
      image: "/images/room/cards/room-card-3.png",
      description:
        "Bask in natural light with an open-plan layout, terrace dining area, and premium furnishings throughout.",
    },
    {
      id: "tropical-zen",
      name: "Tropical Zen Retreat",
      price: "$45",
      image: "/images/room/cards/room-card-1.png",
      description:
        "Inspired by nature, this retreat blends tropical greenery with minimalist design for ultimate relaxation.",
    },
    {
      id: "special",
      name: "Special",
      price: "$45",
      image: "/images/room/cards/hero-3.png",
      description:
        "Our signature room with golden accents, a rainfall shower, and curated amenities for an elevated stay.",
    },
    {
      id: "terrace-room",
      name: "Terrace Room",
      price: "$45",
      image: "/images/room/cards/hero-2.png",
      description:
        "Step onto your private terrace overlooking lush gardens, with a spacious interior and artisan décor.",
    },
    {
      id: "deluxe-room",
      name: "Deluxe Room",
      price: "$45",
      image: "/images/room/cards/gallery.png",
      description:
        "Generously appointed with king-size bedding, a soaking tub, and elegant touches for discerning travelers.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[75px]">
        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[18px]">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomGridSection;
