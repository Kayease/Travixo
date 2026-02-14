"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Interface for room card data
 */
interface RoomData {
  id: string;
  name: string;
  image: string;
  size: string;
  occupancy: string;
  bed: string;
}

/**
 * RoomCard Component
 * Displays a room type with image and hover overlay showing details
 */
import { useCart, CartItem } from "@/app/context/CartContext";

// ... existing RoomData interface ...

import { useRouter } from "next/navigation";

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

/**
 * RoomCard Component
 * Displays a room type with image and hover overlay showing details
 */
const RoomCard: React.FC<{ room: RoomData; className?: string }> = ({ room, className }) => {
  const router = useRouter();
  const { addToCart, isInCart } = useCart();

  const handleCartAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isInCart(room.name)) {
      addToCart({
        id: `${room.id}-${Date.now()}`,
        type: "room",
        title: room.name,
        image: room.image,
        location: "Luxurious Hotel",
        dates: new Date().toISOString().split("T")[0],
        amenities: [room.size, room.occupancy, room.bed],
        price: 150,
        actionLabel: "Customize",
      });
    }
    router.push("/cart");
  };

  const handleBookNow = () => {
    // Add room to cart
    addToCart({
      id: `${room.id}-${Date.now()}`,
      type: "room",
      title: room.name,
      image: room.image,
      location: "Luxurious Hotel",
      dates: new Date().toISOString().split("T")[0],
      amenities: [room.size, room.occupancy, room.bed],
      price: 150,
      actionLabel: "Customize",
    });

    router.push("/checkout");
  };

  return (
    <div className={`relative w-full h-[400px] md:h-[480px] lg:h-[523px] rounded-xl overflow-hidden group cursor-pointer ${className || ""}`}>
      {/* Room Image */}
      <Image
        src={room.image}
        alt={room.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 xl:group-hover:scale-105"
      />

      {/* Cart Icon in top right - matches TourCard behavior */}
      <div className="absolute top-4 right-4 z-30 transition-all duration-500 xl:translate-x-12 xl:opacity-0 xl:group-hover:translate-x-0 xl:group-hover:opacity-100">
        <button
          onClick={handleCartAction}
          className="w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center text-[#4B3621] hover:bg-[#FF6E00] hover:text-white transition-colors cursor-pointer shadow-md"
        >
          <div className="scale-[0.6]">
            <CartIcon />
          </div>
        </button>
      </div>

      {/* Gradient to hide baked-in text on images */}
      <div className="absolute inset-x-0 bottom-0 h-[100px] bg-linear-to-t from-[#1a1a1a] to-transparent z-5" />

      {/* Hover Overlay - Fades in, always visible on mobile/tablet */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-[#9A4C04] via-[#9A4C04]/70 to-transparent opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-500 ease-out z-10" />

      {/* Room Name - Static on mobile/tablet, moves up on hover on desktop */}
      <h3 className="absolute left-5 md:left-8 bottom-[180px] md:bottom-[220px] xl:bottom-8 xl:group-hover:bottom-[220px] font-display text-xl md:text-[28px] italic font-semibold text-white z-30 transition-all duration-500 ease-out drop-shadow-lg">
        {room.name}
      </h3>

      {/* Content at Bottom - Details and Button static on mobile/tablet, slides in on desktop */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 z-20 flex flex-col justify-end translate-x-0 xl:-translate-x-full xl:group-hover:translate-x-0 transition-transform duration-500 ease-out">
        {/* Room Details */}
        <div className="space-y-1 mb-3 md:mb-4 opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-500 xl:delay-150">
          <p className="text-white text-xs md:text-base font-normal">
            Average size: {room.size}
          </p>
          <p className="text-white text-xs md:text-base font-normal">
            Occupancy: {room.occupancy}
          </p>
          <p className="text-white text-xs md:text-base font-normal">
            Bed: {room.bed}
          </p>
        </div>

        {/* Book Now Button with bottom-to-top fill animation */}
        <button
          onClick={handleBookNow}
          className="flex items-center justify-center relative w-[160px] md:w-[200px] h-[40px] md:h-[50px] bg-white rounded-lg font-display italic text-[14px] md:text-[18px] text-[#4B3621] transition-all duration-200 opacity-100 xl:opacity-0 xl:group-hover:opacity-100 xl:delay-200 overflow-hidden group/btn cursor-pointer"
        >
          {/* Fill animation from bottom to top */}
          <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange group-hover/btn:h-full transition-all duration-300 ease-out" />
          {/* Button text */}
          <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
            Book Now
          </span>
        </button>
      </div>
    </div>
  );
};

/**
 * SuiteSection Component
 *
 * Displays the "Our Suite" section with a featured image,
 * description, CTA button, and a grid of room type cards.
 * Showcases available accommodation options.
 */
const SuiteSection: React.FC = () => {
  // Room data for the cards
  const rooms: RoomData[] = [
    {
      id: "standard",
      name: "Standard Room",
      image: "/images/stay/cards/suite-1.png",
      size: "27 sqm/ 290 sqft",
      occupancy: "2 adults, 1 child",
      bed: "king or twin",
    },
    {
      id: "deluxe",
      name: "Deluxe Room",
      image: "/images/stay/cards/suite-2.png",
      size: "35 sqm/ 377 sqft",
      occupancy: "2 adults, 2 children",
      bed: "king or twin",
    },
    {
      id: "superior",
      name: "Superior Room",
      image: "/images/stay/cards/suite-3.png",
      size: "45 sqm/ 484 sqft",
      occupancy: "3 adults, 2 children",
      bed: "king size",
    },
  ];

  return (
    <section className="w-full bg-[#FFFCF5] py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-20">
        {/* ============================================
            Top Section - Title, Description & Featured Image
        ============================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left Content */}
          <div className="flex flex-col items-center justify-center text-center order-2 lg:order-1">
            {/* Section Title */}
            <h2 className="font-display text-2xl md:text-[28px] italic font-semibold leading-[37px] text-[#4B3621] mb-6">
              Our Suite
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg font-medium leading-[27px] text-[#4B3621] max-w-[607px] mb-8">
              Wake up to the gentle sound of waves crashing on the shore and
              step onto your private balcony to witness breathtaking sunrises
              and sunsets.
            </p>

            {/* CTA Button */}
            {/* CTA Button */}
            <Link
              href="/room"
              className="group relative flex items-center justify-center w-full max-w-[300px] h-[50px] bg-white border border-[#FF6E00] rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
            >
              {/* Fill animation from bottom to top */}
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#FF6E00] group-hover:h-full transition-all duration-300 ease-out" />

              {/* Button Text */}
              <span className="relative z-10 font-display text-lg italic text-[#FF6E00] group-hover:text-white transition-colors duration-300">
                Discover our suites
              </span>
            </Link>
          </div>

          {/* Right Featured Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[615px] rounded-xl overflow-hidden order-1 lg:order-2">
            <Image
              src="/images/stay/cards/banner.png"
              alt="Luxury hotel lobby with chandelier"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* ============================================
            Room Cards Grid
        ============================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {rooms.map((room, index) => (
            <RoomCard
              key={room.id}
              room={room}
              className={
                index === 2
                  ? "md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto lg:col-span-1 lg:w-full lg:mx-0"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuiteSection;
