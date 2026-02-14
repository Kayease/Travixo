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
 * Tour types data
 */
const TOUR_TYPES = [
  {
    id: 1,
    number: "1",
    title: "Windsurfing",
    description: "Ride the waves windsurfing adventures at top coastal spots.",
    icon: "/images/home/tourtypes/temaki_wind-surfing.png",
  },
  {
    id: 2,
    number: "2",
    title: "Paragliding",
    description: "Breathtaking landscapes paragliding experiences.",
    icon: "/images/home/tourtypes/material-symbols-light_paragliding-outline.png",
  },
  {
    id: 3,
    number: "3",
    title: "Wildlife",
    description:
      "Explore stunning wildlife safaris and encounter nature up close.",
    icon: "/images/home/tourtypes/game-icons_deer.png",
  },
  {
    id: 4,
    number: "4",
    title: "Hang Gliding",
    description:
      "Experience the thrill of hang gliding over scenic mountain valleys.",
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
  <div
    className="relative w-[221px] h-[245px] group cursor-pointer shrink-0 outline-none"
    tabIndex={0}
  >
    {/* Main Card */}
    <div className="absolute inset-0 bg-white border border-[#FF6E00] rounded-[150px_0px_0px_0px] overflow-hidden">
      {/* 1. Orange BG + white icon — slides up from bottom on hover */}
      <div className="absolute inset-0 bg-brand-orange translate-y-full lg:group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 ease-out">
        {/* White Icon — rides up with the orange */}
        <div
          className="absolute left-[calc(50%-42px/2+0.5px)] top-[36px] w-[42px] h-[42px] bg-white"
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
      </div>

      {/* 2. Static content — icon, title, description stay in place */}
      <div className="relative w-full h-full z-10 pointer-events-none">
        {/* Orange icon (hidden on hover since white one takes over) */}
        <div
          className="absolute left-[calc(50%-42px/2+0.5px)] top-[36px] w-[42px] h-[42px] bg-[#FF6E00] lg:group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-500 ease-out"
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

        {/* Title — stays in place, color changes */}
        <h3 className="absolute left-[calc(50%-190px/2)] top-[96px] w-[190px] font-display italic font-semibold text-[22px] leading-[29px] text-[#4B3621] lg:group-hover:text-white group-focus:text-white text-center whitespace-nowrap transition-colors duration-500 ease-out">
          {title}
        </h3>

        {/* Description — stays in place, color changes */}
        <p className="absolute left-[calc(50%-185px/2)] top-[137px] w-[185px] font-body font-normal text-[14px] leading-[24px] text-[#4B3621] lg:group-hover:text-white group-focus:text-white text-center transition-colors duration-500 ease-out">
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
    <section className="relative w-full py-16 lg:py-24 bg-[#FFFCF5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 lg:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl mb-6 shadow-sm bg-[#FF6E00]">
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
