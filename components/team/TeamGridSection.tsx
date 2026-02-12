import React from "react";
import Image from "next/image";

/**
 * TeamMember Interface for the grid section
 */
interface TeamMember {
  id: string | number;
  name: string;
  role: string;
  imageUrl: string;
}

/**
 * Sample team members data
 * Replace with actual data from CMS or API
 */
const SAMPLE_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Jimmy Jostar",
    role: "Ceo",
    imageUrl: "/images/team/cards/member-1.png",
  },
  {
    id: 2,
    name: "Law Light",
    role: "Founder",
    imageUrl: "/images/team/cards/member-2.png",
  },
  {
    id: 3,
    name: "Erean Yegear",
    role: "Digital Marketing",
    imageUrl: "/images/team/cards/member-3.png",
  },
  {
    id: 4,
    name: "Erza Scarlet",
    role: "Travel Specialist",
    imageUrl: "/images/team/cards/member-4.png",
  },
  {
    id: 5,
    name: "luffy D. Monkey",
    role: "Travel Specialist",
    imageUrl: "/images/team/cards/member-5.png",
  },
  {
    id: 6,
    name: "Nami san",
    role: "Travel Specialist",
    imageUrl: "/images/team/cards/member-6.png",
  },
];

/**
 * TeamGridSection Props Interface
 */
interface TeamGridSectionProps {
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** Array of team members to display */
  members?: TeamMember[];
}

/**
 * TeamGridSection Component
 *
 * Displays a grid of team member cards with rounded image style.
 *
 * Design Specifications (from Figma):
 * - Container: Background #FFFCF5
 * - Title: Playfair Display, italic, 600 weight, 28px
 * - Subtitle: Poppins, 500 weight, 18px
 * - Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
 * - Image: 387x304px, border-radius 100px (rounded pill shape)
 * - Name: Playfair Display, italic, 600 weight, 24px
 * - Role: Poppins, 400 weight, 18px
 *
 * @param {TeamGridSectionProps} props - Component configuration
 * @returns {JSX.Element} The rendered team grid section
 */
export const TeamGridSection: React.FC<TeamGridSectionProps> = ({
  title = "Our people are your people",
  subtitle = "The leadership team guiding Togo is success.",
  members = SAMPLE_TEAM_MEMBERS,
}) => {
  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-[52px]"
      style={{ backgroundColor: "#FFFCF5" }}
      aria-labelledby="team-grid-title"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          {/* Title - Playfair Display Italic */}
          <h2
            id="team-grid-title"
            className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-3 md:mb-4"
          >
            {title}
          </h2>

          {/* Subtitle - Poppins Medium */}
          <p className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown max-w-[360px] md:max-w-[478px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-14">
          {members.map((member) => (
            <article key={member.id} className="group w-full text-center">
              {/* Image Container - Rounded Pill Shape */}
              <div
                className="relative w-full aspect-387/304 overflow-hidden mx-auto mb-5 transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ borderRadius: "100px" }}
              >
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 387px"
                />
              </div>

              {/* Team Member Name - Playfair Display Italic */}
              <h3 className="font-display italic font-semibold text-xl md:text-[24px] leading-[30px] text-brand-brown mb-1">
                {member.name}
              </h3>

              {/* Team Member Role - Poppins */}
              <p className="font-body font-normal text-base md:text-[18px] leading-[30px] text-brand-brown">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGridSection;

