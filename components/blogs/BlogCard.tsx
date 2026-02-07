"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * BlogCard Props Interface
 * Defines the structure for blog post data
 */
export interface BlogCardProps {
  /** Unique identifier for the blog post */
  id: string | number;
  /** Blog post title */
  title: string;
  /** Publication date string */
  date: string;
  /** URL to the blog post image */
  imageUrl: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Link to the full blog post */
  slug?: string;
}

/**
 * BlogCard Component
 *
 * A reusable card component for displaying blog post previews.
 * Features an image, title, date, and "Read More" link.
 *
 * Design Specifications (from Figma):
 * - Card: 418x590px, border-radius 12px
 * - Border: 1px solid rgba(0,0,0,0.2)
 * - Shadow: drop-shadow(0px 0px 4px rgba(0,0,0,0.1))
 * - Image area: 418x357px
 * - Title: Playfair Display, italic, 600 weight, 24px, #4B3621
 * - Date: Poppins, 400 weight, 18px, #4B3621
 * - Read More: 14px with orange arrow icon
 *
 * @param {BlogCardProps} props - Blog post data
 * @returns {JSX.Element} The rendered blog card
 */
export const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  date,
  imageUrl,
  imageAlt,
  slug = "#",
}) => {
  return (
    <article
      className="group w-full bg-white overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{
        border: "1px solid rgba(0, 0, 0, 0.2)",
        filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1))",
        borderRadius: "12px",
      }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-418/357 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt || title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 418px"
        />
      </div>

      {/* Content Container */}
      <div className="p-4 md:p-[18px] flex flex-col gap-3 md:gap-4">
        {/* Blog Title - Playfair Display Italic */}
        <h3 className="font-display italic font-semibold text-lg md:text-xl lg:text-[24px] leading-[1.33] text-brand-brown line-clamp-3">
          {title}
        </h3>

        {/* Publication Date - Poppins */}
        <time
          className="font-body font-normal text-base md:text-[18px] leading-[27px] text-brand-brown"
          dateTime={date}
        >
          {date}
        </time>

        {/* Read More Link */}
        <Link
          href={slug}
          className="inline-flex items-center justify-center gap-2 text-brand-brown hover:text-brand-orange transition-colors duration-300 mt-1"
        >
          <span className="font-body font-normal text-sm leading-[17px]">
            Read More
          </span>
          {/* Arrow Icon */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15"
              stroke="#FF6E00"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
