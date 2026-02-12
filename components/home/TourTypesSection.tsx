import React from "react";
import Image from "next/image";

/**
 * Plane Icon for the badge
 */
const PlaneIcon = () => (
  <Image
    src="/images/home/tourtypes/mynaui_plane-1.png"
    alt="Plane Icon"
    width={20}
    height={20}
  />
);

/**
 * Windsurfing Icon
 */
const WindsurfingIcon = () => (
  <Image
    src="/images/home/tourtypes/temaki_wind-surfing.png"
    alt="Windsurfing"
    width={42}
    height={42}
  />
);

/**
 * Paragliding Icon
 */
const ParaglidingIcon = () => (
  <Image
    src="/images/home/tourtypes/material-symbols-light_paragliding-outline.png"
    alt="Paragliding"
    width={42}
    height={42}
  />
);

/**
 * Wildlife/Deer Icon
 */
const WildlifeIcon = () => (
  <Image
    src="/images/home/tourtypes/game-icons_deer.png"
    alt="Wildlife"
    width={42}
    height={42}
  />
);

/**
 * Hang Gliding Icon
 */
const HangGlidingIcon = () => (
  <Image
    src="/images/home/tourtypes/temaki_hang-gliding.png"
    alt="Hang Gliding"
    width={42}
    height={42}
  />
);

/**
 * Tour types data
 */
const TOUR_TYPES = [
  {
    id: 1,
    number: "1",
    title: "Windsurfing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/home/tourtypes/temaki_wind-surfing.png",
  },
  {
    id: 2,
    number: "2",
    title: "Paragliding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/home/tourtypes/material-symbols-light_paragliding-outline.png",
  },
  {
    id: 3,
    number: "3",
    title: "Wildlife",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/home/tourtypes/game-icons_deer.png",
  },
  {
    id: 4,
    number: "4",
    title: "Hang Gliding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/home/tourtypes/temaki_hang-gliding.png",
  },
];

const TourTypeCard = ({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: string;
}) => (
  <div className="relative w-[221px] h-[245px] group cursor-pointer shrink-0">
    {/* Main Card */}
    <div className="absolute inset-0 bg-white border border-[#FF6E00] rounded-[150px_0px_0px_0px] overflow-hidden">
      {/* 1. Base Layer (Figma CSS Specs) */}
      <div className="relative w-full h-full">
        {/* Icon (top: 36px) */}
        <div
          className="absolute left-[calc(50%-42px/2+0.5px)] top-[36px] w-[42px] h-[42px] bg-[#FF6E00]"
          style={{
            maskImage: `url(${icon})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: `url(${icon})`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
        />

        {/* Title (top: 96px) */}
        <h3
          className="absolute left-[calc(50%-190px/2)] top-[96px] w-[190px] font-display italic font-semibold text-[22px] leading-[29px] text-[#4B3621] text-center whitespace-nowrap"
        >
          {title}
        </h3>

        {/* Description (top: 137px) */}
        <p
          className="absolute left-[calc(50%-185px/2)] top-[137px] w-[185px] font-body font-normal text-[16px] leading-[24px] text-[#4B3621] text-center"
        >
          {description}
        </p>
      </div>

      {/* 2. Hover Layer (Orange BG + White Text + Motion) */}
      <div className="absolute inset-0 bg-brand-orange z-10 flex flex-col items-center transition-all duration-700 [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)]">
        {/* Animated White Icon */}
        <div
          className="absolute left-[calc(50%-42px/2+0.5px)] top-[36px] w-[42px] h-[42px] bg-white translate-y-[50px] group-hover:translate-y-0 transition-transform duration-700 ease-out"
          style={{
            maskImage: `url(${icon})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: `url(${icon})`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
        />

        {/* Title */}
        <h3 className="absolute left-[calc(50%-190px/2)] top-[96px] w-[190px] font-display italic font-semibold text-[22px] leading-[29px] text-white text-center whitespace-nowrap translate-y-[50px] group-hover:translate-y-0 transition-transform duration-700 ease-out delay-75">
          {title}
        </h3>

        {/* Description */}
        <p className="absolute left-[calc(50%-185px/2)] top-[137px] w-[185px] font-body font-normal text-[16px] leading-[24px] text-white text-center translate-y-[50px] group-hover:translate-y-0 transition-transform duration-700 ease-out delay-100">
          {description}
        </p>
      </div>
    </div>

    {/* Number Badge - Positioned to overlap the curved top-left corner */}
    <div className="absolute top-2 left-2 w-[70px] h-[70px] bg-brand-orange rounded-full flex items-center justify-center z-20 shadow-md select-none">
      <span className="font-body font-semibold text-4xl text-white leading-none">
        {number}
      </span>
    </div>

    {/* Bottom Border (Frame 42: top 243px) */}
    <div className="absolute left-0 top-[243px] w-[221px] h-[2px] bg-[#FF6E00] z-20" />
  </div>
);

/**
 * TourTypesSection Component
 * "Choose Our Tour Types & Enjoy Now" section
 * Background: #FFFCF5 (cream)
 */
export const TourTypesSection = () => {
  return (
    <section
      className="relative w-full py-16 lg:py-24"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 lg:mb-20">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl mb-6 shadow-sm"
            style={{ backgroundColor: "#FF6E00" }}
          >
            <PlaneIcon />
            <span className="font-display italic font-medium text-sm text-white uppercase tracking-wider">
              Service
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display italic font-semibold text-2xl md:text-[32px] leading-tight md:leading-[42px] text-brand-brown text-center max-w-xl">
            Choose Our Tour Types & Enjoy Now
          </h2>
        </div>

        {/* Tour Type Cards */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-[80px]">
          {TOUR_TYPES.map((tour) => (
            <TourTypeCard
              key={tour.id}
              number={tour.number}
              title={tour.title}
              description={tour.description}
              icon={tour.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
