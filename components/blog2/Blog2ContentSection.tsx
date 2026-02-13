"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Discover the World, One Journey at a Time",
    description:
      "Travel is more than visiting new places—it's about creating memories, experiencing cultures, and seeing the world from a fresh perspective. Whether you're dreaming of peaceful beaches, vibrant cities, or breathtaking mountain escapes, every journey has a story waiting to be told. we believe travel should feel exciting, effortless, and...",
    image: "/images/blog2/cards/blog-1.png",
    date: "13 May, 2026",
    slug: "discover-the-world",
  },
  {
    id: "2",
    title: "Travel Experiences Designed for You",
    description:
      "No two travelers are the same. Some seek adventure, others crave relaxation, and many want a little of both. That's why we focus on creating travel experiences that match your pace, interests, and style. From cultural tours and nature escapes to luxury getaways and budget-friendly trips, our goal is to turn your travel dreams into reality—without stress or compromise...",
    image: "/images/blog2/cards/blog-2.png",
    date: "13 May, 2026",
    slug: "designed-for-you",
  },
  {
    id: "3",
    title: "Destinations Worth Exploring",
    description:
      "The world is full of places that leave a lasting impression. Wander through historic streets, taste local flavors, meet new people, and discover hidden gems beyond the typical tourist routes. Each destination offers something unique, and every trip is an opportunity to learn, grow, and reconnect—with the world and yourself...",
    image: "/images/blog2/cards/blog-3.png",
    date: "13 May, 2026",
    slug: "destinations-exploring",
  },
  {
    id: "4",
    title: "Embracing the Unexpected in Travel",
    description:
      "Sometimes the best moments are the ones you didn't plan for. A wrong turn leading to a hidden café, a chance encounter with a local artisan, or witnessing a sunset from an unmapped viewpoint. Travel teaches us to be adaptable and find joy in the surprises along the way...",
    image: "/images/room/cards/room-card-2.png",
    date: "13 May, 2026",
    slug: "embracing-unexpected",
  },
];

const Blog2ContentSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 1);
  };

  const visiblePosts = blogPosts.slice(0, visibleCount);

  return (
    <section className="w-full bg-[#FFFCF5] py-[52px]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-10 xl:px-20">
        {/* Blog Posts Grid */}
        <div className="flex flex-col gap-[12px] mb-[52px]">
          {visiblePosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-black/20 shadow-[0px_0px_4px_rgba(0,0,0,0.1)] rounded-xl w-full max-w-[1280px] min-h-auto lg:min-h-[417px] mx-auto flex flex-col lg:flex-row items-center p-4 lg:p-[12px] xl:px-[18px] gap-6 lg:gap-[24px] xl:gap-[18px]"
            >
              {/* Image */}
              <div className="relative w-full lg:w-[440px] xl:w-[511px] h-[250px] lg:h-[350px] xl:h-[381px] rounded-xl overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 440px, 511px"
                />
              </div>

              {/* Content */}
              <div className="w-full flex-1 flex flex-col justify-center relative min-h-auto lg:min-h-[381px] py-4">
                {/* Title */}
                <h2 className="font-display italic font-semibold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] leading-tight md:leading-[32px] text-[#4B3621] mb-3 md:mb-[15px] xl:mb-[19px]">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="font-body font-normal text-sm md:text-base lg:text-lg xl:text-[20px] leading-relaxed lg:leading-[28px] xl:leading-[30px] text-[#4B3621] mb-[15px] xl:mb-[18px]">
                  {post.description}
                </p>

                {/* Date */}
                <p className="font-body font-normal text-base md:text-[16px] xl:text-[18px] leading-[27px] text-[#4B3621] mb-[15px] xl:mb-[18px]">
                  {post.date}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}?from=blog2`}
                  className="flex items-center gap-2 font-body font-normal text-[14px] leading-[17px] text-[#4B3621] hover:text-[#FF6E00] transition-colors group w-fit"
                >
                  <span className="font-semibold">Read More</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#FF6E00"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < blogPosts.length && (
          <div className="flex justify-center">
            <Button
              variant="primary"
              size="lg"
              className="w-[200px]"
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog2ContentSection;
