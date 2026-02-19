import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Experience data for the cards
 */
const EXPERIENCES = [
  {
    id: "spa",
    title: "Spa & Wellness",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature, offering extraordinary visual and auditory experiences that pamper and heal.",
    image: "/images/experience/cards/experience-1.png",
    offset: false,
  },
  {
    id: "activities",
    title: "Island Activates",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature, offering extraordinary visual and auditory experiences that pamper and heal.",
    image: "/images/experience/cards/experience-2.png",
    offset: true,
  },
  {
    id: "dining",
    title: "Gastronomic Dine",
    description:
      "Set in lush jungle, our modern spa embodies the calm of nature, offering extraordinary visual and auditory experiences that pamper and heal.",
    image: "/images/experience/cards/experience-3.png",
    offset: false,
  },
];

/**
 * ExperienceCard Component
 * Displays a single experience with image, title, description and CTA
 */
const ExperienceCard = ({
  title,
  description,
  image,
  offset,
}: {
  title: string;
  description: string;
  image: string;
  offset: boolean;
}) => (
  <div className={`flex flex-col items-center ${offset ? "lg:mt-8" : ""} group/card`}>
    {/* Image Container with orange glow on hover */}
    <div className="relative w-[320px] md:w-[380px] lg:w-[300px] xl:w-[405px] h-[400px] md:h-[450px] lg:h-[400px] xl:h-[500px]">
      <div
        className="relative w-full h-full rounded-xl overflow-hidden shadow-lg transition-shadow duration-500 lg:group-hover/card:[box-shadow:0_0_25px_8px_rgba(255,140,40,0.2),0_0_60px_15px_rgba(255,140,40,0.08)]"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 380px, (max-width: 1280px) 300px, 405px"
        />
      </div>
    </div>

    {/* Content */}
    <div className="mt-6 text-center max-w-[332px]">
      {/* Title */}
      <h3 className="font-display italic font-semibold text-[28px] leading-[37px] text-brand-brown">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body font-normal text-lg leading-[27px] text-brand-brown mt-4">
        {description}
      </p>
    </div>

    {/* CTA Button */}
    <Link href="/destinations">
      <button className="mt-6 w-[300px] h-[50px] bg-white border border-brand-orange rounded-[12px] font-display italic text-[18px] leading-[24px] text-brand-orange overflow-hidden transition-all duration-300 relative group cursor-pointer outline-none">
        {/* Fill animation from bottom to top */}
        <span className="absolute bottom-0 left-0 right-0 h-0 bg-brand-orange lg:group-hover:h-full transition-all duration-300 ease-out" />
        <span className="relative z-10 lg:group-hover:text-white transition-colors duration-300">
          Discover More
        </span>
      </button>
    </Link>
  </div>
);

/**
 * ExperienceSection Component
 * "Unforgettable Experience" section with hero background and 3 experience cards
 */
export const ExperienceSection = () => {
  return (
    <section className="relative w-full bg-white">
      {/* Hero Background with Overlay */}
      <div className="relative w-full h-[529px]">
        {/* Background Image */}
        <Image
          src="/images/experience/cards/experience-4.png"
          alt="Tropical beach sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center pt-12">
          {/* Badge */}
          <div
            className="inline-flex items-center justify-center px-6 py-1.5 rounded-xl bg-[#FF6E00]"
          >
            <span className="font-display italic font-medium text-sm text-white tracking-wide">
              UNFORGETTABLE EXPERIENCE
            </span>
          </div>

          {/* Main Title */}
          <h2 className="font-display italic font-semibold text-[28px] leading-[37px] text-white text-center mt-8 max-w-[437px]">
            One of the World&apos;s Most Desirable Locations
          </h2>

          {/* Subtitle */}
          <p className="font-body font-medium text-lg leading-[27px] text-white text-center mt-6 max-w-[580px] px-4">
            A superior, 5-star resort embodying the very best of Fiji Islands
            luxury, tranquility & sophistication.
          </p>
        </div>
      </div>

      {/* Experience Cards Container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Cards positioned to overlap the hero */}
        <div
          className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:items-start gap-8 lg:gap-6 mt-[-100px] lg:mt-[-260px]"
        >
          {EXPERIENCES.map((experience) => (
            <ExperienceCard
              key={experience.id}
              title={experience.title}
              description={experience.description}
              image={experience.image}
              offset={experience.offset}
            />
          ))}
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-16 lg:h-24" />
    </section>
  );
};
