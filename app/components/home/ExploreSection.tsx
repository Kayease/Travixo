"use client";
import React, { useState } from "react";
import Image from "next/image";

/**
 * Activity category data
 * Each category has an icon, label, and active state styling
 */
const ACTIVITY_CATEGORIES = [
  { id: "beach", label: "Beach Tour", icon: "beach" },
  { id: "safari", label: "Safari", icon: "car" },
  { id: "hiking", label: "Hiking", icon: "hiking" },
  { id: "cycling", label: "Cycling", icon: "cycling" },
  { id: "surfing", label: "Surfing", icon: "surfing" },
];

/**
 * SVG Icons for each activity category
 */
const ActivityIcon = ({
  type,
  isActive,
}: {
  type: string;
  isActive: boolean;
}) => {
  const color = isActive ? "#FF6E00" : "#4B3621";

  const icons: Record<string, React.ReactNode> = {
    beach: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38 38H8M23 8V38M23 8C23 8 28 12 33 14C38 16 38 8 38 8M23 8C23 8 18 12 13 14C8 16 8 8 8 8M23 20C26 22 30 23 33 22M23 20C20 22 16 23 13 22"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    car: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 23L12 13C12.3 12.3 12.8 11.7 13.4 11.3C14 10.9 14.7 10.7 15.5 10.7H30.5C31.3 10.7 32 10.9 32.6 11.3C33.2 11.7 33.7 12.3 34 13L38 23M8 23H38M8 23V35M38 23V35M8 35V36C8 36.8 8.3 37.5 8.9 38.1C9.5 38.7 10.2 39 11 39C11.8 39 12.5 38.7 13.1 38.1C13.7 37.5 14 36.8 14 36V35M8 35H14M38 35V36C38 36.8 37.7 37.5 37.1 38.1C36.5 38.7 35.8 39 35 39C34.2 39 33.5 38.7 32.9 38.1C32.3 37.5 32 36.8 32 36V35M38 35H32M32 35H14"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    hiking: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="28" cy="8" r="4" fill={color} />
        <path
          d="M20 42L24 30L30 34V42M24 30L20 20L28 16L34 22L30 34M28 16V12"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    cycling: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="32" r="7" stroke={color} strokeWidth="2.5" />
        <circle cx="35" cy="32" r="7" stroke={color} strokeWidth="2.5" />
        <path
          d="M11 32L19 14H27M35 32L27 14M27 14L31 8"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="31" cy="8" r="3" fill={color} />
      </svg>
    ),
    surfing: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="30" cy="8" r="4" fill={color} />
        <path
          d="M8 42C12 38 18 36 24 38C30 40 36 38 40 34M22 32L18 22L26 18L32 28L28 32M26 18L28 12"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return icons[type] || null;
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
                  <ActivityIcon type={category.icon} isActive={isActive} />
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

            {/* Search Button */}
            <div className="mt-4">
              <button
                className="w-[384px] h-[50px] bg-white border border-brand-orange rounded-xl 
                           flex items-center overflow-hidden shadow-[0px_0px_4px_rgba(0,0,0,0.1)]
                           hover:shadow-lg transition-shadow"
              >
                {/* Left side - empty white space */}
                <div className="flex-1" />

                {/* Right side - orange button */}
                <div className="w-[192px] h-full bg-brand-orange flex items-center justify-center">
                  <span className="font-display italic font-medium text-xl text-white">
                    Search Now
                  </span>
                </div>
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
