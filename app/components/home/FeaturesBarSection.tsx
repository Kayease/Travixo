"use client";
import React from "react";

/**
 * Chat Bot Icon - 24-hour support
 */
const ChatBotIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 10C8 7.79 9.79 6 12 6H36C38.21 6 40 7.79 40 10V30C40 32.21 38.21 34 36 34H28L20 42V34H12C9.79 34 8 32.21 8 30V10Z"
      stroke="#FF6E00"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="18" cy="20" r="2" fill="#FF6E00" />
    <circle cx="24" cy="20" r="2" fill="#FF6E00" />
    <circle cx="30" cy="20" r="2" fill="#FF6E00" />
  </svg>
);

/**
 * Feed Icon - No hidden fee
 */
const FeedIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="12"
      width="32"
      height="24"
      rx="4"
      stroke="#FF6E00"
      strokeWidth="2.5"
    />
    <path
      d="M16 22H32M16 28H28"
      stroke="#FF6E00"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M24 6V12"
      stroke="#FF6E00"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="24" cy="6" r="3" stroke="#FF6E00" strokeWidth="2" />
  </svg>
);

/**
 * Checkmark/Flexibility Icon
 */
const FlexibilityIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="18" stroke="#FF6E00" strokeWidth="2.5" />
    <path
      d="M16 24L22 30L32 18"
      stroke="#FF6E00"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Bus Icon - Included transfer
 */
const BusIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="12"
      width="32"
      height="24"
      rx="4"
      stroke="#FF6E00"
      strokeWidth="2.5"
    />
    <path d="M8 24H40" stroke="#FF6E00" strokeWidth="2.5" />
    <circle cx="16" cy="36" r="3" stroke="#FF6E00" strokeWidth="2" />
    <circle cx="32" cy="36" r="3" stroke="#FF6E00" strokeWidth="2" />
    <rect
      x="14"
      y="16"
      width="8"
      height="6"
      rx="1"
      stroke="#FF6E00"
      strokeWidth="2"
    />
    <rect
      x="26"
      y="16"
      width="8"
      height="6"
      rx="1"
      stroke="#FF6E00"
      strokeWidth="2"
    />
  </svg>
);

/**
 * Features data
 */
const FEATURES = [
  {
    id: 1,
    icon: "chat",
    title: "24-hour support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    icon: "feed",
    title: "No hidden fee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    icon: "flex",
    title: "Booking Flexibility",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 4,
    icon: "bus",
    title: "Included transfer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

/**
 * Get icon component by type
 */
const getIcon = (iconType: string) => {
  switch (iconType) {
    case "chat":
      return <ChatBotIcon />;
    case "feed":
      return <FeedIcon />;
    case "flex":
      return <FlexibilityIcon />;
    case "bus":
      return <BusIcon />;
    default:
      return <ChatBotIcon />;
  }
};

/**
 * FeatureItem Component
 */
const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center gap-4 md:gap-6">
    {/* Icon */}
    <div className="w-12 h-12">{getIcon(icon)}</div>

    {/* Title */}
    <h3 className="font-display italic font-semibold text-xl md:text-[28px] leading-[28px] text-brand-brown">
      {title}
    </h3>

    {/* Description */}
    <p className="font-body font-normal text-sm md:text-base leading-6 text-brand-brown max-w-[241px]">
      {description}
    </p>
  </div>
);

/**
 * FeaturesBarSection Component
 * Features bar with 4 items
 * Background: White
 */
export const FeaturesBarSection = () => {
  return (
    <section
      className="relative w-full py-10 lg:py-14 border-t border-[#FFFCF5]"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-14">
          {FEATURES.map((feature) => (
            <FeatureItem
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
