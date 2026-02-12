/**
 * ScrapbookCard Component
 * 
 * Card displaying a past trip with destination image, name, and date.
 * 
 * Design specs from Figma:
 * - Card: 418x469px, white background, 1px border, radius 12px
 * - Image: Full width, 375px height
 * - Title: Playfair Display italic, 24px, 600 weight
 * - Date badge: 95x36px, orange #FF6E00, radius 12px
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ScrapbookItem {
  id: string;
  slug: string;
  destination: string;
  image: string;
  date: string;
}

interface ScrapbookCardProps {
  item: ScrapbookItem;
}

const ScrapbookCard: React.FC<ScrapbookCardProps> = React.memo(({ item }) => {
  return (
    <Link
      href={`/products/${item.slug}`}
      className="group block bg-white border border-brand-brown/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-418/375 overflow-hidden">
        <Image
          src={item.image}
          alt={item.destination}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 418px"
        />
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between px-4 py-4 md:px-5 md:py-5">
        {/* Destination Name */}
        <h3 className="font-display italic font-semibold text-xl md:text-[24px] leading-8 text-brand-brown">
          {item.destination}
        </h3>

        {/* Date Badge */}
        <span className="inline-flex items-center justify-center px-2.5 py-1.5 bg-brand-orange rounded-xl">
          <span className="font-display italic font-semibold text-base md:text-lg leading-6 text-white">
            {item.date}
          </span>
        </span>
      </div>
    </Link>
  );
});
ScrapbookCard.displayName = "ScrapbookCard";

export default ScrapbookCard;
