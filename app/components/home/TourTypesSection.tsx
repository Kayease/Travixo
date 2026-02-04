"use client";
import React from "react";

/**
 * Plane Icon for the badge
 */
const PlaneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 2.5L9.16667 10.8333M17.5 2.5L12.5 17.5L9.16667 10.8333M17.5 2.5L2.5 7.5L9.16667 10.8333"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Windsurfing Icon
 */
const WindsurfingIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 38C8 38 12 32 21 32C30 32 34 38 34 38M21 28C21 28 16 22 16 14C16 6 21 4 21 4C21 4 26 6 26 14C26 22 21 28 21 28ZM21 28V32"
      stroke="#FF6E00"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Paragliding Icon
 */
const ParaglidingIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 12C7 8 13 5 21 5C29 5 35 8 35 12M7 12C7 14 10 16 14 17M35 12C35 14 32 16 28 17M14 17L18 25M28 17L24 25M18 25H24M18 25L16 37M24 25L26 37M21 30C22 30 23 31 23 32C23 33 22 34 21 34C20 34 19 33 19 32C19 31 20 30 21 30Z"
      stroke="#FF6E00"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Wildlife/Deer Icon
 */
const WildlifeIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8L10 4M12 8L14 4M12 8V12M30 8L28 4M30 8L32 4M30 8V12M15 18C15 18 12 20 12 24C12 28 15 32 21 32C27 32 30 28 30 24C30 20 27 18 27 18M15 18C18 16 24 16 27 18M15 18L12 12H30L27 18M21 26V28M17 24H18M24 24H25M21 32V38M16 38L21 35L26 38"
      stroke="#FF6E00"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Hang Gliding Icon
 */
const HangGlidingIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 18L21 10L38 18M21 10V18M21 18L16 32M21 18L26 32M16 32H26M19 24C19 24 20 26 21 26C22 26 23 24 23 24"
      stroke="#FF6E00"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
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
  <div className="relative w-full max-w-[221px]">
    {/* Number Badge */}
    <div className="absolute top-0 left-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-brand-orange rounded-full flex items-center justify-center z-10">
      <span className="font-body font-semibold text-3xl md:text-5xl text-white leading-none">
        {number}
      </span>
    </div>

    {/* Card */}
    <div className="relative bg-white border border-brand-orange rounded-tl-[100px] md:rounded-tl-[150px] pt-12 pb-6 px-4 mt-4 ml-4">
      {/* Icon */}
      <div className="flex justify-center mb-4">{getIcon(icon)}</div>

      {/* Title */}
      <h3 className="font-display italic font-semibold text-lg md:text-[22px] leading-[29px] text-brand-brown text-center mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body font-normal text-sm md:text-base leading-6 text-brand-brown text-center max-w-[185px] mx-auto">
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
