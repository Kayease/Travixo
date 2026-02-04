"use client";

import React from "react";
import Image from "next/image";

/**
 * Interface for favorite room data
 */
interface FavoriteRoom {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

/**
 * FavoriteRoomCard Component
 * Displays a single room card with image, name, price, and description
 */
const FavoriteRoomCard: React.FC<{ room: FavoriteRoom }> = ({ room }) => {
  return (
    <div className="bg-[#FFFCF5] rounded-xl overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)] group">
      {/* Room Image */}
      <div className="relative w-full h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Room Details */}
      <div className="p-4 md:p-5">
        {/* Room Name */}
        <h3 className="font-display text-xl md:text-2xl italic font-semibold leading-8 text-[#4B3621] mb-2">
          {room.name}
        </h3>

        {/* Price */}
        <p className="font-display text-lg md:text-xl italic font-medium leading-[27px] text-[#4B3621] mb-3">
          {room.price}{" "}
          <span className="text-base font-normal not-italic">/Night</span>
        </p>

        {/* Description */}
        <p className="text-base md:text-lg font-normal leading-7 text-[#4B3621] mb-4 line-clamp-3">
          {room.description}
        </p>

        {/* Check Availability Link */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-lg md:text-xl font-normal text-[#4B3621] hover:text-[#FF6E00] transition-colors duration-300 group/link"
        >
          <span>Check Availability</span>
          {/* Arrow Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          >
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

/**
 * NewFavoriteSection Component
 *
 * Displays a section highlighting new favorite rooms with
 * a title, description, and 3-column grid of room cards.
 */
const NewFavoriteSection: React.FC = () => {
  // Favorite rooms data
  const favoriteRooms: FavoriteRoom[] = [
    {
      id: "serenity-suite",
      name: "Serenity Suite",
      price: "$45",
      image: "/images/room_detail/Frame 494.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: "sunlight-terrace",
      name: "Sunlight Terrace Villa",
      price: "$45",
      image: "/images/room_detail/Frame 497.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: "tropical-zen",
      name: "Tropical Zen Retreat",
      price: "$45",
      image: "/images/room_detail/Frame 498.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* ============================================
            Header - Title & Description
        ============================================ */}
        <div className="text-center mb-10 md:mb-12">
          {/* Section Title */}
          <h2 className="font-display text-2xl md:text-[28px] lg:text-[32px] italic font-semibold leading-7 text-[#4B3621] mb-4">
            The new favorite
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl font-normal leading-7 text-[#4B3621] max-w-[753px] mx-auto">
            Whether you&apos;re seeking calm, sunlight, or a touch of luxury,
            Lodr offers the perfect space to rest, recharge, and feel at home.
          </p>
        </div>

        {/* ============================================
            Room Cards Grid
        ============================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[18px]">
          {favoriteRooms.map((room) => (
            <FavoriteRoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewFavoriteSection;
