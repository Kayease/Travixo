/**
 * ImpactStoriesSection Component
 * 
 * Section showcasing impact stories with a large image, stats card,
 * and content about sustainable tourism and community empowerment.
 * 
 * Design specs from Figma:
 * - Background: #FFF7E5
 * - Image: 630x653px with shadow and rounded corners
 * - Stats card: 261x131px with 10,000+ counter
 * - Content: Impact Stories title, description, and feature points
 */

import React from 'react';
import Image from 'next/image';

const ImpactStoriesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FFF7E5] py-12 md:py-16 lg:py-[52px]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24">
          {/* Left: Image with Stats Card */}
          <div className="relative w-full lg:w-[630px] flex-shrink-0">
            {/* Main Image */}
            <div className="relative w-full aspect-[630/653] rounded-xl overflow-hidden shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop"
                alt="Traveler exploring the city - Impact Stories"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 630px"
              />
            </div>

            {/* Stats Card - Overlapping */}
            <div className="absolute bottom-[-40px] md:bottom-[-50px] right-4 md:right-0 lg:right-[-40px] bg-[#FFFCF5] border border-brand-brown/20 rounded-xl p-4 md:p-5 w-[200px] md:w-[261px] shadow-sm">
              <h3 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-2">
                10,000+
              </h3>
              <p className="font-body font-medium text-sm leading-[25px] text-brand-brown">
                A Curated odyssey through the world&apos;s most
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 pt-8 lg:pt-20 xl:pt-28">
            {/* Section Title */}
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[25px] text-brand-brown mb-6 md:mb-8">
              Impact Stories
            </h2>

            {/* Description */}
            <p className="font-body font-medium text-base md:text-lg leading-[28px] md:leading-[30px] text-brand-brown mb-8 md:mb-10 max-w-[543px]">
              At travixo, we create immersive and sustainable safari experiences that connect travelers with Africa&apos;s beauty. Our goal is to offer authentic adventures while supporting local communities and protecting wildlife for future generations.
            </p>

            {/* Feature Points */}
            <div className="space-y-6">
              {/* Regenerative Tourism */}
              <div className="flex items-start gap-4">
                {/* Leaf Icon */}
                <div className="w-7 h-7 flex-shrink-0 mt-0.5">
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M21 7C21 7 19 3 14 3C9 3 4 7 4 14C4 21 9 25 14 25C14 25 14 19 14 14C14 9 21 7 21 7Z"
                      fill="#FF6E00"
                    />
                    <path
                      d="M14 14C14 14 18 12 21 7"
                      stroke="#FF6E00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display italic font-semibold text-lg leading-[30px] text-brand-brown mb-1">
                    Regenerative Tourism
                  </h4>
                  <p className="font-body font-normal text-sm leading-[25px] text-brand-brown">
                    we create immersive and sustainable safari experiences that connect.
                  </p>
                </div>
              </div>

              {/* Community Empowerment */}
              <div className="flex items-start gap-4">
                {/* People Icon */}
                <div className="w-7 h-7 flex-shrink-0 mt-0.5">
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="8" r="4" fill="#FF6E00" />
                    <path
                      d="M6 24C6 19.5817 9.58172 16 14 16C18.4183 16 22 19.5817 22 24"
                      fill="#FF6E00"
                    />
                    <circle cx="22" cy="10" r="3" fill="#FF6E00" opacity="0.6" />
                    <circle cx="6" cy="10" r="3" fill="#FF6E00" opacity="0.6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display italic font-semibold text-lg leading-[30px] text-brand-brown mb-1">
                    Community Empowerment
                  </h4>
                  <p className="font-body font-normal text-sm leading-[25px] text-brand-brown">
                    we create immersive and sustainable safari experiences that connect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStoriesSection;
