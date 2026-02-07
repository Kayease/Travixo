/**
 * DiscoveryCard Component
 *
 * Blog/story card for the Voice of Discovery section.
 *
 * Design specs from Figma:
 * - Card: 418x590px, cream background, border, shadow, radius 12px
 * - Image: 418x357px
 * - Title: Playfair Display italic, 24px, 600 weight
 * - Date: Poppins 18px, 400 weight
 * - Read More link with arrow
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface DiscoveryItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
}

interface DiscoveryCardProps {
  item: DiscoveryItem;
}

const DiscoveryCard: React.FC<DiscoveryCardProps> = ({ item }) => {
  return (
    <article className="bg-[#FFFCF5] border border-black/20 shadow-[0px_0px_4px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden">
      {/* Image */}
      <div className="relative w-full aspect-418/357">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 418px"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        {/* Title */}
        <h3 className="font-display italic font-semibold text-xl md:text-[24px] leading-[28px] md:leading-[32px] text-brand-brown mb-3 md:mb-4 line-clamp-3">
          {item.title}
        </h3>

        {/* Date */}
        <p className="font-body font-normal text-base md:text-lg leading-[27px] text-brand-brown mb-4 md:mb-6">
          {item.date}
        </p>

        {/* Read More Link */}
        <Link
          href={`/blog/${item.slug}`}
          className="inline-flex items-center justify-center gap-2 w-full group"
        >
          <span className="font-body font-normal text-sm leading-[17px] text-brand-brown group-hover:text-brand-orange transition-colors">
            Read More
          </span>
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10H16M16 10L11 5M16 10L11 15"
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

export default DiscoveryCard;
