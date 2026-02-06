"use client";
import React, { useState } from "react";
import Image from "next/image";

/**
 * Activity category data
 * Each category has an icon path, label, and active state styling
 * Icons are stored locally in /public/images/home/
 */
const ACTIVITY_CATEGORIES = [
  { id: "beach", label: "Beach Tour", iconPath: "/images/home/streamline_beach.png" },
  { id: "safari", label: "Safari", iconPath: "/images/home/majesticons_car-line.png" },
  { id: "hiking", label: "Hiking", iconPath: "/images/home/game-icons_hiking.png" },
  { id: "cycling", label: "Cycling", iconPath: "/images/home/game-icons_cycling.png" },
  { id: "surfing", label: "Surfing", iconPath: "/images/home/material-symbols-light_surfing-sharp.png" },
];

/**
 * Activity Icon Component
 * Renders local PNG icons with optional active state styling
 */
const ActivityIcon = ({
  iconPath,
  isActive,
  alt,
}: {
  iconPath: string;
  isActive: boolean;
  alt: string;
}) => {
  return (
    <div 
      className="relative w-[46px] h-[46px] transition-all duration-300"
      style={{
        filter: isActive ? "none" : "grayscale(0) brightness(0.4)"
      }}
    >
      <Image
        src={iconPath}
        alt={alt}
        fill
        className="object-contain"
        style={{
          filter: isActive 
            ? "invert(45%) sepia(98%) saturate(1500%) hue-rotate(360deg) brightness(100%)" 
            : "none"
        }}
      />
    </div>
  );
};

/**
 * Dropdown Select Component
 */
const SelectInput = ({
  label,
  icon,
}: {
  label: string;
  icon?: "dropdown" | "calendar";
}) => (
  <div className="relative w-full h-[50px] bg-white border border-brand-brown/20 rounded-xl flex items-center px-4 cursor-pointer hover:border-brand-brown/40 transition-colors">
    <span className="text-brand-brown font-medium text-lg font-body">
      {label}
    </span>
    <div className="absolute right-4">
      {icon === "calendar" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="18"
            rx="2"
            stroke="#4B3621"
            strokeWidth="2"
          />
          <path
            d="M3 10H21M8 2V6M16 2V6"
            stroke="#4B3621"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#4B3621"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  </div>
);

/**
 * ExploreSection Component
 * "Explore The World" section with activity categories, trip planning form, and featured image
 * Background: #FFFCF5 (cream)
 */
export const ExploreSection = () => {
  const [activeCategory, setActiveCategory] = useState("beach");

  return (
    <section
      className="relative w-full py-12 overflow-hidden"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <h2 className="font-display italic font-semibold text-[28px] leading-[37px] text-center text-brand-brown mb-8">
          Explore The World
        </h2>

        {/* Activity Category Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {ACTIVITY_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  w-[224px] h-[122px] rounded-xl flex flex-col items-center justify-center gap-2
                  transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "bg-[#FFF7E5] border-b-2 border-brand-orange shadow-[0px_0px_4px_rgba(255,110,0,0.1)]"
                      : "bg-[#FFF7E5] hover:shadow-md"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`${isActive ? "drop-shadow-[0px_0px_4px_rgba(0,0,0,0.1)]" : ""}`}
                >
                  <ActivityIcon iconPath={category.iconPath} isActive={isActive} alt={category.label} />
                </div>

                {/* Label */}
                <span
                  className={`
                    font-display italic font-semibold text-lg text-center
                    ${
                      isActive
                        ? "text-brand-orange drop-shadow-[0px_0px_4px_rgba(0,0,0,0.1)]"
                        : "text-brand-brown"
                    }
                  `}
                >
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Form */}
          <div className="flex flex-col gap-6">
            {/* Title */}
            <h3 className="font-display italic font-semibold text-[28px] leading-[28px] text-brand-brown">
              Start Planning Your Dream Trip Today!
            </h3>

            {/* Description */}
            <p className="font-body font-medium text-lg leading-[30px] text-brand-brown max-w-[553px]">
              A Curated odyssey through the world&apos;s most breathtaking
              sanctuaries, documented with precision and a refined lens.
            </p>

            {/* Form Inputs */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <SelectInput label="Destination" icon="dropdown" />
              <SelectInput label="dd/mm/yyyy" icon="calendar" />
              <SelectInput label="Travel Type" icon="dropdown" />
              <SelectInput label="Tour Duration" icon="dropdown" />
            </div>

            {/* Search Button with bottom-to-top fill animation */}
            <div className="mt-6 flex justify-center">
              <button
                className="relative w-[384px] h-[50px] bg-brand-orange border border-brand-orange rounded-xl 
                           flex items-center justify-center overflow-hidden shadow-[0px_0px_4px_rgba(0,0,0,0.1)]
                           hover:shadow-lg transition-shadow group"
              >
                {/* Bottom-to-top fill animation overlay */}
                <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
                {/* Button text - centered */}
                <span className="relative z-10 font-display italic font-medium text-xl text-white group-hover:text-brand-orange transition-colors duration-300">
                  Search Now
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Featured Image */}
          <div className="relative w-full h-[556px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop"
              alt="Travelers exploring destinations"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 630px"
            />
            {/* Subtle gradient overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
