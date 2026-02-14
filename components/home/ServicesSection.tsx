import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Service data for the What We Do section
 * Using local images from /public/images/home/whatwedo/
 */
/**
 * Icons
 */


/**
 * Service data
 */
const SERVICES = [
  {
    id: "personalized-guide",
    title: "Personalized guide",
    description:
      "Get matched with expert local guides who tailor every experience to your interests and pace",
    iconPath: "/images/home/whatwedo/map_surfing.png",
    borderRadius: "63% 37% 30% 70% / 50% 45% 55% 50%",
  },
  {
    id: "accommodation",
    title: "Accommodation booking",
    description:
      "From boutique hotels to luxury resorts, we secure the best stays at exclusive rates",
    iconPath: "/images/home/whatwedo/mingcute_tree-4-line.png",
    borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
  },
  {
    id: "transportation",
    title: "Transportation service",
    description:
      "Seamless transfers and private vehicles ensure comfortable travel between every destination",
    iconPath: "/images/home/whatwedo/mdi_transportation.png",
    borderRadius: "70% 30% 30% 70% / 60% 40% 60% 40%",
  },
  {
    id: "culinary",
    title: "Culinary experiences",
    description:
      "Savor authentic local flavors with curated food tours, cooking classes, and dining experiences",
    iconPath: "/images/home/whatwedo/Group.png",
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
  },
];

/**
 * ServiceCard Component
 * Displays a single service with organic blob icon, title, description, and read more link
 * Matches Figma specs: 208px width, 18px gap between icon and text, 12px gap between title and description
 */
const ServiceCard = ({
  title,
  description,
  iconPath,
  borderRadius,
}: {
  title: string;
  description: string;
  iconPath: string;
  borderRadius: string;
}) => (
  <div className="flex flex-col items-center gap-[18px] w-[208px] group cursor-pointer outline-none shadow-none" tabIndex={0}>
    {/* Icon Container with Organic Border */}
    <div
      className="relative w-[100px] h-[100px] flex items-center justify-center border border-brand-orange text-brand-orange overflow-hidden transition-all duration-500 ease-in-out lg:group-hover:shadow-lg group-focus:shadow-lg group-active:shadow-lg"
      style={{ borderRadius }}
    >
      {/* Fill Animation Layer */}
      <div
        className="absolute inset-0 bg-brand-orange opacity-0 lg:group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity duration-500 ease-in-out z-0"
        style={{ borderRadius: "inherit" }}
      />

      {/* Icon */}
      <div className="relative w-10 h-10 z-10 transition-all duration-500 ease-in-out lg:group-hover:brightness-0 lg:group-hover:invert group-focus:brightness-0 group-focus:invert group-active:brightness-0 group-active:invert text-brand-orange">
        <Image
          src={iconPath}
          alt={title}
          fill
          sizes="40px"
          className="object-contain transition-all duration-500"
        />
      </div>
    </div>

    {/* Text Content */}
    <div className="flex flex-col items-center gap-3 w-full">
      {/* Title - Playfair Display italic 500, 18px/24px, orange on hover */}
      <h3 className="font-display italic font-medium text-[18px] leading-[24px] text-center text-brand-brown w-full transition-colors duration-500 lg:group-hover:text-brand-orange group-focus:text-brand-orange group-active:text-brand-orange">
        {title}
      </h3>

      {/* Description - Poppins 400, 14px/21px */}
      <p className="font-body font-normal text-[14px] leading-[21px] text-center text-brand-brown w-full">
        {description}
      </p>

      {/* Mobile Only: Read More Link */}
      <div className="lg:hidden mt-2">
        <ReadMoreLink />
      </div>
    </div>
  </div>
);

/**
 * Read More Link Component
 * Poppins 400, 14px/21px with 24px arrow icon, 4px gap
 */
const ReadMoreLink = () => (
  <Link href="/about" className="flex items-center gap-1 text-brand-brown font-body font-normal text-[14px] leading-[21px] lg:hover:text-brand-orange transition-colors group cursor-pointer outline-none">
    <span>Read More</span>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lg:group-hover:translate-x-1 transition-transform"
    >
      <path
        d="M4.5 12H19.5M19.5 12L13.5 6M19.5 12L13.5 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Link>
);

/**
 * ServicesSection Component
 * "What We Do" section displaying travel arrangement services
 */
export const ServicesSection = () => {
  return (
    <section
      className="relative w-full bg-[#FFFCF5] min-h-[551px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[170px] py-[52px]">
        {/* Section Header */}
        <div className="text-center mb-[43px]">
          {/* Small Title - Poppins 500, 24px/36px */}
          <span className="font-body font-medium text-[18px] leading-[27px] text-brand-brown">
            what we do
          </span>

          {/* Main Title - Playfair Display italic 600, 32px/43px */}
          <h2 className="font-display italic font-semibold text-[32px] leading-[43px] text-brand-brown mt-2">
            We provide travel arrangement services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-8 lg:gap-[40px] xl:gap-[90px]">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconPath={service.iconPath}
              borderRadius={service.borderRadius}
            />
          ))}
        </div>

        {/* Read More Links Row (Desktop Only) */}
        <div className="hidden lg:flex justify-center gap-[40px] xl:gap-[90px] mt-[32px]">
          {SERVICES.map((service) => (
            <div
              key={`read-more-${service.id}`}
              className="w-[208px] flex justify-center"
            >
              <ReadMoreLink />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
