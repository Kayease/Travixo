"use client";
import React from "react";
import Image from "next/image";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ProcessSection } from "../components/home/ProcessSection";
import { ValuesSection } from "../components/home/ValuesSection";

/**
 * Gallery images data - Using local images from public folder
 */
const GALLERY_IMAGES = {
  topRight: {
    url: "/images/Travixo ( Travel & Tour )/Frame 308.png",
    alt: "Modern architecture building",
  },
  leftTall: {
    url: "/images/Travixo ( Travel & Tour )/Frame 302.png",
    alt: "Eiffel Tower Paris",
  },
  centerTop: {
    url: "/images/Travixo ( Travel & Tour )/Frame 304.png",
    alt: "Desert safari adventure",
  },
  centerBottom: {
    url: "/images/Travixo ( Travel & Tour )/Frame 306.png",
    alt: "Vietnam river boats",
  },
  leftBottom: {
    url: "/images/Travixo ( Travel & Tour )/Frame 305.png",
    alt: "Venice canal",
  },
  rightMiddle: {
    url: "/images/Travixo ( Travel & Tour )/Frame 303.png",
    alt: "Hot air balloon adventure",
  },
  rightBottom: {
    url: "/images/Travixo ( Travel & Tour )/Frame 307.png",
    alt: "Tropical infinity pool",
  },
  visionSmall: {
    url: "/images/Travixo ( Travel & Tour )/Frame 301.png",
    alt: "Airplane sunset view",
  },
};

/**
 * AboutStorySection Component
 * Precisely matches Figma layout with proper image sizing
 */
const AboutStorySection = () => {
  return (
    <section className="relative w-full" style={{ backgroundColor: "#FFF7E5" }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        {/* === TOP SECTION === */}
        <div className="pt-[52px] pb-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="lg:max-w-[580px] lg:flex-1">
              <h1 className="font-display italic font-semibold text-[32px] md:text-[42px] leading-[56px] text-brand-brown mb-5">
                The Story of Travixo
              </h1>
              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown">
                At Travixo, we believe that travel is more than just a
                journey—it's an experience that transforms the way we see the
                world. Our story began with a passion for exploration and a deep
                love for Africa's breathtaking landscapes, rich cultures, and
                incredible wildlife.
              </p>
            </div>

            {/* Right Image - Desktop Only */}
            <div className="hidden lg:block shrink-0">
              <div className="relative w-[418px] h-[545px] rounded-xl overflow-hidden">
                <Image
                  src={GALLERY_IMAGES.topRight.url}
                  alt={GALLERY_IMAGES.topRight.alt}
                  fill
                  className="object-cover"
                  sizes="418px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* === GALLERY GRID === */}
        <div className="pb-10">
          {/* Mobile Gallery */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src={GALLERY_IMAGES.topRight.url}
                alt={GALLERY_IMAGES.topRight.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src={GALLERY_IMAGES.leftTall.url}
                alt={GALLERY_IMAGES.leftTall.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={GALLERY_IMAGES.centerTop.url}
                alt={GALLERY_IMAGES.centerTop.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src={GALLERY_IMAGES.rightMiddle.url}
                alt={GALLERY_IMAGES.rightMiddle.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={GALLERY_IMAGES.centerBottom.url}
                alt={GALLERY_IMAGES.centerBottom.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src={GALLERY_IMAGES.leftBottom.url}
                alt={GALLERY_IMAGES.leftBottom.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden sm:col-span-2">
              <Image
                src={GALLERY_IMAGES.rightBottom.url}
                alt={GALLERY_IMAGES.rightBottom.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Desktop Gallery - Figma Spec Widths */}
          <div
            className="hidden lg:flex gap-[13px]"
            style={{ marginTop: "-325px" }}
          >
            {/* LEFT COLUMN - 347px per Figma */}
            <div className="w-[347px] shrink-0 flex flex-col gap-[13px]">
              <div className="relative h-[545px] rounded-xl overflow-hidden">
                <Image
                  src={GALLERY_IMAGES.leftTall.url}
                  alt={GALLERY_IMAGES.leftTall.alt}
                  fill
                  className="object-cover"
                  sizes="347px"
                />
              </div>
              <div className="relative h-[545px] rounded-xl overflow-hidden">
                <Image
                  src={GALLERY_IMAGES.leftBottom.url}
                  alt={GALLERY_IMAGES.leftBottom.alt}
                  fill
                  className="object-cover"
                  sizes="347px"
                />
              </div>
            </div>

            {/* CENTER COLUMN - 489px per Figma */}
            <div className="w-[489px] shrink-0 flex flex-col gap-[13px]">
              <div className="relative h-[380px] rounded-xl overflow-hidden">
                <Image
                  src={GALLERY_IMAGES.centerTop.url}
                  alt={GALLERY_IMAGES.centerTop.alt}
                  fill
                  className="object-cover"
                  sizes="489px"
                />
              </div>
              <div className="relative h-[469px] rounded-xl overflow-hidden">
                <Image
                  src={GALLERY_IMAGES.centerBottom.url}
                  alt={GALLERY_IMAGES.centerBottom.alt}
                  fill
                  className="object-cover"
                  sizes="489px"
                />
              </div>
            </div>

            {/* RIGHT COLUMN - 418px per Figma */}
            <div className="w-[418px] shrink-0 flex flex-col gap-[13px]">
              {/* Spacer to align below building image */}
              <div className="h-[220px]" />
              <div className="relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src={GALLERY_IMAGES.rightMiddle.url}
                  alt={GALLERY_IMAGES.rightMiddle.alt}
                  fill
                  className="object-cover"
                  sizes="418px"
                />
              </div>
              <div className="relative h-[608px] rounded-xl overflow-hidden">
                <Image
                  src={GALLERY_IMAGES.rightBottom.url}
                  alt={GALLERY_IMAGES.rightBottom.alt}
                  fill
                  className="object-cover"
                  sizes="418px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === MISSION & VISION SECTION === */}
        <div className="pb-[52px]">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[52px]">
            {/* Left - Small Image */}
            <div className="w-full lg:w-[347px] shrink-0">
              <div className="relative h-[125px] rounded-xl overflow-hidden">
                <Image
                  src={GALLERY_IMAGES.visionSmall.url}
                  alt={GALLERY_IMAGES.visionSmall.alt}
                  fill
                  className="object-cover"
                  sizes="347px"
                />
              </div>
            </div>

            {/* Right - Mission & Vision Text */}
            <div className="flex-1 space-y-12">
              {/* Our Mission */}
              <div>
                <h2 className="font-display italic font-semibold text-[32px] md:text-[42px] leading-[42px] text-brand-brown mb-5">
                  Our Mission
                </h2>
                <p className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown max-w-[827px]">
                  At travixo, we create immersive and sustainable safari
                  experiences that connect travelers with Africa's beauty. Our
                  goal is to offer authentic adventures while supporting local
                  communities and protecting wildlife for future generations.
                </p>
              </div>

              {/* Our Vision */}
              <div>
                <h2 className="font-display italic font-semibold text-[32px] md:text-[42px] leading-[42px] text-brand-brown mb-5">
                  Our Vision
                </h2>
                <p className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown max-w-[827px]">
                  We strive to make travel a force for good where every safari
                  inspires exploration, conservation, and cultural appreciation.
                  Our vision is to lead responsible tourism in Africa, ensuring
                  unforgettable journeys that leave a positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * About Page
 */
export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <AboutStorySection />
      <ProcessSection />
      <ValuesSection />
      <Footer />
    </main>
  );
}
