"use client";
import React from "react";
import Image from "next/image";

/**
 * About Hero Images Data
 */
const HERO_IMAGES = {
  frame345: "/images/about/hero/hero-1.png",
  frame346: "/images/about/hero/hero-2.png",
  frame347: "/images/about/hero/hero-3.png",
  frame348: "/images/about/hero/hero-4.png",
  frame349: "/images/about/hero/hero-5.png",
  frame350: "/images/about/hero/hero-6.png",
  frame356: "/images/about/hero/hero-7.png",
};

/**
 * AboutHeroSection Component
 * Implements the Figma design for the About page hero section.
 * Uses a fixed absolute layout for desktop (1440px+) and a responsive stack for mobile/tablet.
 */
export const AboutHeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#FFF7E5" }}
    >
      {/* Mobile/Tablet Layout (< 1440px) */}
      <div className="block xl:hidden px-6 py-12 md:px-12">
        <div className="flex flex-col gap-8">
          {/* Header Texts */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-display italic font-semibold text-3xl sm:text-4xl md:text-5xl text-brand-brown">
              The Story of Travixo
            </h1>
            <p className="font-body font-medium text-base md:text-lg leading-relaxed text-brand-brown">
              At Travixo, we believe that travel is more than just a
              journey—it’s an experience that transforms the way we see the
              world. Our story began with a passion for exploration and a deep
              love for Africa’s breathtaking landscapes, rich cultures, and
              incredible wildlife.
            </p>
          </div>

          {/* Images Grid Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src={HERO_IMAGES.frame345}
                alt="Travixo Story"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src={HERO_IMAGES.frame346}
                alt="Eiffel Tower"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden md:col-span-2">
              <Image
                src={HERO_IMAGES.frame347}
                alt="Safari"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src={HERO_IMAGES.frame350}
                alt="Hot Air Balloon"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src={HERO_IMAGES.frame348}
                alt="River Boats"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Mission & Vision Mobile */}
          <div className="space-y-8 mt-4">
            <div className="relative h-[200px] rounded-xl overflow-hidden">
              <Image
                src={HERO_IMAGES.frame349}
                alt="Venice"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2 className="font-display italic font-semibold text-3xl text-brand-brown mb-4">
                Our Mission
              </h2>
              <p className="font-body font-medium text-base leading-relaxed text-brand-brown">
                At travixo, we create immersive and sustainable safari
                experiences that connect travelers with Africa’s beauty. Our
                goal is to offer authentic adventures while supporting local
                communities and protecting wildlife for future generations.
              </p>
            </div>

            <div>
              <h2 className="font-display italic font-semibold text-3xl text-brand-brown mb-4">
                Our Vision
              </h2>
              <p className="font-body font-medium text-base leading-relaxed text-brand-brown">
                We strive to make travel a force for good where every safari
                inspires exploration, conservation, and cultural appreciation.
                Our vision is to lead responsible tourism in Africa, ensuring
                unforgettable journeys that leave a positive impact.
              </p>
            </div>

            <div className="relative h-[125px] rounded-xl overflow-hidden">
              <Image
                src={HERO_IMAGES.frame356}
                alt="Travel Vision"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (>= 1440px) - Strict Match to Figma */}
      <div
        className="hidden xl:block relative mx-auto"
        style={{ width: "1440px", height: "1574px" }}
      >
        {/* Title: The Story of Travixo */}
        <h1
          className="absolute font-display italic font-semibold text-[#4B3621]"
          style={{
            width: "406px",
            height: "56px",
            left: "calc(50% - 406px/2 - 437px)", // ~80px
            top: "52px",
            fontSize: "42px",
            lineHeight: "56px",
          }}
        >
          The Story of Travixo
        </h1>

        {/* Paragraph 1 */}
        <p
          className="absolute font-body font-medium text-[#4B3621]"
          style={{
            width: "849px",
            height: "90px",
            left: "calc(50% - 849px/2 - 215.5px)", // ~80px
            top: "130px",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "30px",
          }}
        >
          At Travixo, we believe that travel is more than just a journey—it’s an
          experience that transforms the way we see the world. Our story began
          with a passion for exploration and a deep love for Africa’s
          breathtaking landscapes, rich cultures, and incredible wildlife.
        </p>

        {/* Frame 345 (Top Right) */}
        <div
          className="absolute overflow-hidden rounded-xl bg-white"
          style={{
            width: "418px",
            height: "545px",
            left: "942px",
            top: "52px",
          }}
        >
          <Image
            src={HERO_IMAGES.frame345}
            alt="Travixo Story"
            fill
            className="object-cover"
            sizes="418px"
            priority
          />
        </div>

        {/* Frame 346 (Left Tall) */}
        <div
          className="absolute overflow-hidden rounded-xl bg-white"
          style={{
            width: "347px",
            height: "545px",
            left: "80px",
            top: "272px",
          }}
        >
          <Image
            src={HERO_IMAGES.frame346}
            alt="Eiffel Tower"
            fill
            className="object-cover"
            sizes="347px"
          />
        </div>

        {/* Frame 347 (Center Top) */}
        <div
          className="absolute overflow-hidden rounded-xl bg-white"
          style={{
            width: "489px",
            height: "380px",
            left: "440px",
            top: "272px",
          }}
        >
          <Image
            src={HERO_IMAGES.frame347}
            alt="Safari"
            fill
            className="object-cover"
            sizes="489px"
          />
        </div>

        {/* Frame 348 (Right Bottom) */}
        <div
          className="absolute overflow-hidden rounded-xl bg-white"
          style={{
            width: "418px",
            height: "608px",
            left: "942px",
            top: "610px",
          }}
        >
          <Image
            src={HERO_IMAGES.frame348}
            alt="River Boats"
            fill
            className="object-cover"
            sizes="418px"
          />
        </div>

        {/* Frame 350 (Center Bottom) */}
        <div
          className="absolute overflow-hidden rounded-xl bg-white"
          style={{
            width: "489px",
            height: "469px",
            left: "440px",
            top: "665px",
          }}
        >
          <Image
            src={HERO_IMAGES.frame350}
            alt="Hot Air Balloon"
            fill
            className="object-cover"
            sizes="489px"
          />
        </div>

        {/* Frame 349 (Left Bottom) */}
        <div
          className="absolute overflow-hidden rounded-xl bg-white"
          style={{
            width: "347px",
            height: "545px",
            left: "80px",
            top: "830px",
          }}
        >
          <Image
            src={HERO_IMAGES.frame349}
            alt="Venice"
            fill
            className="object-cover"
            sizes="347px"
          />
        </div>

        {/* Frame 356 (Left Bottom Small) */}
        <div
          className="absolute overflow-hidden rounded-xl bg-white"
          style={{
            width: "347px",
            height: "125px",
            left: "80px",
            top: "1388px",
          }}
        >
          <Image
            src={HERO_IMAGES.frame356}
            alt="Travel Vision"
            fill
            className="object-cover"
            sizes="347px"
          />
        </div>

        {/* Mission Title */}
        <h2
          className="absolute font-display italic font-semibold text-[#4B3621]"
          style={{
            width: "232px",
            height: "30px",
            left: "479px",
            top: "1186px",
            fontSize: "42px",
            lineHeight: "30px",
          }}
        >
          Our Mission
        </h2>

        {/* Mission Text */}
        <p
          className="absolute font-body font-medium text-[#4B3621]"
          style={{
            width: "827px",
            height: "90px",
            left: "calc(50% - 827px/2 + 172.5px)", // 479px
            top: "1238px",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "30px",
          }}
        >
          At travixo, we create immersive and sustainable safari experiences
          that connect travelers with Africa’s beauty. Our goal is to offer
          authentic adventures while supporting local communities and protecting
          wildlife for future generations.
        </p>

        {/* Vision Title */}
        <h2
          className="absolute font-display italic font-semibold text-[#4B3621]"
          style={{
            width: "204px",
            height: "30px",
            left: "479px",
            top: "1380px",
            fontSize: "42px",
            lineHeight: "30px",
          }}
        >
          Our Vision
        </h2>

        {/* Vision Text */}
        <p
          className="absolute font-body font-medium text-[#4B3621]"
          style={{
            width: "827px",
            height: "90px",
            left: "calc(50% - 827px/2 + 172.5px)", // 479px
            top: "1432px",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "30px",
          }}
        >
          We strive to make travel a force for good where every safari inspires
          exploration, conservation, and cultural appreciation. Our vision is to
          lead responsible tourism in Africa, ensuring unforgettable journeys
          that leave a positive impact.
        </p>
      </div>
    </section>
  );
};
