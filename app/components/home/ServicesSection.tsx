"use client";
import React from "react";
import Image from "next/image";

/**
 * Service data for the What We Do section
 * Using local images from /public/images/home/whatwedo/
 */
/**
 * Icons
 */
const GuideIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);

const HotelIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21h18M5 21V7l8-4 8 4v14" />
    <path d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
  </svg>
);

const TransportIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const FoodIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3" />
    <path d="M21 21v-6" />
  </svg>
);

/**
 * Service data
 */
const SERVICES = [
  {
    id: "personalized-guide",
    title: "Personalized guide",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature",
    Icon: GuideIcon,
    borderRadius: "63% 37% 30% 70% / 50% 45% 55% 50%",
  },
  {
    id: "accommodation",
    title: "Accommodation booking",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature",
    Icon: HotelIcon,
    borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
  },
  {
    id: "transportation",
    title: "Transportation service",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature",
    Icon: TransportIcon,
    borderRadius: "70% 30% 30% 70% / 60% 40% 60% 40%",
  },
  {
    id: "culinary",
    title: "Culinary experiences",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature",
    Icon: FoodIcon,
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
  },
];

/**
 * ServiceCard Component
 * Displays a single service with organic blob icon, title, description, and read more link
 * Matches Figma specs: 208px width, 18px gap between icon and text, 12px gap between title and description
 */
const ServiceCard = ({
  title,
  description,
  Icon,
  borderRadius,
}: {
  title: string;
  description: string;
  Icon: React.FC;
  borderRadius: string;
}) => (
  <div className="flex flex-col items-center gap-[18px] w-[208px] group cursor-pointer">
    {/* Icon Container with Organic Border */}
    <div
      className="relative w-[100px] h-[100px] flex items-center justify-center border border-brand-orange text-brand-orange overflow-hidden transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:shadow-lg"
      style={{ borderRadius }}
    >
      {/* Fill Animation Layer */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full bg-brand-orange transition-all duration-500 ease-in-out z-0"
        style={{ borderRadius: "inherit" }}
      />

      {/* Icon */}
      <div className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-[#FFFCF5]">
        <Icon />
      </div>
    </div>

    {/* Text Content */}
    <div className="flex flex-col items-center gap-3 w-full">
      {/* Title - Playfair Display italic 500, 18px/24px, orange on hover */}
      <h3 className="font-display italic font-medium text-[18px] leading-[24px] text-center text-brand-brown w-full transition-colors duration-500 group-hover:text-brand-orange">
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
  <button className="flex items-center gap-1 text-brand-brown font-body font-normal text-[14px] leading-[21px] hover:text-brand-orange transition-colors group cursor-pointer">
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
              Icon={service.Icon}
              borderRadius={service.borderRadius}
            />
          ))}
        </div>

        {/* Read More Links Row */}
        <div className="flex justify-center gap-[90px] mt-[32px]">
          {SERVICES.map((service) => (
            <div
              key={`read-more-${service.id}`}
              className="w-[208px] flex justify-center"
            >
              <ReadMoreLink />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
