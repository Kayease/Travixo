"use client";
import React from "react";
import Image from "next/image";

/**
 * Service data for the What We Do section
 * Using local images from /public/images/home/whatwedo/
 */
const SERVICES = [
  {
    id: "personalized-guide",
    title: "Personalized guide",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature",
    iconPath: "/images/home/whatwedo/Component 57.png",
  },
  {
    id: "accommodation",
    title: "Accommodation booking",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature",
    iconPath: "/images/home/whatwedo/Component 58.png",
  },
  {
    id: "transportation",
    title: "Transportation service",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature",
    iconPath: "/images/home/whatwedo/Component 59.png",
  },
  {
    id: "culinary",
    title: "Culinary experiences",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature",
    iconPath: "/images/home/whatwedo/Component 60.png",
  },
];

/**
 * ServiceCard Component
 * Displays a single service with organic blob icon, title, description, and read more link
 * Matches Figma specs: 208px width, 18px gap between icon and text, 12px gap between title and description
 * The PNG images already include the blob shape with the icon inside
 */
const ServiceCard = ({
  title,
  description,
  iconPath,
}: {
  title: string;
  description: string;
  iconPath: string;
}) => (
  <div className="flex flex-col items-center gap-[18px] w-[208px]">
    {/* Icon Container - 99x123px */}
    <div className="relative w-[99px] h-[123px]">
      <Image
        src={iconPath}
        alt={title}
        fill
        className="object-contain"
      />
    </div>

    {/* Text Content */}
    <div className="flex flex-col items-center gap-3 w-full">
      {/* Title - Playfair Display italic 500, 18px/24px, orange on hover */}
      <h3 className="font-display italic font-medium text-[18px] leading-[24px] text-center text-brand-brown w-full cursor-pointer hover:text-brand-orange transition-colors duration-300">
        {title}
      </h3>

      {/* Description - Poppins 400, 14px/21px */}
      <p className="font-body font-normal text-[14px] leading-[21px] text-center text-brand-brown w-full">
        {description}
      </p>
    </div>
  </div>
);

/**
 * Read More Link Component
 * Poppins 400, 14px/21px with 24px arrow icon, 4px gap
 */
const ReadMoreLink = () => (
  <button className="flex items-center gap-1 text-brand-brown font-body font-normal text-[14px] leading-[21px] hover:text-brand-orange transition-colors group">
    <span>Read More</span>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group-hover:translate-x-1 transition-transform"
    >
      <path
        d="M4.5 12H19.5M19.5 12L13.5 6M19.5 12L13.5 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

/**
 * ServicesSection Component
 * "What We Do" section displaying travel arrangement services
 * Figma specs: 1440px width, 551px height, background #FFFCF5
 */
export const ServicesSection = () => {
  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: "#FFFCF5", minHeight: "551px" }}
    >
      <div className="max-w-[1440px] mx-auto px-[170px] py-[52px]">
        {/* Section Header */}
        <div className="text-center mb-[43px]">
          {/* Small Title - Poppins 500, 24px/36px */}
          <span className="font-body font-medium text-[24px] leading-[36px] text-brand-brown">
            what we do
          </span>

          {/* Main Title - Playfair Display italic 600, 32px/43px */}
          <h2 className="font-display italic font-semibold text-[32px] leading-[43px] text-brand-brown mt-5">
            We provide travel arrangement services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="flex justify-center gap-[90px]">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconPath={service.iconPath}
            />
          ))}
        </div>

        {/* Read More Links Row */}
        <div className="flex justify-center gap-[90px] mt-[32px]">
          {SERVICES.map((service) => (
            <div key={`read-more-${service.id}`} className="w-[208px] flex justify-center">
              <ReadMoreLink />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
