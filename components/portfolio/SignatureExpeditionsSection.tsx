/**
 * SignatureExpeditionsSection Component
 * 
 * Section displaying signature expeditions with 3 large image cards.
 * Features Safari of Dubai, Alaska Snowfall, and Japan Culture.
 * 
 * Design specs from Figma:
 * - Background: #FFFCF5
 * - Section title: Playfair Display italic, 28px, 600 weight
 * - Cards: 418x487px with 12px border radius
 */

import React from 'react';
import ExpeditionCard, { ExpeditionItem } from './ExpeditionCard';

// Sample expeditions data
const expeditionsData: ExpeditionItem[] = [
  {
    id: '1',
    slug: 'safari-of-dubai',
    title: 'Safari of Dubai',
    image: '/images/portfolio/cards/signature-1.png',
  },
  {
    id: '2',
    slug: 'alaska-snowfall',
    title: 'Alaska Snowfall',
    image: '/images/portfolio/cards/signature-2.png',
  },
  {
    id: '3',
    slug: 'japan-culture',
    title: 'Japan Culture',
    image: '/images/portfolio/cards/signature-3.png',
  },
];

interface SignatureExpeditionsSectionProps {
  expeditions?: ExpeditionItem[];
}

const SignatureExpeditionsSection: React.FC<SignatureExpeditionsSectionProps> = ({
  expeditions = expeditionsData,
}) => {
  return (
    <section className="relative w-full bg-[#FFFCF5] py-12 md:py-16 lg:py-[52px]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-10 xl:px-20">
        {/* Section Title */}
        <h2 className="font-display italic font-semibold text-[24px] md:text-[26px] lg:text-[28px] leading-[30px] md:leading-[35px] lg:leading-[37px] text-brand-brown mb-8 md:mb-10 lg:mb-[69px]">
          Signature Expeditions
        </h2>

        {/* Expeditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[13px]">
          {expeditions.map((expedition, index) => (
            <div
              key={expedition.id}
              className={`flex justify-center ${index === 2 ? "md:col-span-2 md:px-[calc(25%+8px)] lg:col-span-1 lg:px-0" : ""}`}
            >
              <div className="w-full max-w-[418px]">
                <ExpeditionCard expedition={expedition} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureExpeditionsSection;

