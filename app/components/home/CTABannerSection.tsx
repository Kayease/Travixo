"use client";
import React from "react";
import Image from "next/image";

/**
 * Arrow Icon (rotated)
 */
const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="-rotate-30"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="#FF6E00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

/**
 * CTABannerSection Component
 * Call-to-action banner with traveler image
 * Background: White with cream card
 */
export const CTABannerSection = ({
  title = "Speak to Our Destination Experts at Call",
  subtitle = "Our Customer service team is available 24/7 via chat, email and WhatsApp.",
  buttonText = "Request a quote",
  onButtonClick,
}: CTABannerProps) => {
  return (
    <section className="relative w-full py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Container with relative positioning for the image */}
        <div className="relative">
          {/* Traveler Image - Positioned to overlap */}
          <div className="hidden md:block absolute left-0 lg:left-8 -top-4 bottom-0 w-[180px] lg:w-[232px] z-10">
            <Image
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop"
              alt="Travel expert"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 180px, 232px"
            />
          </div>

          {/* CTA Card */}
          <div
            className="relative ml-0 md:ml-[120px] lg:ml-[180px] rounded-xl shadow-sm py-10 md:py-12 px-6 md:px-8 lg:px-12"
            style={{ backgroundColor: "#FFF7E5" }}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
              {/* Content */}
              <div className="flex-1 pl-0 md:pl-12 lg:pl-24">
                {/* Title */}
                <h2 className="font-display italic font-semibold text-xl md:text-2xl lg:text-[28px] leading-tight lg:leading-[37px] text-brand-brown mb-3">
                  {title}
                </h2>

                {/* Subtitle */}
                <p className="font-body font-normal text-base lg:text-lg leading-relaxed lg:leading-[27px] text-brand-brown max-w-[680px]">
                  {subtitle}
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={onButtonClick}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white border border-brand-orange rounded-xl font-display italic text-lg text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 group"
              >
                <span>{buttonText}</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  <ArrowIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
