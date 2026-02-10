"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

/**
 * Destination data for the carousel.
 * Card images live in public/images/home/destination/cards/ (e.g. maldives.png, japan.png).
 */
const DESTINATIONS = [
  {
    id: "maldives",
    name: "Maldives",
    listings: 3,
    image: "/images/home/destination/cards/maldives.png",
  },
  {
    id: "dubai",
    name: "Dubai",
    listings: 3,
    image: "/images/home/destination/cards/dubai.png",
  },
  {
    id: "india",
    name: "India",
    listings: 3,
    image: "/images/home/destination/cards/india2.png",
  },
  {
    id: "japan",
    name: "Japan",
    listings: 3,
    image: "/images/home/destination/cards/japan.png",
  },
  {
    id: "south-korea",
    name: "South Korea",
    listings: 3,
    image: "/images/home/destination/cards/south-korea.png",
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
 * Card uses initial-bg.png behind image and text; hover shows hover-bg.png overlay.
 * Card: 418×657px, border-radius 400px 400px 0 300px
 * Image: 418×519px, top 0, border-radius 1000px
 * Overlay: from 316px, expands on hover and shows hover-bg.png
 */
const DestinationCard = ({
  name,
  image,
}: {
  name: string;
  listings: number;
  image: string;
}) => (
  <Link
    href="/paris"
    className="shrink-0 relative cursor-pointer group block overflow-hidden transition-all duration-500 ease-in-out hover:shadow-[0px_0px_4px_rgba(255,255,255,0.1)]"
    style={{
      width: "418px",
      height: "657px",
      borderRadius: "400px 400px 0px 300px",
      border: "1px solid #FF8930",
      backgroundImage: "url('/images/home/destination/initial-bg.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    {/* Image container - behind orange on hover; image stays in front only in top area */}
    <div
      className="absolute overflow-hidden"
      style={{
        width: "418px",
        height: "519px",
        left: "calc(50% - 418px/2)",
        top: 0,
        borderRadius: "1000px",
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

    {/* Orange hover: hover-bg.png in place of white, in front of image in lower band */}
    <div
      className="absolute left-0 w-full h-[24px] group-hover:h-[341px] transition-all duration-500 ease-in-out"
      style={{
        top: "316px",
        zIndex: 0,
        backgroundImage: "url('/images/home/destination/hover-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />

    {/* TRAVEL TO */}
    <span
      className="absolute left-1/2 -translate-x-1/2 text-center transition-colors duration-500 ease-in-out group-hover:text-white"
      style={{
        width: "98px",
        top: "537px",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "22px",
        color: "#4B3621",
        zIndex: 3,
      }}
    >
      TRAVEL TO
    </span>

    {/* Destination name */}
    <h3
      className="absolute left-1/2 -translate-x-1/2 text-center font-display italic transition-colors duration-500 ease-in-out group-hover:text-white"
      style={{
        top: "577px",
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "37px",
        color: "#4B3621",
        zIndex: 3,
      }}
    >
      {name}
    </h3>
  </Link>
);

/**
 * DestinationsSection Component
 */
export const DestinationsSection = () => {
  const router = useRouter();
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
        minHeight: "761px",
        backgroundImage: "url('/images/home/destination/destination-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#FFF9F0",
      }}
    >
      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-[422px] shrink-0 px-4 pt-10 lg:pl-[80px] lg:pt-[138px]">
            <div
              className="inline-flex items-center justify-center gap-2 w-[204px] h-[30px] rounded-xl mb-[32px] cursor-default"
              style={{ backgroundColor: "#FF6E00" }}
            >
              <PlaneIcon />
              <span className="font-display italic font-medium text-[14px] leading-[19px] text-white">
                DESTINATION LIST
              </span>
            </div>

            <h2 className="font-display italic font-semibold text-2xl lg:text-[28px] leading-[37px] text-brand-brown mb-[18px] max-w-none lg:max-w-[322px]">
              Explore the Beautiful Places Around World
            </h2>

            <p className="font-body font-medium text-base lg:text-[18px] leading-[27px] text-brand-brown mb-8 lg:mb-[52px] max-w-none lg:max-w-[390px]">
              Flexible classes refers to the process of acquiring is knowledge
              free.
            </p>

            <button
              className="w-[300px] h-[50px] bg-white border border-brand-orange rounded-[12px] font-display italic font-normal text-[18px] leading-[24px] text-brand-orange overflow-hidden transition-all duration-300 relative group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => router.push("/destinations")}
            >
              <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange group-hover:h-full transition-all duration-300 ease-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Discover More
              </span>
            </button>
          </div>

          {/* Right Content */}
          <div className="flex-1 pt-8 lg:pt-[52px] overflow-hidden">
            <div
              ref={scrollRef}
              className={`flex gap-8 overflow-x-auto pb-8 pr-8 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"
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