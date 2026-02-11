"use client";
import React from "react";
import Image from "next/image";

/**
 * Plane Icon
 */
const PlaneIcon = () => (
  <Image
    src="/images/home/benefits/simple-line-icons_plane (1).png"
    alt="Plane Icon"
    width={30}
    height={30}
    style={{ width: "auto", height: "auto" }}
  />
);

/**
 * Tent/Tree Icon
 */
const TentIcon = () => (
  <Image
    src="/images/home/benefits/lucide_tent-tree (1).png"
    alt="Tent Icon"
    width={30}
    height={30}
    style={{ width: "auto", height: "auto" }}
  />
);

/**
 * Sailboat Icon
 */
const SailboatIcon = () => (
  <Image
    src="/images/home/benefits/ph_sailboat-light.png"
    alt="Sailboat Icon"
    width={30}
    height={30}
    style={{ width: "auto", height: "auto" }}
  />
);

/**
 * Hot Air Balloon Icon
 */
const BalloonIcon = () => (
  <Image
    src="/images/home/benefits/et_hotairballoon (1).png"
    alt="Balloon Icon"
    width={30}
    height={30}
    style={{ width: "auto", height: "auto" }}
  />
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
      <div className="w-[50px] h-[50px] flex items-center justify-center shrink-0 rounded-full border border-brand-orange bg-white z-10 transition-colors duration-300 ease-in-out hover:bg-brand-orange cursor-pointer group/icon shadow-sm">
        <div className="transition-all duration-300 group-hover/icon:brightness-0 group-hover/icon:invert">
          {getIcon(icon)}
        </div>
      </div>

      {/* Vertical Line */}
      {!isLast && (
        <div className="w-px h-full bg-brand-orange/50 absolute left-[25px] top-[50px] bottom-0 -z-0" />
      )}
    </div>

    {/* Content */}
    <div className="pt-2 pb-12">
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
      style={{
        backgroundColor: "#FFF7E5",
        backgroundImage: "url('/images/home/Frame480.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side - Title and Image */}
          <div className="flex-1">
            {/* Label */}
            <span className="font-body italic font-semibold text-lg md:text-[22px] leading-[33px] text-brand-brown block mb-4">
              OUR BENEFITS
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
                src="/images/home/benefits/frame-483.png"
                alt="Travel planning with map and camera"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 573px"
              />
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="lg:w-[450px] shrink-0">
            <div className="flex flex-col">
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

