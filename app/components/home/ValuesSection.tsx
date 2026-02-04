"use client";
import React from "react";
import Image from "next/image";

/**
 * Values data
 */
const VALUES_DATA = [
  {
    id: 1,
    title: "Value for Money",
    description:
      "Safari adventures at competitive prices, offering the best wildlife experiences without compromise.",
    icon: "money",
  },
  {
    id: 2,
    title: "Wildlife Conservation",
    description:
      "Committed to protecting Africa's wildlife and supporting sustainable tourism practices for future generations.",
    icon: "animal",
  },
  {
    id: 3,
    title: "Community Support",
    description:
      "Partnering with local communities to create meaningful connections and support economic development.",
    icon: "people",
  },
];

/**
 * Money Icon Component
 */
const MoneyIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="21" cy="15" r="8" stroke="#FF6E00" strokeWidth="1.5" />
    <path
      d="M21 11V19M18 14H24M18 16H24"
      stroke="#FF6E00"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 28C12 28 15 24 21 24C27 24 30 28 30 28"
      stroke="#FF6E00"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 35C8 35 12 30 21 30C30 30 34 35 34 35"
      stroke="#FF6E00"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="21" cy="8" r="3" stroke="#FF6E00" strokeWidth="1.5" />
  </svg>
);

/**
 * Animal Icon Component
 */
const AnimalIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 35C21 35 35 28 35 18C35 11 29 6 21 6C13 6 7 11 7 18C7 28 21 35 21 35Z"
      stroke="#FF6E00"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="15" cy="16" r="2" fill="#FF6E00" />
    <circle cx="27" cy="16" r="2" fill="#FF6E00" />
    <path
      d="M21 20V24"
      stroke="#FF6E00"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18 26C18 26 19.5 28 21 28C22.5 28 24 26 24 26"
      stroke="#FF6E00"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * People Icon Component
 */
const PeopleIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="21" cy="12" r="5" fill="#FF6E00" />
    <circle cx="10" cy="14" r="4" fill="#FF6E00" />
    <circle cx="32" cy="14" r="4" fill="#FF6E00" />
    <path
      d="M14 35V30C14 26.134 17.134 23 21 23C24.866 23 28 26.134 28 30V35"
      fill="#FF6E00"
    />
    <path
      d="M5 35V31C5 28.239 7.239 26 10 26C11.5 26 12.875 26.625 13.75 27.625"
      fill="#FF6E00"
    />
    <path
      d="M37 35V31C37 28.239 34.761 26 32 26C30.5 26 29.125 26.625 28.25 27.625"
      fill="#FF6E00"
    />
  </svg>
);

/**
 * Get icon component by name
 */
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "money":
      return <MoneyIcon />;
    case "animal":
      return <AnimalIcon />;
    case "people":
      return <PeopleIcon />;
    default:
      return <MoneyIcon />;
  }
};

/**
 * Value Card Component
 */
const ValueCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <div className="rounded-xl p-5 h-full" style={{ backgroundColor: "#FFFCF5" }}>
    {/* Icon */}
    <div className="mb-4">{getIcon(icon)}</div>

    {/* Title */}
    <h3 className="font-display italic font-semibold text-[24px] md:text-[32px] leading-[43px] text-brand-brown mb-3">
      {title}
    </h3>

    {/* Description */}
    <p className="font-body font-normal text-[16px] md:text-[18px] leading-[27px] text-black">
      {description}
    </p>
  </div>
);

/**
 * ValuesSection Component
 * "Our Values" - Traveling with Travixo
 */
export const ValuesSection = () => {
  return (
    <section
      className="relative w-full py-12 lg:py-[52px]"
      style={{ backgroundColor: "#FFF7E5" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-body font-medium text-[20px] md:text-[24px] leading-[36px] text-brand-brown mb-3">
            Our Values
          </p>
          <h2 className="font-display italic font-semibold text-[32px] md:text-[42px] leading-[56px] text-brand-brown">
            Traveling with Travixo
          </h2>
        </div>

        {/* Values Grid - 2 Rows */}
        <div className="space-y-[32px]">
          {/* Row 1: Image | Card | Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[13px]">
            {/* Image 1 - Hot Air Balloons */}
            <div className="relative h-[250px] md:h-[279px] rounded-xl overflow-hidden">
              <Image
                src="/images/Travixo ( Travel & Tour )/Frame 303.png"
                alt="Hot air balloons safari"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 386px"
              />
            </div>

            {/* Value Card 1 */}
            <ValueCard
              title={VALUES_DATA[0].title}
              description={VALUES_DATA[0].description}
              icon={VALUES_DATA[0].icon}
            />

            {/* Image 2 - Beach */}
            <div className="relative h-[250px] md:h-[279px] rounded-xl overflow-hidden">
              <Image
                src="/images/Travixo ( Travel & Tour )/Frame 307.png"
                alt="Beach paradise"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 386px"
              />
            </div>
          </div>

          {/* Row 2: Card | Image | Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[13px]">
            {/* Value Card 2 */}
            <ValueCard
              title={VALUES_DATA[1].title}
              description={VALUES_DATA[1].description}
              icon={VALUES_DATA[1].icon}
            />

            {/* Image 3 - Safari/Wildlife */}
            <div className="relative h-[250px] md:h-[279px] rounded-xl overflow-hidden">
              <Image
                src="/images/Travixo ( Travel & Tour )/Frame 304.png"
                alt="Safari wildlife"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 482px"
              />
            </div>

            {/* Value Card 3 */}
            <ValueCard
              title={VALUES_DATA[2].title}
              description={VALUES_DATA[2].description}
              icon={VALUES_DATA[2].icon}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
