"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { HERO_IMAGES } from "../../constants/data";

/**
 * HeroSection Component
 * 
 * Main landing hero section featuring:
 * - Headline with Playfair Display italic typography
 * - Description text with Poppins font
 * - CTA button (200x45px, #FF6E00, 12px radius)
 * - Pendulum discount badge hanging from top-right (interactive mouse-follow)
 * - Diagonal image strip rotated -8.6deg with floating animation
 * - Glassmorphism search bar at bottom
 * 
 * Design Specifications (from Figma):
 * - Background: #FFF7E5 with texture overlay
 * - Image cards: 272x363px, 12px radius, 16px gap
 * - Strip rotation: -8.6deg
 * - Search bar: 900x100px, backdrop-blur(60px)
 */

export const HeroSection = () => {
    // State for pendulum rotation based on mouse position
    const [pendulumRotation, setPendulumRotation] = useState(0);
    const pendulumRef = useRef<HTMLDivElement>(null);
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");

    const handleSearch = () => {
        if (!destination && !date) {
            console.log("Please enter a destination or date to search.");
            return;
        }
        console.log(`Searching for ${destination || "anywhere"} on ${date || "any date"}...`);
    };

    /**
     * Handle mouse movement over pendulum area
     * Calculates rotation based on horizontal mouse position relative to pendulum center
     */
    const handlePendulumMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!pendulumRef.current) return;

        const rect = pendulumRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const mouseX = e.clientX;

        // Calculate rotation: max ±15 degrees based on mouse distance from center
        const distance = mouseX - centerX;
        const maxDistance = 150; // pixels from center for max rotation
        const rotation = Math.max(-15, Math.min(15, (distance / maxDistance) * 15));

        setPendulumRotation(rotation);
    };

    /**
     * Reset pendulum to center when mouse leaves
     */
    const handlePendulumMouseLeave = () => {
        setPendulumRotation(0);
    };

    return (
        <section
            className="relative w-full h-screen overflow-hidden"
            style={{
                backgroundColor: "#FFF7E5",
                backgroundImage: "url('/images/hero-bg-texture.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* ========== Pendulum Discount Badge ========== */}
            <div
                ref={pendulumRef}
                className="absolute top-0 right-[8%] md:right-[10%] lg:right-[77%] lg:left-auto lg:right-[calc((100%-1440px)/2+1110px)] z-50 flex flex-col items-center"
                style={{ right: "calc(100% - 1110px - 210px)" }}
                onMouseMove={handlePendulumMouseMove}
                onMouseLeave={handlePendulumMouseLeave}
            >
                {/* For responsive, position from right */}
                <div
                    className="absolute top-0 right-[60px] md:right-[80px] lg:right-[120px] flex flex-col items-center cursor-pointer"
                    style={{
                        transformOrigin: "top center",
                        transform: `rotate(${pendulumRotation}deg)`,
                        transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
                    }}
                >
                    {/* Hanging String Line */}
                    <div
                        className="w-[2px] h-[90px] md:h-[100px] lg:h-[116px]"
                        style={{ backgroundColor: "#D55C00" }}
                        aria-hidden="true"
                    />
                    {/* Badge Circle - 150px diameter */}
                    <div
                        className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[150px] lg:h-[150px] rounded-full flex flex-col items-center justify-center text-white"
                        style={{
                            backgroundColor: "#FF6E00",
                            boxShadow: "0px 0px 20px 2px rgba(255, 110, 0, 0.2), inset 0px 0px 20px 10px rgba(0, 0, 0, 0.25)"
                        }}
                    >
                        <span className="font-display italic font-normal text-[22px] md:text-[26px] lg:text-[28px] leading-[28px] text-white">
                            50% off
                        </span>
                        <span className="font-display italic font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[28px] text-center text-white mt-1">
                            For First<br />Traveller
                        </span>
                    </div>
                </div>
            </div>

            {/* ========== Main Content Area ========== */}
            <div className="relative z-20 px-6 md:px-12 lg:px-20 pt-28 md:pt-32 lg:pt-[110px]">
                {/* Main Heading */}
                <h1
                    className="font-display italic font-semibold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] leading-[1.34] max-w-[726px]"
                    style={{ color: "#4B3621" }}
                >
                    Let Travixo Guide You to<br className="hidden sm:block" /> Your Next Adventure
                </h1>

                {/* Description */}
                <p
                    className="font-body font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] max-w-[795px] mt-6 md:mt-8"
                    style={{ color: "#4B3621" }}
                >
                    Discover the soul of Africa through iconic wildlife, breathtaking
                    landscapes, the Great Migration, and a serene hot air balloon
                    journey over the savanna.
                </p>

                {/* CTA Button with bottom-to-top fill animation */}
                <button
                    onClick={() => console.log("Navigating to adventure...")}
                    className="relative mt-8 md:mt-10 lg:mt-[40px] font-display italic font-medium text-[18px] md:text-[20px] leading-[27px] text-center text-white transition-all duration-300 active:scale-[0.98] overflow-hidden group"
                    style={{
                        width: "200px",
                        height: "45px",
                        backgroundColor: "#FF6E00",
                        borderRadius: "12px"
                    }}
                >
                    {/* Bottom-to-top fill animation overlay */}
                    <span className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out" />
                    {/* Button text */}
                    <span className="relative z-10 group-hover:text-[#FF6E00] transition-colors duration-300">
                        Explore More
                    </span>
                </button>
            </div>

            {/* ========== Diagonal Image Strip ========== */}
            <div
                className="absolute left-1/2 z-10"
                style={{
                    top: "420px",
                    width: "200vw",
                    transform: "translateX(-50%) rotate(-8.6deg)",
                    transformOrigin: "center center"
                }}
            >
                <div className="flex items-center gap-4 animate-scroll-infinite">
                    {/* Render images multiple times for infinite scroll effect */}
                    {[...HERO_IMAGES, ...HERO_IMAGES, ...HERO_IMAGES].map((image, index) => (
                        <div
                            key={`img-${index}`}
                            className="relative shrink-0 overflow-hidden transition-transform duration-500 hover:scale-105 cursor-pointer"
                            style={{
                                width: "272px",
                                height: "363px",
                                borderRadius: "12px",
                                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)"
                            }}
                        >
                            <Image
                                src={image.url}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="272px"
                                priority={index < 5}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ========== Glassmorphism Search Bar ========== */}
            <div className="absolute bottom-8 md:bottom-10 lg:bottom-[40px] left-1/2 -translate-x-1/2 w-[95%] md:w-auto z-40 px-4 md:px-0">
                <div
                    className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[100px] p-4 md:p-0"
                    style={{
                        width: "100%",
                        maxWidth: "900px",
                        background: "rgba(255, 255, 255, 0.4)",
                        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(60px)",
                        WebkitBackdropFilter: "blur(60px)",
                        borderRadius: "12px"
                    }}
                >
                    {/* Destination Field */}
                    <div className="flex items-center gap-3 flex-1 w-full md:w-auto px-4 md:px-6 py-3 md:py-0">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
                            <path d="M14 14.875C15.2426 14.875 16.25 13.8676 16.25 12.625C16.25 11.3824 15.2426 10.375 14 10.375C12.7574 10.375 11.75 11.3824 11.75 12.625C11.75 13.8676 12.7574 14.875 14 14.875Z" stroke="#4B3621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 3.5C11.5136 3.5 9.12903 4.48772 7.37087 6.24587C5.61272 8.00403 4.625 10.3886 4.625 12.875C4.625 15.0575 5.12125 16.52 6.3125 18L14 26.25L21.6875 18C22.8788 16.52 23.375 15.0575 23.375 12.875C23.375 10.3886 22.3873 8.00403 20.6291 6.24587C18.871 4.48772 16.4864 3.5 14 3.5Z" stroke="#4B3621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex flex-col">
                            <label className="font-display italic font-semibold text-[18px] md:text-[22px] leading-[28px]" style={{ color: "#4B3621" }}>
                                Destination
                            </label>
                            <input
                                type="text"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                placeholder="Enter Location"
                                className="font-body font-normal text-[16px] md:text-[18px] leading-[28px] bg-transparent outline-none w-full placeholder:text-[#4B3621]/60"
                                style={{ color: "#4B3621" }}
                            />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-[1px] h-[70px]" style={{ backgroundColor: "rgba(75, 54, 33, 0.2)" }} />

                    {/* Date Field */}
                    <div className="flex items-center gap-3 flex-1 w-full md:w-auto px-4 md:px-6 py-3 md:py-0 border-t md:border-t-0 border-[rgba(75,54,33,0.1)]">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
                            <path d="M14 14.875C15.2426 14.875 16.25 13.8676 16.25 12.625C16.25 11.3824 15.2426 10.375 14 10.375C12.7574 10.375 11.75 11.3824 11.75 12.625C11.75 13.8676 12.7574 14.875 14 14.875Z" stroke="#4B3621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 3.5C11.5136 3.5 9.12903 4.48772 7.37087 6.24587C5.61272 8.00403 4.625 10.3886 4.625 12.875C4.625 15.0575 5.12125 16.52 6.3125 18L14 26.25L21.6875 18C22.8788 16.52 23.375 15.0575 23.375 12.875C23.375 10.3886 22.3873 8.00403 20.6291 6.24587C18.871 4.48772 16.4864 3.5 14 3.5Z" stroke="#4B3621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex flex-col">
                            <label className="font-display italic font-semibold text-[18px] md:text-[22px] leading-[28px]" style={{ color: "#4B3621" }}>
                                Date
                            </label>
                            <input
                                type="text"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                placeholder="Feb 14,2025"
                                className="font-body font-normal text-[16px] md:text-[18px] leading-[28px] bg-transparent outline-none w-full placeholder:text-[#4B3621]/60"
                                style={{ color: "#4B3621" }}
                            />
                        </div>
                    </div>

                    {/* Search Button */}
                    <button
                        onClick={handleSearch}
                        className="p-4 md:pr-6 transition-transform hover:scale-110 active:scale-95"
                        aria-label="Search"
                    >
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <circle cx="16.5" cy="16.5" r="10.5" stroke="#4B3621" strokeWidth="2" />
                            <path d="M24 24L31.5 31.5" stroke="#4B3621" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* ========== CSS Animations ========== */}
            <style jsx>{`
                @keyframes scroll-infinite {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-scroll-infinite {
                    animation: scroll-infinite 30s linear infinite;
                }
                .animate-scroll-infinite:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};