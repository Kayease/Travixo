/**
 * TravelStatsCard Component
 * 
 * Card displaying user's travel statistics including
 * average duration, favorite region, miles flown, and a progress bar.
 * 
 * Design specs from Figma:
 * - Card: 469x280px, white background, 1px border, radius 12px
 * - Title: Playfair Display italic, 20px, 600 weight
 * - Labels: Playfair Display italic, 18px, 600 weight
 * - Values: Poppins medium, 18px
 * - Progress bar with "Global 60%" indicator
 */

import React from 'react';

interface TravelStatsCardProps {
  avgDuration?: string;
  favtRegion?: string;
  milesFlown?: string;
  globalProgress?: number;
}

const TravelStatsCard: React.FC<TravelStatsCardProps> = React.memo(({
  avgDuration = '14 Days',
  favtRegion = 'Asia Sea',
  milesFlown = '124k',
  globalProgress = 60,
}) => {
  return (
    <div className="relative bg-white border border-[#4B3621]/40 rounded-xl w-full sm:w-[469px] h-auto sm:h-[280px] p-5 sm:p-0">
      {/* Card Title - positioned at 18px, 24px from top */}
      <h3 className="relative sm:absolute sm:left-[18px] sm:top-6 font-display italic font-semibold text-[20px] leading-[30px] text-[#4B3621] mb-6 sm:mb-0">
        Travel stats
      </h3>

      {/* Stats List - positioned absolutely as per Figma */}
      {/* Avg. Duration - top: 86px */}
      <div className="relative sm:absolute sm:left-[18px] sm:top-[86px] flex items-center justify-between w-full sm:w-[433px] mb-4 sm:mb-0">
        <span className="font-display italic font-semibold text-[18px] leading-[30px] text-[#4B3621]">
          Avg. Duration
        </span>
        <span className="font-body font-medium text-[18px] leading-[30px] text-[#4B3621]">
          {avgDuration}
        </span>
      </div>

      {/* Favt. Region - top: 124px */}
      <div className="relative sm:absolute sm:left-[18px] sm:top-[124px] flex items-center justify-between w-full sm:w-[433px] mb-4 sm:mb-0">
        <span className="font-display italic font-semibold text-[18px] leading-[30px] text-[#4B3621]">
          Favt. Region
        </span>
        <span className="font-body font-medium text-[18px] leading-[30px] text-[#4B3621]">
          {favtRegion}
        </span>
      </div>

      {/* Miles Flown - top: 162px */}
      <div className="relative sm:absolute sm:left-[18px] sm:top-[162px] flex items-center justify-between w-full sm:w-[433px] mb-6 sm:mb-0">
        <span className="font-display italic font-semibold text-[18px] leading-[30px] text-[#4B3621]">
          Miles Flown
        </span>
        <span className="font-body font-medium text-[18px] leading-[30px] text-[#4B3621]">
          {milesFlown}
        </span>
      </div>

      {/* Progress Bar Container - top: 216px, width: 431px */}
      <div className="relative sm:absolute sm:left-5 sm:top-[216px] w-full sm:w-[431px]">
        {/* Progress Track */}
        <div className="relative w-full h-[2px] border-[0.2px] border-[#4B3621]/40 rounded-xl">
          {/* Progress Fill */}
          <div
            className="absolute left-0 top-0 h-[2px] bg-[#FF6E00] rounded-xl transition-all duration-500"
            style={{ width: `${globalProgress}%` }}
          />
        </div>

        {/* Progress Label - top: 226px (10px below progress bar) */}
        <p className="relative sm:absolute sm:left-0 sm:top-[10px] font-display italic font-semibold text-[12px] leading-[30px] text-[#FF6E00] mt-2 sm:mt-0">
          Global {globalProgress}%
        </p>
      </div>
    </div>
  );
});
TravelStatsCard.displayName = "TravelStatsCard";

export default TravelStatsCard;
