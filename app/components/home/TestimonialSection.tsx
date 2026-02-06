"use client";
import React from "react";
import Image from "next/image";

/**
 * Star Icon
 */
const StarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L14.4 9.2H22L16 13.9L18.4 21L12 16.3L5.6 21L8 13.9L2 9.2H9.6L12 2Z"
      fill="#FF6E00"
      stroke="#FF6E00"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Quote Icon - Closing quotes
 */
const QuoteIcon = () => (
  <svg
    width="87"
    height="66"
    viewBox="0 0 87 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M87 0V22C87 30.4 85.4 37.8 82.2 44.2C79 50.6 74.6 55.8 69 59.8C63.4 63.8 57 66 49.8 66V49.6C55.4 49.6 60 47.4 63.6 43C67.2 38.6 69 33.2 69 26.8H49.8V0H87ZM37.2 0V22C37.2 30.4 35.6 37.8 32.4 44.2C29.2 50.6 24.8 55.8 19.2 59.8C13.6 63.8 7.2 66 0 66V49.6C5.6 49.6 10.2 47.4 13.8 43C17.4 38.6 19.2 33.2 19.2 26.8H0V0H37.2Z"
      fill="#4B3621"
    />
  </svg>
);

/**
 * Floating profile images data
 */
const PROFILE_IMAGES = [
  {
    id: 1,
    url: "/images/room/Desktop - 55.png",
    top: "83px",
    left: "60px",
    mobileLeft: "20px",
  },
  {
    id: 2,
    url: "/images/room/Desktop - 56.png",
    top: "160px",
    left: "220px",
    mobileLeft: "100px",
  },
  {
    id: 3,
    url: "/images/room/Desktop - 57.png",
    top: "60px",
    left: "360px",
    mobileLeft: "180px",
  },
  {
    id: 4,
    url: "/images/room/Desktop - 58.png",
    top: "230px",
    left: "340px",
    mobileLeft: "160px",
  },
  {
    id: 5,
    url: "/images/room/Desktop - 59.png",
    top: "320px",
    left: "180px",
    mobileLeft: "60px",
  },
];

/**
 * Testimonial data
 */
const TESTIMONIAL = {
  rating: 4,
  text: "I had an amazing experience with Travixo! The website is easy to use, prices are competitive, and everything went perfectly on my trip",
  author: {
    name: "Jimmy Jostar",
    role: "Traveler",
    avatar: "/images/room/Desktop - 58.png",
  },
};

/**
 * TestimonialSection Component
 * Customer testimonial with floating profile images
 * Background: #FFFCF5 (cream)
 */
export const TestimonialSection = () => {
  return (
    <section
      className="relative w-full py-12 lg:py-16 overflow-hidden"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Inner Container with background */}
        <div
          className="relative min-h-[450px] lg:min-h-[475px] rounded-xl"
          style={{ backgroundColor: "#FFF7E5" }}
        >
          {/* Floating Profile Images - Hidden on mobile */}
          <div className="hidden md:block">
            {PROFILE_IMAGES.map((profile) => (
              <div
                key={profile.id}
                className="absolute w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded-full shadow-md border-4 border-white"
                style={{
                  top: profile.top,
                  left: profile.left,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={profile.url}
                  alt="Traveler"
                  fill
                  className="object-cover rounded-full"
                  sizes="100px"
                />
              </div>
            ))}

            {/* Connecting Line */}
            <div
              className="absolute hidden lg:block w-[100px] h-px bg-brand-orange"
              style={{ top: "280px", left: "440px" }}
            />
          </div>

          {/* Testimonial Card */}
          <div className="absolute right-4 md:right-8 lg:right-[80px] top-1/2 -translate-y-1/2 w-full max-w-[320px] md:max-w-[450px] lg:max-w-[610px] bg-white rounded-xl p-6 md:p-8 lg:p-12 shadow-sm">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 w-[50px] md:w-[70px] lg:w-[87px] opacity-80">
              <QuoteIcon />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 md:gap-2 mb-4 md:mb-6">
              {[...Array(TESTIMONIAL.rating)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="font-body font-medium text-base md:text-lg lg:text-[22px] leading-relaxed lg:leading-[33px] text-brand-brown mb-6 md:mb-8 max-w-[458px]">
              {TESTIMONIAL.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Avatar */}
              <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden border-2 border-gray-100">
                <Image
                  src={TESTIMONIAL.author.avatar}
                  alt={TESTIMONIAL.author.name}
                  fill
                  className="object-cover rounded-full"
                  sizes="60px"
                />
              </div>

              {/* Info */}
              <div>
                <h4 className="font-display italic font-semibold text-base md:text-lg leading-6 text-brand-brown">
                  {TESTIMONIAL.author.name}
                </h4>
                <span className="font-body font-normal text-sm text-brand-brown">
                  {TESTIMONIAL.author.role}
                </span>
              </div>
            </div>
          </div>
        </div >
      </div >
    </section >
  );
};
