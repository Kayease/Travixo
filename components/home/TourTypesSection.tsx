"use client";
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
    icon: "windsurfing",
  },
  {
    id: 2,
    number: "2",
    title: "Paragliding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "paragliding",
  },
  {
    id: 3,
    number: "3",
    title: "Wildlife",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "wildlife",
  },
  {
    id: 4,
    number: "4",
    title: "Hang Gliding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "hanggliding",
  },
];

/**
 * Get icon component by type
 */
const getIcon = (iconType: string) => {
  switch (iconType) {
    case "windsurfing":
      return <WindsurfingIcon />;
    case "paragliding":
      return <ParaglidingIcon />;
    case "wildlife":
      return <WildlifeIcon />;
    case "hanggliding":
      return <HangGlidingIcon />;
    default:
      return <WindsurfingIcon />;
  }
};

/**
 * TourTypeCard Component
 */
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
  <div className="relative w-full max-w-[221px] group">
    {/* Number Badge */}
    <div className="absolute top-0 left-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-brand-orange rounded-full flex items-center justify-center z-10">
      <span className="font-body font-semibold text-3xl md:text-5xl text-white leading-none">
        {number}
      </span>
    </div>

    {/* Card */}
    <div className="relative bg-white border border-brand-orange rounded-tl-[100px] md:rounded-tl-[150px] pt-12 pb-6 px-4 mt-4 ml-4 overflow-hidden">
      {/* Orange fill animation from bottom to top */}
      <div className="absolute inset-0 bg-brand-orange h-0 group-hover:h-full transition-all duration-500 ease-out" style={{ top: 'auto', bottom: 0 }} />
      
      {/* Icon */}
      <div className="relative z-10 flex justify-center mb-4 group-hover:brightness-0 group-hover:invert transition-all duration-300">{getIcon(icon)}</div>

      {/* Title */}
      <h3 className="relative z-10 font-display italic font-semibold text-lg md:text-[22px] leading-[29px] text-brand-brown group-hover:text-white text-center mb-3 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 font-body font-normal text-sm md:text-base leading-6 text-brand-brown group-hover:text-white text-center max-w-[185px] mx-auto transition-colors duration-300">
        {description}
      </p>
    </div>

    {/* Bottom Border */}
    <div className="absolute bottom-0 left-4 right-0 h-[2px] bg-brand-orange" />
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
      className="relative w-full py-12 lg:py-16"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 lg:mb-16">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl mb-6"
            style={{ backgroundColor: "#FF6E00" }}
          >
            <PlaneIcon />
            <span className="font-display italic font-medium text-sm text-white">
              SERVICE
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display italic font-semibold text-2xl md:text-[28px] leading-tight md:leading-[37px] text-brand-brown text-center max-w-[338px]">
            Choose Our Tour Types & Enjoy Now
          </h2>
        </div>

        {/* Tour Type Cards */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-[75px]">
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

