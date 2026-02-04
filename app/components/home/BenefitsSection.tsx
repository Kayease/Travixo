"use client";
import React from "react";
import Image from "next/image";

/**
 * Plane Icon
 */
const PlaneIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 4L14.6667 17.3333M28 4L20 28L14.6667 17.3333M28 4L4 12L14.6667 17.3333"
      stroke="#FF6E00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Tent/Tree Icon
 */
const TentIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 8L10 4M10 4L12 8M10 4V12M4 28L16 12L28 28M4 28H28M12 28L16 20L20 28"
      stroke="#FF6E00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Sailboat Icon
 */
const SailboatIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 4V20M16 4L8 20M16 4L24 20M4 24C6 22 10 22 12 24C14 26 18 26 20 24C22 22 26 22 28 24M4 28H28"
      stroke="#FF6E00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Hot Air Balloon Icon
 */
const BalloonIcon = () => (
  <svg
    width="28"
    height="32"
    viewBox="0 0 28 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2C8 2 3 7 3 13C3 17 6 20 8 22L10 28H18L20 22C22 20 25 17 25 13C25 7 20 2 14 2ZM14 2V13M10 28V30C10 31 12 32 14 32C16 32 18 31 18 30V28"
      stroke="#FF6E00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Steps data
 */
const STEPS = [
  {
    id: 1,
    title: "Pick your destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: "plane",
  },
  {
    id: 2,
    title: "Decide the trip duration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: "tent",
  },
  {
    id: 3,
    title: "Booking tickets",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: "sailboat",
  },
  {
    id: 4,
    title: "Plan the action",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: "balloon",
  },
];

/**
 * Get icon component by type
 */
const getIcon = (iconType: string) => {
  switch (iconType) {
    case "plane":
      return <PlaneIcon />;
    case "tent":
      return <TentIcon />;
    case "sailboat":
      return <SailboatIcon />;
    case "balloon":
      return <BalloonIcon />;
    default:
      return <PlaneIcon />;
  }
};

/**
 * StepItem Component
 */
const StepItem = ({
  title,
  description,
  icon,
  isLast,
}: {
  title: string;
  description: string;
  icon: string;
  isLast: boolean;
}) => (
  <div className="relative flex gap-4 md:gap-6">
    {/* Icon and Connector Line */}
    <div className="flex flex-col items-center">
      {/* Icon Container */}
      <div className="w-[50px] h-[50px] rounded-full border border-brand-orange bg-white flex items-center justify-center shrink-0">
        {getIcon(icon)}
      </div>

      {/* Vertical Line */}
      {!isLast && (
        <div className="w-px h-[80px] md:h-[127px] bg-brand-orange/50 mt-2" />
      )}
    </div>

    {/* Content */}
    <div className="pt-1">
      <h3 className="font-display italic font-semibold text-lg md:text-[22px] leading-[29px] text-brand-brown mb-2">
        {title}
      </h3>
      <p className="font-body font-normal text-sm md:text-base leading-6 text-brand-brown max-w-[374px]">
        {description}
      </p>
    </div>
  </div>
);

/**
 * BenefitsSection Component
 * "Our Benefits / How to Plan a Trip" section
 * Background: #FFF7E5 (cream/beige)
 */
export const BenefitsSection = () => {
  return (
    <section
      className="relative w-full py-12 lg:py-16"
      style={{ backgroundColor: "#FFF7E5" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side - Title and Image */}
          <div className="flex-1">
            {/* Label */}
            <span className="font-body italic font-semibold text-lg md:text-[22px] leading-[33px] text-brand-brown block mb-4">
              OUR BENIFITS
            </span>

            {/* Title */}
            <h2 className="font-display italic font-semibold text-2xl md:text-[28px] leading-tight md:leading-[37px] text-brand-brown mb-4 max-w-[444px]">
              How to plan a trip in 4 simple steps
            </h2>

            {/* Description */}
            <p className="font-body font-normal text-base md:text-lg leading-[27px] text-brand-brown mb-8 max-w-[626px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>

            {/* Image */}
            <div className="relative w-full max-w-[573px] h-[300px] md:h-[400px] lg:h-[470px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop"
                alt="Travel planning with map and camera"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 573px"
              />
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="lg:w-[450px] shrink-0">
            <div className="flex flex-col gap-4">
              {STEPS.map((step, index) => (
                <StepItem
                  key={step.id}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  isLast={index === STEPS.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
