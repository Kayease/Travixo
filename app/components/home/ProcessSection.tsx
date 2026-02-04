"use client";
import React from "react";
import Image from "next/image";

/**
 * Process steps data
 */
const PROCESS_STEPS = [
  {
    id: 1,
    stepNumber: "Step 1:",
    title: "Initial Consultation",
    description:
      "Connect with our safari experts to discuss your travel goals, preferences, and budget. We'll guide you through the best destinations and tailor an itinerary just for you.",
    image: "/images/Travixo ( Travel & Tour )/Frame 290.png",
    imageAlt: "Woman reading map",
    icon: "phone",
    layout: "image-left",
  },
  {
    id: 2,
    stepNumber: "Step 2:",
    title: "Get Ready for Your Adventure",
    description:
      "We handle all the details from accommodations to permits so you can focus on preparing for an unforgettable trip. Receive expert tips on packing, safety, and cultural insights.",
    image: "/images/Travixo ( Travel & Tour )/Frame 297.png",
    imageAlt: "Person on suspension bridge",
    icon: "calendar",
    layout: "image-right",
  },
  {
    id: 3,
    stepNumber: "Step 3:",
    title: "Experience the Journey of a Lifetime",
    description:
      "Embark on your African safari with confidence! Enjoy breathtaking landscapes, incredible wildlife, and immersive cultural experiences while we ensure a seamless adventure.",
    image: "/images/Travixo ( Travel & Tour )/Frame 299.png",
    imageAlt: "Woman in car enjoying view",
    icon: "plane",
    layout: "image-left",
  },
];

/**
 * Phone Icon Component
 */
const PhoneIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 7.5H10.5C9.67157 7.5 9 8.17157 9 9V27C9 27.8284 9.67157 28.5 10.5 28.5H25.5C26.3284 28.5 27 27.8284 27 27V9C27 8.17157 26.3284 7.5 25.5 7.5H22.5M13.5 7.5V9C13.5 9.82843 14.1716 10.5 15 10.5H21C21.8284 10.5 22.5 9.82843 22.5 9V7.5M13.5 7.5H22.5M12 16.5L15 19.5L24 10.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Calendar Icon Component
 */
const CalendarIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3V7.5M24 3V7.5M4.5 13.5H31.5M7.5 6H28.5C30.1569 6 31.5 7.34315 31.5 9V30C31.5 31.6569 30.1569 33 28.5 33H7.5C5.84315 33 4.5 31.6569 4.5 30V9C4.5 7.34315 5.84315 6 7.5 6Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="10" y="18" width="4" height="4" rx="1" fill="white" />
    <rect x="16" y="18" width="4" height="4" rx="1" fill="white" />
    <rect x="22" y="18" width="4" height="4" rx="1" fill="white" />
    <rect x="10" y="24" width="4" height="4" rx="1" fill="white" />
    <rect x="16" y="24" width="4" height="4" rx="1" fill="white" />
  </svg>
);

/**
 * Plane Icon Component
 */
const PlaneIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.5 4.5L16.5 19.5M31.5 4.5L22.5 31.5L16.5 19.5M31.5 4.5L4.5 13.5L16.5 19.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Get icon component by name
 */
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "phone":
      return <PhoneIcon />;
    case "calendar":
      return <CalendarIcon />;
    case "plane":
      return <PlaneIcon />;
    default:
      return <PhoneIcon />;
  }
};

/**
 * ProcessSection Component
 * "Traveling with Travixo" - Our Process section
 */
export const ProcessSection = () => {
  return (
    <section
      className="relative w-full py-12 lg:py-[52px]"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-body font-medium text-[20px] md:text-[24px] leading-[36px] text-brand-brown mb-3">
            Our Process
          </p>
          <h2 className="font-display italic font-semibold text-[32px] md:text-[42px] leading-[56px] text-brand-brown">
            Traveling with Travixo
          </h2>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 lg:space-y-24">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col gap-8 lg:gap-16 ${
                step.layout === "image-left"
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-[640px] shrink-0">
                <div className="relative h-[350px] md:h-[450px] lg:h-[496px] rounded-xl overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 640px"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex-1 flex flex-col justify-center ${
                  step.layout === "image-left"
                    ? "lg:items-start lg:text-left"
                    : "lg:items-start lg:text-left"
                }`}
              >
                {/* Icon Circle */}
                <div
                  className="w-[80px] h-[80px] lg:w-[95px] lg:h-[95px] rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#FF6E00" }}
                >
                  {getIcon(step.icon)}
                </div>

                {/* Title */}
                <h3 className="font-display italic font-semibold text-[28px] md:text-[36px] lg:text-[42px] leading-[40px] lg:leading-[56px] text-brand-brown mb-4">
                  {step.stepNumber} {step.title}
                </h3>

                {/* Description */}
                <p className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-brand-brown max-w-[608px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
