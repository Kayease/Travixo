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
    icon: "/images/about/values/streamline-ultimate_saving-money-flower.png",
  },
  {
    id: 2,
    title: "Wildlife Conservation",
    description:
      "Committed to protecting Africa's wildlife and supporting sustainable tourism practices for future generations.",
    icon: "/images/about/values/guidance_service-animal-2.png",
  },
  {
    id: 3,
    title: "Community Support",
    description:
      "Partnering with local communities to create meaningful connections and support economic development.",
    icon: "/images/about/values/formkit_people-2.png",
  },
];

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
    <div className="mb-4 relative w-[42px] h-[42px]">
      <Image
        src={icon}
        alt={title}
        fill
        className="object-contain"
        sizes="42px"
      />
    </div>

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
            {/* Video 1 - Hot Air Balloons */}
            <div className="relative h-[250px] md:h-[279px] rounded-xl overflow-hidden">
              <video
                src="/images/about/about-video-1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Value Card 1 */}
            <ValueCard
              title={VALUES_DATA[0].title}
              description={VALUES_DATA[0].description}
              icon={VALUES_DATA[0].icon}
            />

            {/* Video 2 - Beach */}
            <div className="relative h-[250px] md:h-[279px] rounded-xl overflow-hidden">
              <video
                src="/images/about/about-video-2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
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

            {/* Video 3 - Safari/Wildlife */}
            <div className="relative h-[250px] md:h-[279px] rounded-xl overflow-hidden">
              <video
                src="/images/about/about-video-3.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
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
