"use client";
import React from "react";

/**
 * Service data for the What We Do section
 */
const SERVICES = [
  {
    id: "personalized-guide",
    title: "Personalized guide",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature",
    icon: "hiking",
  },
  {
    id: "accommodation",
    title: "Accommodation booking",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature",
    icon: "palm",
  },
  {
    id: "transportation",
    title: "Transportation service",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature",
    icon: "car",
  },
  {
    id: "culinary",
    title: "Culinary experiences",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature",
    icon: "food",
  },
];

/**
 * Service Icon Component
 * Renders the appropriate icon based on type
 */
const ServiceIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    hiking: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="38" cy="12" r="5" fill="#FF6E00" />
        <path
          d="M20 55L28 38L38 44V55M28 38L20 22L32 16L42 26L36 44M32 16V8"
          stroke="#FF6E00"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    palm: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 55V32M30 32C30 32 20 35 15 30C10 25 15 18 15 18C15 18 22 20 30 18C38 16 45 18 45 18C45 18 50 25 45 30C40 35 30 32 30 32ZM30 18C30 18 25 12 30 8C35 4 42 10 42 10"
          stroke="#FF6E00"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    car: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 32L16 18C16.4 17.1 17.1 16.4 17.9 15.9C18.7 15.4 19.6 15.1 20.5 15.1H39.5C40.4 15.1 41.3 15.4 42.1 15.9C42.9 16.4 43.6 17.1 44 18L50 32M10 32H50M10 32V48M50 32V48M10 48V49.5C10 50.5 10.4 51.4 11.1 52.1C11.8 52.8 12.7 53.2 13.7 53.2C14.7 53.2 15.6 52.8 16.3 52.1C17 51.4 17.4 50.5 17.4 49.5V48M10 48H17.4M50 48V49.5C50 50.5 49.6 51.4 48.9 52.1C48.2 52.8 47.3 53.2 46.3 53.2C45.3 53.2 44.4 52.8 43.7 52.1C43 51.4 42.6 50.5 42.6 49.5V48M50 48H42.6M42.6 48H17.4"
          stroke="#FF6E00"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="17" cy="40" r="3" fill="#FF6E00" />
        <circle cx="43" cy="40" r="3" fill="#FF6E00" />
      </svg>
    ),
    food: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45 30C45 38.284 38.284 45 30 45C21.716 45 15 38.284 15 30"
          stroke="#FF6E00"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M15 30C15 21.716 21.716 15 30 15"
          stroke="#FF6E00"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M30 15L45 30"
          stroke="#FF6E00"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="38" cy="22" r="3" fill="#FF6E00" />
        <circle cx="42" cy="28" r="2" fill="#FF6E00" />
        <circle cx="34" cy="18" r="2" fill="#FF6E00" />
      </svg>
    ),
  };

  return icons[type] || null;
};

/**
 * ServiceCard Component
 * Displays a single service with icon, title, description, and read more link
 */
const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <div className="flex flex-col items-center text-center max-w-[250px]">
    {/* Icon Container */}
    <div className="w-[120px] h-[120px] rounded-full border-2 border-brand-orange/30 flex items-center justify-center mb-6 hover:border-brand-orange transition-colors duration-300">
      <ServiceIcon type={icon} />
    </div>

    {/* Title */}
    <h3 className="font-display italic font-semibold text-lg text-brand-brown mb-3">
      {title}
    </h3>

    {/* Description */}
    <p className="font-body text-sm text-brand-brown/70 leading-relaxed mb-4">
      {description}
    </p>

    {/* Read More Link */}
    <button className="flex items-center gap-2 text-brand-brown font-body text-sm hover:text-brand-orange transition-colors group">
      <span>Read More</span>
      <svg
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:translate-x-1 transition-transform"
      >
        <path
          d="M1 6H15M15 6L10 1M15 6L10 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
);

/**
 * ServicesSection Component
 * "What We Do" section displaying travel arrangement services
 * Background: #FFFCF5 (cream)
 */
export const ServicesSection = () => {
  return (
    <section
      className="relative w-full py-16 border-y border-brand-brown/10"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Small Title */}
          <span className="font-body font-medium text-base text-brand-brown tracking-wide">
            what we do
          </span>

          {/* Main Title */}
          <h2 className="font-display italic font-semibold text-[28px] leading-[37px] text-brand-brown mt-4">
            We provide travel arrangement services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
