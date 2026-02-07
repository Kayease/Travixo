/**
 * Blog2ContentSection Component
 *
 * Displays a list of blog posts with images, titles, descriptions, dates, and read more links.
 *
 * Design specs from Figma:
 * - Background: #FFFCF5
 * - Card dimensions: 1280px x 417px with white background, border, shadow
 * - Image: 511px x 381px on the left
 * - Content on the right with title, description, date, and read more link
 * - Load More button at the bottom
 */

import React from "react";
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
    image: "/images/blog2/frame-482.png",
    date: "13 May, 2026",
    slug: "discover-the-world",
  },
  {
    id: "2",
    title: "Travel Experiences Designed for You",
    description:
      "No two travelers are the same. Some seek adventure, others crave relaxation, and many want a little of both. That's why we focus on creating travel experiences that match your pace, interests, and style. From cultural tours and nature escapes to luxury getaways and budget-friendly trips, our goal is to turn your travel dreams into reality—without stress or compromise...",
    image: "/images/blog2/frame-482-1.png",
    date: "13 May, 2026",
    slug: "designed-for-you",
  },
  {
    id: "3",
    title: "Destinations Worth Exploring",
    description:
      "The world is full of places that leave a lasting impression. Wander through historic streets, taste local flavors, meet new people, and discover hidden gems beyond the typical tourist routes. Each destination offers something unique, and every trip is an opportunity to learn, grow, and reconnect—with the world and yourself...",
    image: "/images/blog2/frame-482-2.png",
    date: "13 May, 2026",
    slug: "destinations-exploring",
  },
];

const Blog2ContentSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFCF5] py-[52px]">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
        {/* Blog Posts Grid */}
        <div className="flex flex-col gap-[12px] mb-[52px]">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-black/20 shadow-[0px_0px_4px_rgba(0,0,0,0.1)] rounded-xl w-full max-w-[1280px] min-h-[417px] mx-auto flex flex-col lg:flex-row items-center p-4 lg:px-[18px] gap-6 lg:gap-[18px]"
            >
              {/* Image */}
              <div className="relative w-full lg:w-[511px] h-[250px] lg:h-[381px] rounded-xl overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 511px"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center relative min-h-[381px] py-4">
                {/* Title */}
                <h2 className="font-display italic font-semibold text-[24px] leading-[32px] text-[#4B3621] mb-[19px]">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="font-body font-normal text-sm md:text-[20px] leading-normal lg:leading-[30px] text-[#4B3621] mb-[18px]">
                  {post.description}
                </p>

                {/* Date */}
                <p className="font-body font-normal text-base md:text-[18px] leading-[27px] text-[#4B3621] mb-[18px]">
                  {post.date}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}?from=blog2`}
                  className="flex items-center gap-2 font-body font-normal text-[14px] leading-[17px] text-[#4B3621] hover:text-[#FF6E00] transition-colors group w-fit"
                >
                  <span className="font-semibold">Read More</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="#FF6E00"
                      strokeWidth="1.5"
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
        <div className="flex justify-center">
          <Button variant="primary" size="lg" className="w-[200px]">
            Load More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog2ContentSection;
