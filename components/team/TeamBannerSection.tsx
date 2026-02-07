"use client";
import React from "react";

/**
 * TeamBannerSection Props Interface
 */
export const TeamBannerSection: React.FC = () => {
  return (
    <section className="w-full" aria-label="Team Banner">
      <div className="relative w-full h-[350px] md:h-[450px] lg:h-[608px] overflow-hidden">
        <video
          src="/images/team/team-banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Optional overlay for better text contrast if needed later */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>
    </section>
  );
};

export default TeamBannerSection;
