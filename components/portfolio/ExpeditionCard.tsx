/**
 * ExpeditionCard Component
 * 
 * Card displaying a signature expedition with large image and title.
 * 
 * Design specs from Figma:
 * - Card: 418x487px, 1px border rgba(75,54,33,0.2), shadow, radius 12px
 * - Title: Playfair Display italic, 28px, 600 weight
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ExpeditionItem {
  id: string;
  slug: string;
  title: string;
  image: string;
}

interface ExpeditionCardProps {
  expedition: ExpeditionItem;
}

const ExpeditionCard: React.FC<ExpeditionCardProps> = ({ expedition }) => {
  return (
    <Link
      href={`/tours/${expedition.slug}`}
      className="group block cursor-pointer"
    >
      {/* Image Card */}
      <div className="relative w-full aspect-[418/487] rounded-xl overflow-hidden mb-4 md:mb-5">
        <Image
          src={expedition.image}
          alt={expedition.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 418px"
        />
      </div>

      {/* Title */}
      <h3 className="font-display italic font-semibold text-[22px] md:text-[26px] lg:text-[28px] leading-[30px] md:leading-[35px] lg:leading-[37px] text-brand-brown">
        {expedition.title}
      </h3>
    </Link>
  );
};

export default ExpeditionCard;
