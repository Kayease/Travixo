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

/**
 * RoomCard Component
 * Displays a room type with image and hover overlay showing details
 */
const RoomCard: React.FC<{ room: RoomData }> = ({ room }) => {
  const { addToCart } = useCart();

  const handleBookNow = () => {
    const cartItem: CartItem = {
      id: `${room.id}-${Date.now()}`,
      type: "room", // Using 'room' type as per existing cart items logic
      title: room.name,
      image: room.image,
      location: "Hotel Suite", // Default location for rooms
      dates: new Date().toISOString().split("T")[0],
      amenities: [room.size, room.occupancy, room.bed],
      price: 250, // Hardcoded in previous Link: price=250. Should ideally come from room data.
      actionLabel: "Customize",
    };
    addToCart(cartItem);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[480px] lg:h-[523px] rounded-xl overflow-hidden group cursor-pointer">
      {/* Room Image */}
      <Image
        src={room.image}
        alt={room.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient to hide baked-in text on images */}
      <div className="absolute inset-x-0 bottom-0 h-[100px] bg-linear-to-t from-[#1a1a1a] to-transparent z-5" />

      {/* Hover Overlay - Fades in, only covers bottom portion */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-[#9A4C04] via-[#9A4C04]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10" />

      {/* Room Name - Always visible, moves up on hover */}
      <h3 className="absolute left-5 md:left-8 bottom-5 md:bottom-8 group-hover:bottom-[180px] md:group-hover:bottom-[220px] font-display text-xl md:text-[28px] italic font-semibold text-white z-30 transition-all duration-500 ease-out drop-shadow-lg">
        {room.name}
      </h3>

      {/* Content at Bottom - Details and Button slide in from left */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 z-20 flex flex-col justify-end -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
        {/* Room Details */}
        <div className="space-y-1 mb-3 md:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
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
          className="flex items-center justify-center relative w-[160px] md:w-[200px] h-[40px] md:h-[50px] bg-white rounded-lg font-display italic text-[14px] md:text-[18px] text-[#4B3621] transition-all duration-200 opacity-0 group-hover:opacity-100 delay-200 overflow-hidden group/btn cursor-pointer"
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuiteSection;
