"use client";
import React from "react";
import Image from "next/image";

/**
 * Plane Icon for the badge
 */
const PlaneIcon = () => (
  <Image
    src="/images/home/about/mynaui_plane.png"
    alt="Plane Icon"
    width={20}
    height={20}
  />
);

/**
 * Travel Guide Icon
 */
const TravelIcon = () => (
  <Image
    src="/images/home/about/component-29.png"
    alt="Travel Guide Icon"
    width={32}
    height={32}
  />
);

/**
 * Luggage/Safety Icon
 */
const LuggageIcon = () => (
  <Image
    src="/images/home/about/component-30.png"
    alt="Luggage Icon"
    width={32}
    height={32}
  />
);

/**
 * Checkmark Icon
 */
const CheckIcon = () => (
  <Image
    src="/images/home/about/mask-group.png"
    alt="Checkmark Icon"
    width={28}
    height={28}
    style={{ width: "auto", height: "auto" }}
  />
);

/**
 * Feature data
 */
const FEATURES = [
  {
    id: "friendly-guide",
    title: "Friendly Guide",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    icon: "travel",
  },
  {
    id: "safety-travel",
    title: "Safety Travel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    icon: "luggage",
  },
];

/**
 * Checklist items
 */
const CHECKLIST = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
];

/**
 * FeatureCard Component
 */
const FeatureCard = ({
  title,
  description,
  icon,
  hasBorder,
}: {
  title: string;
  description: string;
  icon: string;
  hasBorder: boolean;
}) => (
  <div
    className={`flex-1 p-4 ${hasBorder ? "border-r border-b border-black/20" : "border-b border-black/20"}`}
  >
    <div className="flex items-start gap-4">
      {/* Icon */}
      <div className="w-[50px] h-[50px] flex items-center justify-center shrink-0">
        {icon === "travel" ? <TravelIcon /> : <LuggageIcon />}
      </div>

      {/* Content */}
      <div>
        <h4 className="font-display italic font-normal text-xl leading-[27px] text-brand-brown">
          {title}
        </h4>
        <p className="font-body font-normal text-base leading-6 text-brand-brown mt-2 max-w-[272px]">
          {description}
        </p>
      </div>
    </div>
  </div>
);

/**
 * AboutSection Component
 * "Get To Know Us" section with images and company info
 * Background: #FFFCF5 (cream)
 */
export const AboutSection = () => {
  return (
    <section
      className="relative w-full py-12 lg:py-20"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side - Images */}
          <div className="relative lg:w-[611px] shrink-0">
            {/* Main Image */}
            <div className="relative w-full h-[500px] md:h-[650px] lg:h-[754px] rounded-lg overflow-hidden">
              <Image
                src="/images/gettoknow/frame-4-1.png"
                alt="Traveler enjoying view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 611px"
              />
            </div>

            {/* Overlapping Secondary Image - Bottom Left */}
            <div className="absolute -bottom-8 left-[100px] md:left-[150px] lg:left-[228px] w-[280px] md:w-[350px] lg:w-[401px] h-[180px] md:h-[220px] lg:h-[242px] rounded-[32px] overflow-hidden shadow-md z-20">
              <Image
                src="/images/gettoknow/frame-27.png"
                alt="Beach resort"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 401px"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 pt-8 lg:pt-0">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl mb-6"
              style={{ backgroundColor: "#FF6E00" }}
            >
              <PlaneIcon />
              <span className="font-display italic font-medium text-sm text-white">
                GET TO KNOW US
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display italic font-semibold text-[28px] leading-[37px] text-brand-brown max-w-[338px] mb-6">
              Experience the World with Our Company
            </h2>

            {/* Description */}
            <p className="font-body font-medium text-lg leading-[27px] text-brand-brown mb-8 max-w-[607px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Feature Cards */}
            <div className="flex flex-col md:flex-row border-t border-black/20 mb-8">
              {FEATURES.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  hasBorder={index === 0}
                />
              ))}
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-3 mb-8">
              {CHECKLIST.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="font-body font-normal text-base leading-6 text-brand-brown">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-[244px] h-[50px] bg-white border border-brand-orange rounded-xl font-display italic text-lg text-brand-orange overflow-hidden transition-all duration-300 relative group cursor-pointer">
              {/* Fill animation from bottom to top */}
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange group-hover:h-full transition-all duration-300 ease-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Explore More
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
