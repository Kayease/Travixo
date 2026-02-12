/**
 * HistoryContentSection Component
 * 
 * Main content section for the history page displaying:
 * - Travel Stats card (left)
 * - Curated Milestones section (right, 3 cards)
 * - Scrapbook Gallery section (3 destination cards)
 * 
 * Design specs from Figma:
 * - Background: #FFFCF5
 * - Section titles: Playfair Display italic, 28px, 600 weight
 */

import React from 'react';
import TravelStatsCard from './TravelStatsCard';
import MilestoneCard, { MilestoneData } from './MilestoneCard';
import ScrapbookCard, { ScrapbookItem } from './ScrapbookCard';

// Sample milestones data
const milestonesData: MilestoneData[] = [
  {
    id: '1',
    title: 'Alpine Explore',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
    icon: 'alpine',
  },
  {
    id: '2',
    title: 'Beach Wanderer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
    icon: 'beach',
  },
  {
    id: '3',
    title: 'Metropolis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
    icon: 'metropolis',
  },
];

// Sample scrapbook data
const scrapbookData: ScrapbookItem[] = [
  {
    id: '1',
    slug: 'bangkok',
    destination: 'Bangkok',
    image: '/images/history/cards/timeline-1.png',
    date: 'Jan 2025',
  },
  {
    id: '2',
    slug: 'japan',
    destination: 'Japan',
    image: '/images/history/cards/timeline-2.png',
    date: 'Jan 2025',
  },
  {
    id: '3',
    slug: 'indonesia',
    destination: 'Indonesia',
    image: '/images/history/cards/timeline-3.png',
    date: 'Jan 2025',
  },
];

interface HistoryContentSectionProps {
  milestones?: MilestoneData[];
  scrapbook?: ScrapbookItem[];
  travelStats?: {
    avgDuration: string;
    favtRegion: string;
    milesFlown: string;
    globalProgress: number;
  };
}

const HistoryContentSection: React.FC<HistoryContentSectionProps> = ({
  milestones = milestonesData,
  scrapbook = scrapbookData,
  travelStats = {
    avgDuration: '14 Days',
    favtRegion: 'Asia Sea',
    milesFlown: '124k',
    globalProgress: 60,
  },
}) => {
  return (
    <section className="relative w-full bg-[#FFFCF5] py-10 md:py-14 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-10 xl:px-20">
        {/* Top Section: Stats + Milestones */}
        <div className="flex flex-col xl:flex-row xl:items-end gap-8 xl:gap-10 mb-12 md:mb-16">
          {/* Left: Travel Stats Card */}
          <div className="w-full xl:w-auto shrink-0 flex justify-center">
            <TravelStatsCard
              avgDuration={travelStats.avgDuration}
              favtRegion={travelStats.favtRegion}
              milesFlown={travelStats.milesFlown}
              globalProgress={travelStats.globalProgress}
            />
          </div>

          {/* Right: Curated Milestones */}
          <div className="flex-1">
            {/* Section Title */}
            <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[30px] text-brand-brown mb-6 md:mb-8 text-center xl:text-left">
              Curated Milestones
            </h2>

            {/* Milestones Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 justify-center place-items-center">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="mx-auto w-full max-w-[246px]">
                  <MilestoneCard milestone={milestone} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Scrapbook Gallery */}
        <div>
          {/* Section Title */}
          <h2 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[30px] text-brand-brown mb-6 md:mb-8">
            Scrapbook Gallery
          </h2>

          {/* Scrapbook Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {scrapbook.map((item, index) => (
              <div
                key={item.id}
                className={`w-full max-w-[400px] ${index === 2 ? 'md:col-span-2 lg:col-span-1 flex justify-center lg:block' : ''}`}
              >
                <div className="w-full">
                  <ScrapbookCard item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryContentSection;

