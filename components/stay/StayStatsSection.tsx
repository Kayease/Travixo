/**
 * StayStatsSection Component
 * 
 * Displays key statistics about the accommodation including
 * guest ratings, hosted guests, room count, and service commitment.
 * Features large numbers with descriptive labels in a 4-column grid.
 */

import React from "react";

/**
 * Interface for stat item data
 */
interface StatItem {
  id: string;
  value: string;
  label: string;
}

/**
 * StatCard Component
 * Renders a single statistic with value and label
 */
const StatCard: React.FC<{ stat: StatItem }> = ({ stat }) => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-[18px] text-center">
      {/* Stat Value */}
      <span className="font-display text-3xl md:text-5xl lg:text-[52px] font-medium leading-tight lg:leading-[69px] text-[#4B3621]">
        {stat.value}
      </span>

      {/* Stat Label */}
      <span className="text-sm md:text-xl lg:text-2xl font-normal leading-tight md:leading-9 text-[#4B3621]">
        {stat.label}
      </span>
    </div>
  );
};

const StayStatsSection: React.FC = () => {
  // Statistics data
  const stats: StatItem[] = [
    {
      id: "rating",
      value: "4.9",
      label: "Average Guest Rating",
    },
    {
      id: "guests",
      value: "10k+",
      label: "Happy Guest Hosted",
    },
    {
      id: "rooms",
      value: "19",
      label: "Stylishly Designed Rooms & Suites",
    },
    {
      id: "service",
      value: "365",
      label: "Days of Warm, Personalized Service",
    },
  ];

  return (
    <section className="w-full bg-[#FFFCF5] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-[52px] max-w-[1148px] mx-auto">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayStatsSection;
