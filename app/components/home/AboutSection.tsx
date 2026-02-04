"use client";
import React from "react";
import Image from "next/image";

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
 * Travel Guide Icon
 */
const TravelIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 4C13.5 4 11.5 6 11.5 8.5C11.5 11 16 16 16 16C16 16 20.5 11 20.5 8.5C20.5 6 18.5 4 16 4ZM16 10.5C14.9 10.5 14 9.6 14 8.5C14 7.4 14.9 6.5 16 6.5C17.1 6.5 18 7.4 18 8.5C18 9.6 17.1 10.5 16 10.5Z"
      fill="#FF6E00"
    />
    <path
      d="M22 20H10C8.9 20 8 20.9 8 22V26C8 27.1 8.9 28 10 28H22C23.1 28 24 27.1 24 26V22C24 20.9 23.1 20 22 20ZM22 26H10V22H22V26Z"
      fill="#FF6E00"
    />
    <path d="M8 18H24V20H8V18Z" fill="#FF6E00" />
  </svg>
);

/**
 * Luggage/Safety Icon
 */
const LuggageIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 8V6C20 4.9 19.1 4 18 4H14C12.9 4 12 4.9 12 6V8H8C6.9 8 6 8.9 6 10V24C6 25.1 6.9 26 8 26H24C25.1 26 26 25.1 26 24V10C26 8.9 25.1 8 24 8H20ZM14 6H18V8H14V6ZM24 24H8V10H24V24Z"
      fill="#FF6E00"
    />
  </svg>
);

/**
 * Checkmark Icon
 */
const CheckIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="14" cy="14" r="14" fill="#FF6E00" />
    <path
      d="M11.5 14.5L13 16L17 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
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
      <div className="w-[50px] h-[50px] rounded-full border border-brand-orange bg-white flex items-center justify-center shrink-0">
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
                src="/images/getToKnow/Frame 4 (1).png"
                alt="Traveler enjoying view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 611px"
              />
            </div>

            {/* 50% Off Badge */}
            <div className="absolute top-16 md:top-20 right-4 md:right-0 z-10">
              {/* Decorative Brush Stroke */}
              <svg
                width="150"
                height="70"
                viewBox="0 0 150 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -left-2 -top-2"
              >
                <path
                  d="M10 35C20 15 50 5 80 10C110 15 140 30 145 45C150 60 130 65 100 60C70 55 30 50 10 35Z"
                  fill="#FF6E00"
                />
              </svg>
              <span className="relative font-display italic font-extrabold text-[28px] leading-[37px] text-white z-10 px-4">
                50% Off
              </span>
            </div>

            {/* Overlapping Secondary Image - Bottom Left */}
            <div className="absolute -bottom-8 left-[100px] md:left-[150px] lg:left-[228px] w-[280px] md:w-[350px] lg:w-[401px] h-[180px] md:h-[220px] lg:h-[242px] rounded-[32px] overflow-hidden border border-brand-orange shadow-md z-20">
              <Image
                src="/images/getToKnow/Frame 27.png"
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
            <button className="w-[244px] h-[50px] bg-white border border-brand-orange rounded-xl font-display italic text-lg text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
