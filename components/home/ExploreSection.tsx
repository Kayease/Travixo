"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { DatePicker, DateRange } from "@/components/ui/DatePicker";
import SelectInput from "@/components/ui/SelectInput";
import { useToast } from "@/app/context/ToastContext";

/**
 * Activity category data
 * Each category has an icon path, label, and active state styling
 * Icons are stored locally in /public/images/home/
 */
const ACTIVITY_CATEGORIES = [
  {
    id: "beach",
    label: "Beach Tour",
    iconPath: "/images/home/streamline_beach.png",
    imagePath: "/images/home/explore/cards/beach-tour.png",
    title: "Discover Pristine Beach Paradises!",
    description:
      "Escape to sun-kissed shores and crystal-clear waters. Our beach tours offer the perfect blend of relaxation and adventure along the world's most beautiful coastlines.",
  },
  {
    id: "safari",
    label: "Safari",
    iconPath: "/images/home/majesticons_car-line.png",
    imagePath: "/images/home/explore/cards/safari.png",
    title: "Experience Wildlife Safari Adventures!",
    description:
      "Venture into the wild and witness majestic animals in their natural habitat. Our safari tours promise unforgettable encounters with nature's most incredible creatures.",
  },
  {
    id: "hiking",
    label: "Hiking",
    iconPath: "/images/home/game-icons_hiking.png",
    imagePath: "/images/home/explore/cards/hiking.png",
    title: "Conquer Breathtaking Mountain Trails!",
    description:
      "Challenge yourself on scenic hiking trails through lush forests, dramatic peaks, and hidden valleys. Every step brings a new perspective on nature's grandeur.",
  },
  {
    id: "cycling",
    label: "Cycling",
    iconPath: "/images/home/game-icons_cycling.png",
    imagePath: "/images/home/explore/cards/cycling.png",
    title: "Explore Scenic Cycling Routes!",
    description:
      "Pedal through picturesque landscapes and charming villages. Our cycling tours combine fitness with exploration for an eco-friendly adventure.",
  },
  {
    id: "surfing",
    label: "Surfing",
    iconPath: "/images/home/material-symbols-light_surfing-sharp.png",
    imagePath: "/images/home/explore/cards/surfing.png",
    title: "Ride the Perfect Waves!",
    description:
      "Catch the ultimate surf at world-renowned beaches. From beginner-friendly breaks to challenging barrels, find your perfect wave with our surfing adventures.",
  },
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
      className={`relative w-[46px] h-[46px] transition-all duration-300 ${isActive
        ? "filter-none"
        : "brightness-[0.4] lg:group-hover:filter-none lg:group-hover:brightness-100"
        }`}
    >
      <Image
        src={iconPath}
        alt={alt}
        fill
        className={`object-contain ${isActive
          ? "filter-[invert(45%)_sepia(98%)_saturate(1500%)_hue-rotate(360deg)_brightness(100%)]"
          : "lg:group-hover:filter-[invert(45%)_sepia(98%)_saturate(1500%)_hue-rotate(360deg)_brightness(100%)]"
          }`}
        sizes="46px"
      />
    </div>
  );
};

// Example values for dropdowns
const DESTINATIONS = ["Bangkok", "Paris", "New York", "Tokyo", "Sydney"];
const TRAVEL_TYPES = ["Adventure", "Leisure", "Family", "Romantic", "Cultural"];
const DURATIONS = ["1-3 Days", "4-7 Days", "8-14 Days", "15+ Days"];

/**
 * ExploreSection Component
 * "Explore The World" section with activity categories, trip planning form, and featured image
 * Background: #FFFCF5 (cream)
 */

