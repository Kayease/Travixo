import React from "react";

interface BlogDetailHeroProps {
  title: string;
  date: string;
}

/**
 * BlogDetailHero Component
 *
 * Hero section for the Blog Detail page with title and date.
 * Based on design specs for Desktop - 38.
 */
export const BlogDetailHero: React.FC<BlogDetailHeroProps> = ({
  title,
  date,
}) => {
  return (
    <section className="relative w-full h-[220px] md:h-[285px] overflow-hidden flex flex-col items-center justify-center bg-[#FFF7E5]">
      <div className="max-w-[1440px] mx-auto w-full h-full relative px-4 flex flex-col items-center justify-center">
        {/* On desktop, use absolute positioning per Figma specs. On mobile, use flex-centered layout. */}

        {/* Title */}
        <h1 className="text-center font-display italic font-semibold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-[#4B3621] max-w-[465px] md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[98px]">
          {title}
        </h1>

        {/* Date */}
        <p className="text-center font-body font-medium text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] text-[#4B3621] max-w-[415px] mt-4 md:mt-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[157px]">
          {date}
        </p>
      </div>
    </section>
  );
};
