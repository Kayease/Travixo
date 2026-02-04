"use client";

import React from "react";
import Image from "next/image";

/**
 * StayTestimonialSection Component
 *
 * Displays a testimonial section with scattered profile images
 * on the left and a featured testimonial card on the right.
 * Creates a visual connection between happy guests and their reviews.
 */
const StayTestimonialSection: React.FC = () => {
  // Profile images for the scattered display
  const profileImages = [
    {
      id: 1,
      src: "/images/stay/Desktop - 55.png",
      alt: "Happy guest 1",
      position: "top-[83px] left-[147px]",
    },
    {
      id: 2,
      src: "/images/stay/Desktop - 56.png",
      alt: "Happy guest 2",
      position: "top-[159px] left-[315px]",
    },
    {
      id: 3,
      src: "/images/stay/Desktop - 57.png",
      alt: "Happy guest 3",
      position: "top-[74px] left-[482px]",
    },
    {
      id: 4,
      src: "/images/stay/Desktop - 58.png",
      alt: "Happy guest 4",
      position: "top-[227px] left-[458px]",
    },
    {
      id: 5,
      src: "/images/stay/Desktop - 59.png",
      alt: "Happy guest 5",
      position: "top-[317px] left-[265px]",
    },
  ];

  return (
    <section className="w-full bg-[#FFFCF5] py-10 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* Main Container with cream background */}
        <div className="relative w-full min-h-[450px] md:min-h-[475px] bg-[#FFF7E5] rounded-xl overflow-hidden">
          {/* ============================================
              Left Side - Scattered Profile Images
          ============================================ */}
          <div className="hidden lg:block absolute inset-0 w-1/2">
            {/* Profile Image 1 - Top Left */}
            <div className="absolute top-[60px] left-[80px] w-[100px] h-[100px] rounded-full overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)]">
              <Image
                src={profileImages[0].src}
                alt={profileImages[0].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Profile Image 2 - Middle Left */}
            <div className="absolute top-[140px] left-[200px] w-[100px] h-[100px] rounded-full overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)]">
              <Image
                src={profileImages[1].src}
                alt={profileImages[1].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Profile Image 3 - Top Right */}
            <div className="absolute top-[50px] left-[350px] w-[100px] h-[100px] rounded-full overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)]">
              <Image
                src={profileImages[2].src}
                alt={profileImages[2].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Profile Image 4 - Center (Main) with connecting line */}
            <div className="absolute top-[200px] left-[320px] w-[100px] h-[100px] rounded-full overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)]">
              <Image
                src={profileImages[3].src}
                alt={profileImages[3].alt}
                fill
                className="object-cover"
              />
              {/* Orange connecting line */}
              <div className="absolute top-1/2 left-full w-[150px] h-[1px] bg-[#FF6E00]" />
            </div>

            {/* Profile Image 5 - Bottom */}
            <div className="absolute top-[300px] left-[150px] w-[100px] h-[100px] rounded-full overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)]">
              <Image
                src={profileImages[4].src}
                alt={profileImages[4].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* ============================================
              Right Side - Testimonial Card
          ============================================ */}
          <div className="lg:absolute lg:right-[80px] lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[610px] p-6 md:p-10 lg:p-0">
            <div className="relative bg-white rounded-xl p-8 md:p-12 lg:p-[60px] shadow-sm">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 md:top-12 md:right-12 lg:top-[46px] lg:right-[59px]">
                <svg
                  width="87"
                  height="66"
                  viewBox="0 0 87 66"
                  fill="none"
                  className="w-16 h-12 md:w-20 md:h-16"
                >
                  <path
                    d="M0 66V41.8C0 33.9333 0.916667 26.7833 2.75 20.35C4.77778 13.7167 8.16667 7.68333 12.9167 2.25L29.3333 11C25.5 15.1333 22.6833 19.55 20.8833 24.25C19.2833 28.75 18.4833 34.0333 18.4833 40.1H32.0833V66H0ZM54.1667 66V41.8C54.1667 33.9333 55.0833 26.7833 56.9167 20.35C58.9444 13.7167 62.3333 7.68333 67.0833 2.25L83.5 11C79.6667 15.1333 76.85 19.55 75.05 24.25C73.45 28.75 72.65 34.0333 72.65 40.1H86.25V66H54.1667Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-6">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#FF6E00"
                    stroke="#FF6E00"
                    strokeWidth="1.5"
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl lg:text-[22px] font-medium leading-[1.5] lg:leading-[33px] text-[#4B3621] mb-8 max-w-[458px]">
                I had an amazing experience with Travixo! The website is easy to
                use, prices are competitive, and everything went perfectly on my
                trip
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Author Avatar */}
                <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden">
                  <Image
                    src="/images/stay/Desktop - 58.png"
                    alt="Jimmy Jostar"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Author Details */}
                <div className="flex flex-col">
                  <span className="font-display text-lg italic font-semibold text-[#4B3621]">
                    Jimmy Jostar
                  </span>
                  <span className="text-sm text-[#4B3621]">Traveler</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Profile Images Grid */}
          <div className="lg:hidden flex justify-center gap-3 mt-6 px-4 pb-6">
            {profileImages.slice(0, 4).map((profile) => (
              <div
                key={profile.id}
                className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)]"
              >
                <Image
                  src={profile.src}
                  alt={profile.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayTestimonialSection;
