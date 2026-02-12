/**
 * VoiceOfDiscoverySection Component
 * 
 * Section showcasing discovery stories/blogs with 3 cards.
 * 
 * Design specs from Figma:
 * - Background: #FFF7E5
 * - Title: Playfair Display italic, 28px, centered
 * - Subtitle: Poppins 18px, centered
 * - 3 story cards in a grid
 */

import React from 'react';
import DiscoveryCard, { DiscoveryItem } from './DiscoveryCard';

// Sample discovery data
const discoveryData: DiscoveryItem[] = [
  {
    id: '1',
    slug: 'safari-explorer-africa',
    title: "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    image: '/images/portfolio/cards/voice-1.png',
    date: '13 May, 2026',
  },
  {
    id: '2',
    slug: 'hot-air-balloon-adventure',
    title: "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    image: '/images/portfolio/cards/voice-2.png',
    date: '13 May, 2026',
  },
  {
    id: '3',
    slug: 'african-safari-group',
    title: "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    image: '/images/portfolio/cards/impact-1.png',
    date: '13 May, 2026',
  },
];

interface VoiceOfDiscoverySectionProps {
  discoveries?: DiscoveryItem[];
}

const VoiceOfDiscoverySection: React.FC<VoiceOfDiscoverySectionProps> = ({
  discoveries = discoveryData,
}) => {
  return (
    <section className="relative w-full bg-[#FFF7E5] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-10 xl:px-20">
        {/* Section Header - Centered */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          {/* Title */}
          <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-3 md:mb-4">
            Voice of Discovery
          </h2>

          {/* Subtitle */}
          <p className="font-body font-medium text-base md:text-lg leading-[30px] text-brand-brown max-w-[646px] mx-auto">
            we create immersive and sustainable safari experiences that connect.
          </p>
        </div>

        {/* Discovery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {discoveries.map((item) => (
            <DiscoveryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceOfDiscoverySection;

