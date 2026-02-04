"use client";
import React from "react";
import Image from "next/image";
import { HERO_IMAGES } from "../../constants/data";

/**
 * HeroSection Component
 * 
 * Main landing hero section featuring:
 * - Headline with branded typography (Playfair Display)
 * - Description text (Poppins)
 * - CTA button with rounded corners
 * - Hanging pendulum discount badge
 * - Tilted image gallery strip
 * - Glassmorphism search bar
 * 
 * Design Specifications:
 * - Background: Cream (#FDFBF7)
 * - CTA Button: #FF6E00, 200x45px, 12px border-radius
 * - Search Bar: 900x100px, backdrop-blur, 12px border-radius
 * - Discount Badge: Pendulum style hanging from top
 */
export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Gradient Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/50 to-transparent pointer-events-none" />

      {/* ========== Pendulum Discount Badge ========== */}
      {/* Hanging badge positioned at top-right with string effect */}
      <div className="absolute top-0 right-[10%] lg:right-[15%] z-50 flex flex-col items-center">
        {/* Hanging String */}
        <div 
          className="w-[2px] h-16 md:h-20 lg:h-24"
          style={{ backgroundColor: "#FF6E00" }}
        />
        {/* Badge Circle */}
        <div 
          className="relative w-28 h-28 md:w-36 md:h-36 lg:w-[140px] lg:h-[140px] rounded-full flex flex-col items-center justify-center text-white shadow-2xl"
          style={{ 
            background: "linear-gradient(180deg, #FF8C00 0%, #FF6E00 100%)",
            boxShadow: "0px 10px 40px rgba(255, 110, 0, 0.3)"
          }}
        >
          {/* 50% off Text */}
          <span className="font-display italic font-semibold text-2xl md:text-3xl lg:text-[32px] leading-tight">
            50% off
          </span>
          {/* For First Traveller Text */}
          <span className="font-display italic font-medium text-sm md:text-base lg:text-lg mt-1">
            For First
          </span>
          <span className="font-display italic font-medium text-sm md:text-base lg:text-lg">
            Traveller
          </span>
        </div>
      </div>

      {/* ========== Main Content Container ========== */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* ========== Left Content Section ========== */}
        <div className="lg:col-span-5 flex flex-col gap-5 md:gap-6">
          {/* Main Heading - Playfair Display */}
          <h1 className="font-display italic font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[56px] leading-[1.15] text-brand-brown">
            Let{" "}
            <span className="text-brand-orange">Travixo</span>
            {" "}Guide You to Your Next Adventure
          </h1>

          {/* Subheading Description - Poppins */}
          <p className="font-body text-base md:text-lg text-brand-brown/80 font-normal max-w-[480px] leading-relaxed">
            Discover the soul of Africa through iconic wildlife, breathtaking
            landscapes, the Great Migration, and a serene hot air balloon
            journey over the savanna.
          </p>

          {/* CTA Button - Rounded Rectangle Style */}
          <div className="pt-2 md:pt-4">
            <button 
              className="font-display italic font-medium text-base md:text-lg text-white px-8 py-3 transition-all duration-300 hover:opacity-90 hover:shadow-xl active:scale-95"
              style={{ 
                width: "200px",
                height: "45px",
                backgroundColor: "#FF6E00",
                borderRadius: "12px",
                boxShadow: "0px 8px 24px rgba(255, 110, 0, 0.35)"
              }}
            >
              Explore More
            </button>
          </div>
        </div>

        {/* ========== Right Content - Image Gallery ========== */}
        <div className="lg:col-span-7 relative h-[450px] md:h-[550px] lg:h-[600px] flex items-center mt-8 lg:mt-0">
          
          {/* Tilted Image Strip Container */}
          <div className="absolute left-[-5%] lg:left-[0%] w-[140%] lg:w-[130%] flex gap-4 md:gap-6 rotate-[10deg] lg:rotate-12 transform-gpu origin-left">
            {HERO_IMAGES.map((img, index) => (
              <div
                key={img.id}
                className={`
                  relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shrink-0 
                  transition-transform hover:scale-105 duration-500 cursor-pointer
                  ${index % 2 === 0 
                    ? "w-44 h-64 md:w-56 md:h-80 lg:w-64 lg:h-96 mt-8 md:mt-12" 
                    : "w-44 h-56 md:w-56 md:h-72 lg:w-64 lg:h-80"
                  }
                `}
              >
                {/* Image */}
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 180px, (max-width: 1024px) 230px, 260px"
                />
                {/* Overlay with Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 md:p-6">
                  <span className="text-white font-display text-lg md:text-xl">
                    {img.title}
                  </span>
                  <span className="text-white/80 text-xs md:text-sm">
                    {img.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== Glassmorphism Search Bar ========== */}
      {/* Floating search component at the bottom of hero */}
      <div className="relative z-40 mt-8 md:mt-12 lg:mt-0 lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 w-full px-4 md:px-8">
        <div 
          className="max-w-[900px] mx-auto h-auto md:h-[100px] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 p-5 md:p-6"
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(60px)",
            WebkitBackdropFilter: "blur(60px)",
            borderRadius: "12px"
          }}
        >
          {/* Destination Input Field */}
          <div className="flex items-center gap-3 flex-1 w-full md:w-auto px-4 md:border-r border-gray-300/50">
            {/* Location Icon */}
            <svg 
              className="w-5 h-5 md:w-6 md:h-6 text-brand-brown/70 shrink-0" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" 
              />
            </svg>
            <div className="flex flex-col">
              <label className="font-display italic font-medium text-sm md:text-base text-brand-brown">
                Destination
              </label>
              <input
                type="text"
                placeholder="Enter Location"
                className="font-body text-sm md:text-base bg-transparent outline-none text-brand-brown/70 placeholder-brand-brown/50 w-full"
              />
            </div>
          </div>

          {/* Date Input Field */}
          <div className="flex items-center gap-3 flex-1 w-full md:w-auto px-4">
            {/* Calendar/Location Icon */}
            <svg 
              className="w-5 h-5 md:w-6 md:h-6 text-brand-brown/70 shrink-0" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" 
              />
            </svg>
            <div className="flex flex-col">
              <label className="font-display italic font-medium text-sm md:text-base text-brand-brown">
                Date
              </label>
              <input
                type="text"
                placeholder="Feb 14,2025"
                className="font-body text-sm md:text-base bg-transparent outline-none text-brand-brown/70 placeholder-brand-brown/50 w-full"
              />
            </div>
          </div>

          {/* Search Button */}
          <button 
            className="w-full md:w-auto p-3 md:p-4 transition-transform hover:scale-105 active:scale-95"
            aria-label="Search"
          >
            <svg 
              className="w-6 h-6 md:w-7 md:h-7 text-brand-brown mx-auto" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
