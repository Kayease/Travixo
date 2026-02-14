"use client";

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
      href="/paris"
      className="group block bg-white border border-brand-brown/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer scrapbook-card"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-418/375 overflow-hidden scrapbook-image">
        <Image
          src={item.image}
          alt={item.destination}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 418px"
        />
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between px-4 py-4 md:px-5 md:py-5 scrapbook-footer">
        {/* Destination Name */}
        <h3 className="font-display italic font-semibold text-xl md:text-[24px] leading-8 text-brand-brown scrapbook-title">
          {item.destination}
        </h3>

        {/* Date Badge */}
        <span className="inline-flex items-center justify-center px-2.5 py-1.5 bg-brand-orange rounded-xl scrapbook-badge">
          <span className="font-display italic font-semibold text-base md:text-lg leading-6 text-white">
            {item.date}
          </span>
        </span>
      </div>

      {/* iPad Mini Portrait Specific Styles */}
      <style jsx>{`
        @media only screen and (min-width: 768px) and (max-width: 768px) and (orientation: portrait) {
          .scrapbook-card {
            width: 326px !important;
            max-width: 326px !important;
            height: 292.46px !important;
          }
          
          .scrapbook-image {
            height: 232px !important;
            aspect-ratio: auto !important;
          }
          
          .scrapbook-footer {
            padding: 12px 16px !important;
            min-height: 60.46px !important;
          }
          
          .scrapbook-title {
            font-size: 18px !important;
            line-height: 24px !important;
          }
          
          .scrapbook-badge {
            padding: 6px 10px !important;
          }
          
          .scrapbook-badge span {
            font-size: 14px !important;
            line-height: 20px !important;
          }
        }
      `}</style>
    </Link>
  );
});
ScrapbookCard.displayName = "ScrapbookCard";

export default ScrapbookCard;
