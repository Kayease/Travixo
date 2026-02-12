import React from "react";

import Image from "next/image";

/**
 * Features data
 */
const FEATURES = [
  {
    id: 1,
    icon: "chat",
    title: "24-hour support",
    description: "Our dedicated team is available around the clock to assist you with any travel needs",
  },
  {
    id: 2,
    icon: "feed",
    title: "No hidden fee",
    description: "Transparent pricing with no surprises — what you see is exactly what you pay",
  },
  {
    id: 3,
    icon: "flex",
    title: "Booking Flexibility",
    description: "Change your plans worry-free with our flexible rebooking and cancellation options",
  },
  {
    id: 4,
    icon: "bus",
    title: "Included transfer",
    description: "Complimentary airport transfers included with every tour package booking",
  },
];

/**
 * Get icon component by type
 */
const getIcon = (iconType: string) => {
  switch (iconType) {
    case "chat":
      return (
        <Image
          src="/images/home/features/carbon_chat-bot.png"
          alt="24-hour support"
          fill
          className="object-contain"
          sizes="48px"
        />
      );
    case "feed":
      return (
        <Image
          src="/images/home/features/fluent_feed-16-regular.png"
          alt="No hidden fee"
          fill
          className="object-contain"
          sizes="48px"
        />
      );
    case "flex":
      return (
        <Image
          src="/images/home/features/mask-group-1.png"
          alt="Booking Flexibility"
          fill
          className="object-contain"
          sizes="48px"
        />
      );
    case "bus":
      return (
        <Image
          src="/images/home/features/tabler_bus.png"
          alt="Included transfer"
          fill
          className="object-contain"
          sizes="48px"
        />
      );
    default:
      return (
        <Image
          src="/images/home/features/carbon_chat-bot.png"
          alt="Feature icon"
          fill
          className="object-contain"
          sizes="48px"
        />
      );
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
    <div className="relative w-12 h-12">{getIcon(icon)}</div>

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
      className="relative w-full py-10 lg:py-14 border-t border-[#FFFCF5] bg-white"
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
