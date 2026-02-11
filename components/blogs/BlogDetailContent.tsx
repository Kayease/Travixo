"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

/**
 * BlogDetailContent Component
 *
 * Recreated with precise Figma specifications from Desktop - 45.
 * Features absolute positioning for desktop layout and the provided video asset.
 */
export const BlogDetailContent: React.FC = () => {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const backLink = from === "blog2" ? "/blog2" : "/blog";

  return (
    <section
      className="relative w-full overflow-hidden bg-[#FFFCF5]"
      style={{ minHeight: "1916px" }}
    >
      {/* Max-width container for alignment */}
      <div className="max-w-[1440px] mx-auto w-full h-full relative">
        {/* Back to Blog - Frame 338 */}
        <Link
          href={backLink}
          className="flex lg:absolute items-center gap-2 group px-5 lg:px-0 py-2 lg:py-0"
          style={{
            left: "297px",
            top: "52px",
          }}
        >
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="#4B3621"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-['Inter'] font-medium text-[14px] leading-[17px] text-[#4B3621] text-center whitespace-nowrap">
            Back to Blog
          </span>
        </Link>

        {/* Intro Paragraphs */}
        <div
          className="px-5 lg:px-0 lg:absolute"
          style={{
            left: "297px",
            top: "128px",
            width: "min(846px, 100%)",
            height: "auto",
            minHeight: "196px",
          }}
        >
          <div className="font-['Inter'] font-medium text-[20px] leading-[28px] text-[#4B3621] space-y-6">
            <p>
              No two travelers are the same. Some are driven by adventure and
              discovery, others seek peace, comfort, and relaxation, while many
              look for a perfect balance of both. Travel is deeply personal, and
              every journey should reflect your unique interests, pace, and
              expectations. That’s why we focus on creating thoughtfully curated
              travel experiences that feel effortless, inspiring, and truly
              memorable.
            </p>
            <p>
              That’s why we focus on creating thoughtfully curated travel
              experiences that feel effortless, inspiring, and truly memorable.
            </p>
          </div>
        </div>

        {/* Featured Video - Desktop 39 */}
        <div
          className="lg:absolute mx-auto mt-6 lg:mt-0 rounded-xl overflow-hidden shadow-sm"
          style={{
            width: "min(1280px, 95%)",
            height: "auto",
            aspectRatio: "1280/608",
            left: "calc(50% - min(1280px, 95%)/2)",
            top: "356px",
            maxHeight: "608px",
          }}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/images/blogDetail/blog-detail-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Main Detailed Content */}
        <div
          className="px-5 lg:px-0 lg:absolute mt-6 lg:mt-0"
          style={{
            left: "297px",
            top: "996px",
            width: "min(846px, 100%)",
            height: "auto",
            minHeight: "868px",
          }}
        >
          <div className="font-['Inter'] font-medium text-[20px] leading-[28px] text-[#4B3621] space-y-8 pb-12">
            <p>We offer experiences that include:</p>

            <ul className="space-y-6 list-none">
              <li>
                <span className="block font-bold">
                  Personalized travel planning
                </span>
                Custom itineraries designed around your preferences, schedule,
                and travel goals—so every trip feels tailor-made just for you.
              </li>
              <li>
                <span className="block font-bold">
                  Adventure and exploration tours
                </span>
                For thrill-seekers and explorers, our adventures include hiking,
                outdoor activities, scenic routes, and unforgettable experiences
                in breathtaking destinations.
              </li>
              <li>
                <span className="block font-bold">
                  Relaxation and leisure getaways
                </span>
                Perfect for travelers who want to unwind, recharge, and escape
                the everyday—featuring tranquil locations, comfortable stays,
                and slow-paced itineraries.
              </li>
              <li>
                <span className="block font-bold">
                  Cultural and heritage tours
                </span>
                Immerse yourself in local culture through historical landmarks,
                traditional cuisine, guided city tours, and authentic local
                experiences.
              </li>
              <li>
                <span className="block font-bold">
                  Nature and scenic escapes
                </span>
                Explore mountains, beaches, forests, and countryside
                destinations that offer natural beauty, fresh air, and peaceful
                surroundings.
              </li>
              <li>
                <span className="block font-bold">
                  Luxury travel experiences
                </span>
                Indulge in premium accommodations, private tours, exclusive
                services, and refined travel experiences crafted for comfort and
                elegance.
              </li>
              <li>
                <span className="block font-bold">
                  Budget-friendly travel options
                </span>
                Smartly planned trips that deliver great experiences while
                staying within your budget—without compromising on quality or
                comfort.
              </li>
              <li>
                <span className="block font-bold">
                  Hassle-free travel support
                </span>
                From accommodations and transportation to guided tours and
                logistics, we handle the details so you can travel with
                confidence and ease.
              </li>
            </ul>

            <div className="pt-8">
              <p>
                Our goal is simple: to turn your travel dreams into reality
                while removing the stress of planning. We take care of every
                detail so you can focus on exploring new places, creating
                lasting memories, and enjoying every moment of your
                journey—without compromise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailContent;
