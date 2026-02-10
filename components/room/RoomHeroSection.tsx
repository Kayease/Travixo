/**
 * RoomHeroSection Component
 *
 * Hero section for the Room page featuring a title, description,
 * and a creative image gallery layout with one tall vertical image
 * and two horizontal images stacked on the right.
 *
 * Design specs from Figma:
 * - Container: 1440px width, 646px height, #FFFCF5 background
 * - Frame 490: 295x440px (left tall image)
 * - Frame 491: 551x262px (top right)
 * - Frame 492: 551x262px (bottom right)
 * - Gap between right images: 18px
 */

import React from "react";
import Image from "next/image";

const RoomHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFCF5] py-12 md:py-16 lg:py-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-0 max-w-[1440px]">
        {/* Desktop Layout - Absolute Positioning per Figma */}
        <div className="hidden lg:block relative h-[646px]">
          {/* Section Title */}
          <h1
            className="absolute font-display italic font-semibold text-[32px] leading-[43px] text-[#4B3621]"
            style={{
              width: "313px",
              height: "43px",
              left: "102px",
              top: "182px",
            }}
          >
            Where style meets rest
          </h1>

          {/* Description */}
          <p
            className="absolute font-sans font-normal text-xl leading-[30px] text-[#4B3621]"
            style={{
              width: "369px",
              height: "120px",
              left: "102px",
              top: "243px",
            }}
          >
            Whether you choose a cozy Classic or a spacious Suite, our rooms are
            made to help you relax and feel at home.
          </p>

          {/* Frame 490 - Left Tall Image */}
          <div
            className="absolute rounded-xl overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)]"
            style={{
              width: "295px",
              height: "440px",
              left: "496px",
              top: "52px",
            }}
          >
            <Image
              src="/images/room/cards/hero-1.png"
              alt="Stylish room with yellow wall and plants"
              fill
              className="object-cover"
              sizes="295px"
            />
          </div>

          {/* Frame 491 - Top Right Image */}
          <div
            className="absolute rounded-xl overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)]"
            style={{
              width: "551px",
              height: "262px",
              left: "809px",
              top: "52px",
            }}
          >
            <Image
              src="/images/room/cards/hero-2.png"
              alt="Bright living room with pink chairs"
              fill
              className="object-cover"
              sizes="551px"
            />
          </div>

          {/* Frame 492 - Bottom Right Image */}
          <div
            className="absolute rounded-xl overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)]"
            style={{
              width: "551px",
              height: "262px",
              left: "809px",
              top: "332px",
            }}
          >
            <Image
              src="/images/room/cards/hero-3.png"
              alt="Elegant white bedroom"
              fill
              className="object-cover"
              sizes="551px"
            />
          </div>
        </div>

        {/* Mobile/Tablet Responsive Layout */}
        <div className="lg:hidden flex flex-col gap-8 md:gap-10">
          {/* Left Content - Title & Description */}
          <div className="flex flex-col justify-center text-center md:text-left">
            {/* Section Title */}
            <h1 className="font-display text-2xl md:text-[28px] italic font-semibold leading-tight text-[#4B3621] mb-3 md:mb-6">
              Where style meets rest
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg font-normal leading-[26px] md:leading-[30px] text-[#4B3621] max-w-lg mx-auto md:mx-0">
              Whether you choose a cozy Classic or a spacious Suite, our rooms
              are made to help you relax and feel at home.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {/* Left Tall Image */}
            <div className="relative h-[240px] xs:h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/room/cards/hero-1.png"
                alt="Stylish room with yellow wall and plants"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 350px"
              />
            </div>

            {/* Right Column - Two Stacked Images */}
            <div className="flex flex-col gap-3 md:gap-4">
              {/* Top Image */}
              <div className="relative h-[114px] xs:h-[143px] md:h-[168px] rounded-xl overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <Image
                  src="/images/room/cards/hero-2.png"
                  alt="Bright living room with pink chairs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 168px"
                />
              </div>

              {/* Bottom Image */}
              <div className="relative h-[114px] xs:h-[143px] md:h-[168px] rounded-xl overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <Image
                  src="/images/room/cards/hero-3.png"
                  alt="Elegant white bedroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 168px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomHeroSection;
