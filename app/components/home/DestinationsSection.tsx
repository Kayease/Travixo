"use client";
import React, { useRef } from "react";
import Image from "next/image";

/**
 * Destination data for the carousel
 */
const DESTINATIONS = [
  {
    id: "maldives",
    name: "Maldives",
    listings: 3,
    image: "/images/home/destination/frame-21.png",
  },
  {
    id: "dubai",
    name: "Dubai",
    listings: 3,
    image: "/images/home/destination/frame-21-1.png",
  },
  {
    id: "india",
    name: "India",
    listings: 3,
    image: "/images/home/destination/frame-21-2.png",
  },
  {
    id: "japan",
    name: "Japan",
    listings: 3,
    image: "/images/home/destination/frame-21-3.png",
  },
  {
    id: "south-korea",
    name: "South Korea",
    listings: 3,
    image: "/images/home/destination/frame-21-4.png",
  },
];

/**
 * Plane Icon for the badge
 */
const PlaneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 2.5L9.16667 10.8333M17.5 2.5L12.5 17.5L9.16667 10.8333M17.5 2.5L2.5 7.5L9.16667 10.8333"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * DestinationCard Component
 * Figma Component 9: exact specs from Frame 22 / Frame 23
 * Card: 418×657px, border-radius: 400px 400px 0px 200px
 * Image (Frame 21): 418×519px, top 0, border-radius 1000px
 * Overlay (Frame 23): top 316px, default 24px height + opacity 0, hover 341px + #FF8930
 * Badge: 93×32px, top 435px, Poppins 400 16px/24px #FFF
 * TRAVEL TO: top 537px, Inter 500 18px/22px, #4B3621 → #FFF on hover
 * Name: top 577px, Playfair Display italic 500 28px/37px, #4B3621 → #FFF on hover
 */
const DestinationCard = ({
  name,
  listings,
  image,
}: {
  name: string;
  listings: number;
  image: string;
}) => (
  <div
    className="shrink-0 bg-transparent! relative cursor-pointer group transition-all duration-500 ease-in-out box-border overflow-hidden hover:shadow-[0px_0px_4px_rgba(255,255,255,0.1)]"
    style={{
      width: "418px",
      height: "657px",
      background: "#FFFFFF",
      border: "1px solid #FF8930",
      borderRadius: "400px 400px 0px 300px",
    }}
    onClick={() => console.log(`Viewing destination: ${name}`)}
  >
    {/* Image Container - Frame 21 */}
    <div
      className="absolute overflow-hidden box-border"
      style={{
        width: "418px",
        height: "519px",
        left: "calc(50% - 418px/2)",
        top: "0px",
        borderRadius: "1000px",
        background: "#FFFFFF",
        zIndex: 1,
      }}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        style={{ transformOrigin: "top center" }}
        sizes="418px"
      />
    </div>

    {/* Hover overlay - Frame 23: textured hover-bg.png (longhand only to avoid style conflict) */}
    <div
      className="absolute left-0 h-[24px] group-hover:h-[341px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-0"
      style={{
        width: "419px",
        top: "316px",
        backgroundColor: "#FF8930",
        backgroundImage: "url('/images/home/destination/hover-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />

    {/* TRAVEL TO: top 537px, Inter 500 18px/22px */}
    <span
      className="absolute left-1/2 -translate-x-1/2 text-center z-3 transition-colors duration-500 group-hover:text-white"
      style={{
        width: "98px",
        top: "537px",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "22px",
        color: "#4B3621",
      }}
    >
      TRAVEL TO
    </span>

    {/* Destination name: top 577px, Playfair Display italic 500 28px/37px */}
    <h3
      className="absolute left-1/2 -translate-x-1/2 text-center font-display italic z-3 transition-colors duration-500 group-hover:text-white"
      style={{
        top: "577px",
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "37px",
        color: "#4B3621",
      }}
    >
      {name}
    </h3>
  </div>
);

/**
 * DestinationsSection Component
 */
export const DestinationsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);

  // Auto-scroll logic using requestAnimationFrame for maximum smoothness
  React.useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;
    const speed = 0.08; // Increased speed for better visibility

    const step = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isDragging && !isHovering && scrollRef.current) {
        scrollRef.current.scrollLeft += speed * deltaTime;

        // Midpoint of the duplicated items
        const halfScroll = scrollRef.current.scrollWidth / 2;

        // Reset to beginning when we've scrolled through the first set
        if (scrollRef.current.scrollLeft >= halfScroll) {
          scrollRef.current.scrollLeft -= halfScroll;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, isHovering]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovering(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Duplicate the destinations for a seamless visual loop
  const displayDestinations = [...DESTINATIONS, ...DESTINATIONS];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#FFF9F0",
        backgroundImage: "url('/images/hero-bg-texture.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "761px",
      }}
    >
      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex">
          {/* Left Content */}
          <div className="w-[422px] shrink-0 pl-[80px] pt-[138px]">
            <div
              className="inline-flex items-center justify-center gap-2 w-[204px] h-[30px] rounded-xl mb-[32px] cursor-default"
              style={{ backgroundColor: "#FF6E00" }}
            >
              <PlaneIcon />
              <span className="font-display italic font-medium text-[14px] leading-[19px] text-white">
                DESTINATION LIST
              </span>
            </div>

            <h2 className="font-display italic font-semibold text-[28px] leading-[37px] text-brand-brown mb-[18px] max-w-[322px]">
              Explore the Beautiful Places Around World
            </h2>

            <p className="font-body font-medium text-[18px] leading-[27px] text-brand-brown mb-[52px] max-w-[390px]">
              Flexible classes refers to the process of acquiring is knowledge
              free.
            </p>

            <button
              className="w-[300px] h-[50px] bg-white border border-brand-orange rounded-[12px] font-display italic font-normal text-[18px] leading-[24px] text-brand-orange overflow-hidden transition-all duration-300 relative group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => console.log("Discovering more destinations...")}
            >
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange group-hover:h-full transition-all duration-300 ease-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Discover More
              </span>
            </button>
          </div>

          {/* Right Content */}
          <div className="flex-1 pt-[52px] overflow-hidden">
            <div
              ref={scrollRef}
              className={`flex gap-8 overflow-x-auto pb-8 pr-8 select-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setIsHovering(true)}
            >
              {displayDestinations.map((destination, idx) => (
                <DestinationCard
                  key={`${destination.id}-${idx}`}
                  name={destination.name}
                  listings={destination.listings}
                  image={destination.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
