"use client";

/**
 * MilestoneCard Component
 * 
 * Card displaying a travel milestone/achievement with icon, title, and description.
 * 
 * Design specs from Figma:
 * - Card: 246x227px, white background, 1px border, radius 12px
 * - Icon: 46x46px, orange #FF6E00
 * - Title: Playfair Display italic, 24px, 600 weight
 * - Description: Poppins 14px, 400 weight, color rgba(75,54,33,0.6)
 */

import React from 'react';
import Image from 'next/image';

export interface MilestoneData {
  id: string;
  title: string;
  description: string;
  icon: 'alpine' | 'beach' | 'metropolis';
}

interface MilestoneCardProps {
  milestone: MilestoneData;
}

const MilestoneCard: React.FC<MilestoneCardProps> = React.memo(({ milestone }) => {
  // Get icon image path based on type
  const getIconPath = () => {
    switch (milestone.icon) {
      case 'alpine':
        return '/images/history/lineicons_alpinejs@4x.png';
      case 'beach':
        return '/images/history/beachWanderer.png';
      case 'metropolis':
        return '/images/history/mdi_building.png';
      default:
        return '';
    }
  };

  return (
    <div className="relative bg-white border border-[#4B3621]/40 rounded-xl w-full max-w-[246px] h-[227px]">
      {/* Icon - positioned at left: 18px, top: 21px */}
      <div className="absolute left-[18px] top-[21px] w-[46px] h-[46px]">
        <Image
          src={getIconPath()}
          alt={milestone.title}
          width={46}
          height={46}
          className="object-contain"
        />
      </div>

      {/* Title - positioned at top: 75px, centered */}
      <h4 className="absolute left-[18px] top-[75px] font-display italic font-semibold text-[24px] leading-[30px] text-[#4B3621] milestone-title">
        {milestone.title}
      </h4>

      {/* Description - positioned at left: 18px, top: 113px, width: 210px, height: 96px */}
      <p className="absolute left-[18px] top-[113px] w-[210px] h-[96px] font-body font-normal text-[14px] leading-[24px] text-[#4B3621]/60 overflow-hidden milestone-description">
        {milestone.description}
      </p>

      {/* iPad Mini Portrait Specific Styles */}
      <style jsx>{`
        @media only screen and (min-width: 768px) and (max-width: 768px) and (orientation: portrait) {
          .milestone-title {
            font-size: 20px !important;
            line-height: 26px !important;
          }
          .milestone-description {
            font-size: 11px !important;
            line-height: 18px !important;
            width: 200px !important;
          }
        }
      `}</style>
    </div>
  );
});
MilestoneCard.displayName = "MilestoneCard";

export default MilestoneCard;
