"use client";

import React from "react";
import Image from "next/image";

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
 * RoomCard Component
 * Displays a single room with image, name, price, description,
 * and check availability link
 */
const RoomCard: React.FC<{ room: RoomCardData }> = ({ room }) => {
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
        {/* Check Availability Button */}
        <button className="group/btn relative w-full h-[45px] mt-2 bg-white border border-[#FF6E00] rounded-[12px] overflow-hidden transition-all duration-300">
          {/* Fill animation from bottom to top */}
          <span className="absolute bottom-0 left-0 right-0 h-0 bg-[#FF6E00] group-hover/btn:h-full transition-all duration-300 ease-out" />

          <div className="relative z-10 flex items-center justify-center gap-2">
            <span className="font-display text-lg italic text-[#FF6E00] group-hover/btn:text-white transition-colors duration-300">
              Check Availability
            </span>
            {/* Arrow Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#FF6E00] group-hover/btn:text-white transition-colors duration-300 group-hover/btn:translate-x-1"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
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
      image: "/images/room/Frame 494 (1).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: "sunlight-terrace",
      name: "Sunlight Terrace Villa",
      price: "$45",
      image: "/images/room/Frame 494 (2).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: "tropical-zen",
      name: "Tropical Zen Retreat",
      price: "$45",
      image: "/images/room/Frame 494.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: "special",
      name: "Special",
      price: "$45",
      image: "/images/room/Frame 492.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: "terrace-room",
      name: "Terrace Room",
      price: "$45",
      image: "/images/room/Frame 491.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: "deluxe-room",
      name: "Deluxe Room",
      price: "$45",
      image: "/images/room/Frame 404.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
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