export const ExploreSection = () => {
  const [activeCategory, setActiveCategory] = useState("beach");
  const [destination, setDestination] = useState("");
  const [travelType, setTravelType] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState<string | DateRange>("");
  const router = useRouter();
  const { showToast } = useToast();

  // Get current active category data
  const currentCategory =
    ACTIVITY_CATEGORIES.find((c) => c.id === activeCategory) ||
    ACTIVITY_CATEGORIES[0];

  const handleSearch = () => {
    if (!destination || !date || !travelType || !duration) {
      showToast("Please fill in all fields to search", "error");
      return;
    }

    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);

    if (date) {
      if (typeof date === "string") {
        params.set("date", date);
      } else {
        // It's a DateRange object
        const fromDate = date.from ? new Date(date.from) : null;
        const toDate = date.to ? new Date(date.to) : null;

        if (fromDate) {
          const fromStr = fromDate.toLocaleDateString("en-CA");
          const toStr = toDate ? toDate.toLocaleDateString("en-CA") : "";
          params.set("date", toStr ? `${fromStr} - ${toStr}` : fromStr);
        }
      }
    }

    if (travelType) params.set("travelType", travelType);
    if (duration) params.set("duration", duration);
    const query = params.toString();
    router.push(query ? `/paris?${query}` : "/paris");
  };

  return (
    <section
      className="relative w-full py-12 bg-[#FFFCF5]"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-6 xl:px-8">
        {/* Section Title */}
        <h2 className="font-display italic font-semibold text-[22px] md:text-[28px] leading-[37px] text-center text-brand-brown mb-8">
          Explore The World
        </h2>

        {/* Activity Category Cards - smooth tab change animation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-16">
          {ACTIVITY_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  w-[140px] md:w-[224px] h-[90px] md:h-[122px] rounded-xl flex flex-col items-center justify-center gap-1 md:gap-2
                  border-b-2 transition-all duration-300 ease-out cursor-pointer group outline-none
                  ${isActive
                    ? "bg-[#FFF7E5] border-brand-orange shadow-[0px_0px_4px_rgba(255,110,0,0.1)] scale-[1.02]"
                    : "bg-[#FFF7E5] border-transparent lg:hover:border-brand-orange lg:hover:shadow-[0px_0px_4px_rgba(255,110,0,0.1)] lg:hover:scale-[1.02]"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`transition-all duration-300 ease-out ${isActive ? "drop-shadow-[0px_0px_4px_rgba(0,0,0,0.1)]" : ""}`}
                >
                  <ActivityIcon
                    iconPath={category.iconPath}
                    isActive={isActive}
                    alt={category.label}
                  />
                </div>

                {/* Label */}
                <span
                  className={`
                    font-display italic font-semibold text-lg text-center transition-colors duration-300 ease-out
                    ${isActive
                      ? "text-brand-orange drop-shadow-[0px_0px_4px_rgba(0,0,0,0.1)]"
                      : "text-brand-brown lg:group-hover:text-brand-orange lg:group-hover:drop-shadow-[0px_0px_4px_rgba(0,0,0,0.1)]"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Left Content - Form */}
          <div className="flex flex-col gap-6">
            {/* Title - smooth change animation */}
            <h3
              key={`title-${activeCategory}`}
              className="font-display italic font-semibold text-[28px] leading-[38px] text-brand-brown animate-explore-fade-in"
            >
              {currentCategory.title}
            </h3>

            {/* Description - smooth change animation */}
            <p
              key={`desc-${activeCategory}`}
              className="font-body font-medium text-lg leading-[30px] text-brand-brown max-w-[553px] animate-explore-fade-in"
              style={{ animationDelay: "0.06s" }}
            >
              {currentCategory.description}
            </p>

            {/* Form Inputs - overflow-visible so date picker dropdown is not clipped */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 overflow-visible">
              <SelectInput
                label="Destination"
                name="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                options={DESTINATIONS}
              />
              <div className="overflow-visible">
                <DatePicker
                  value={date}
                  onChange={setDate}
                  placeholder="Select Date"
                  mode="range"
                />
              </div>
              <SelectInput
                label="Travel Type"
                name="travelType"
                value={travelType}
                onChange={(e) => setTravelType(e.target.value)}
                options={TRAVEL_TYPES}
              />
              <SelectInput
                label="Tour Duration"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                options={DURATIONS}
              />
            </div>

            {/* Search Button with bottom-to-top fill animation */}
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={handleSearch}
                className="relative w-full sm:w-[384px] h-[50px] bg-brand-orange border border-brand-orange rounded-xl 
                           flex items-center justify-center overflow-hidden shadow-[0px_0px_4px_rgba(0,0,0,0.1)] outline-none
                           lg:hover:shadow-lg lg:hover:border-[#FF6E00] transition-all duration-300 group/btn cursor-pointer"
              >
                {/* Bottom-to-top fill animation overlay */}
                <span className="absolute bottom-0 left-0 right-0 h-0 bg-white lg:group-hover/btn:h-full transition-all duration-300 ease-out" />
                {/* Button text - centered */}
                <span className="relative z-10 font-display italic font-medium text-xl text-white lg:group-hover/btn:text-[#FF6E00] transition-colors duration-300">
                  Search Now
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Featured Image with smooth transition */}
          <div className="relative w-full h-[300px] md:h-[556px] rounded-xl overflow-hidden">
            <div
              key={currentCategory.imagePath}
              className="relative w-full h-full animate-explore-image-in"
            >
              <Image
                src={currentCategory.imagePath}
                alt={`${currentCategory.label} experience`}
                fill
                className="object-cover transition-transform duration-700 lg:hover:scale-105"
                sizes="(max-width: 768px) 100vw, 630px"
              />
              {/* Subtle gradient overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-linear-to-t from-brand-brown/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
