import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 * Activity data for tour activities page
 */
const ACTIVITIES = [
  {
    id: 1,
    title: "Snorkeling & Diving",
    description:
      "Explore vibrant coral reefs and marine life in crystal-clear tropical waters with expert dive instructors.",
    image: "/images/travixo-tours/cards/community-1.png",
    duration: "3-4 hours",
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "Mountain Trekking",
    description:
      "Challenge yourself on guided treks through majestic mountain trails with breathtaking panoramic viewpoints.",
    image: "/images/travixo-tours/cards/community-2.png",
    duration: "6-8 hours",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "Cultural Workshops",
    description:
      "Immerse yourself in local traditions with hands-on cooking classes, art workshops, and craft sessions.",
    image: "/images/travixo-tours/cards/community-3.png",
    duration: "2-3 hours",
    difficulty: "All Levels",
  },
  {
    id: 4,
    title: "Wildlife Safari",
    description:
      "Encounter majestic animals in their natural habitat on guided safari drives through national parks.",
    image: "/images/travixo-tours/cards/community-4.png",
    duration: "Full Day",
    difficulty: "Beginner",
  },
  {
    id: 5,
    title: "River Rafting",
    description:
      "Navigate thrilling rapids and serene stretches on guided white-water rafting adventures for all skill levels.",
    image: "/images/travixo-tours/cards/tour-1.png",
    duration: "4-5 hours",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "Hot Air Ballooning",
    description:
      "Float above stunning landscapes at sunrise for an unforgettable aerial perspective of iconic destinations.",
    image: "/images/travixo-tours/cards/tour-2.png",
    duration: "1-2 hours",
    difficulty: "Beginner",
  },
];

export default function TourActivitiesPage() {
  return (
    <main
      className="min-h-screen relative flex flex-col bg-[#FFFCF5]"
    >
      <Navbar />
      <div className="flex-1 w-full relative z-0">
        {/* Hero Section */}
        <section
          className="relative w-full py-16 lg:py-[98px] bg-[#FFF7E5]"
        >
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
            <div className="text-center">
              <h1 className="font-display italic font-semibold text-[24px] md:text-[28px] leading-[37px] text-brand-brown mb-6">
                Tour Activities
              </h1>
              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown max-w-[780px] mx-auto">
                From underwater adventures to mountain summits, discover
                exciting activities that make every journey unforgettable.
              </p>
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="w-full py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ACTIVITIES.map((activity, index) => (
                <div
                  key={activity.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-brand-orange/10 group hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Activity Image */}
                  <div className="relative w-full h-[220px] overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Difficulty Badge */}
                    <div className="absolute top-3 left-3 bg-[#FF6E00] px-3 py-1 rounded-full">
                      <span className="font-body font-medium text-xs text-white">
                        {activity.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display italic font-semibold text-xl text-brand-brown mb-2 group-hover:text-brand-orange transition-colors">
                      {activity.title}
                    </h3>
                    <p className="font-body font-normal text-sm text-brand-brown/70 mb-4 line-clamp-2">
                      {activity.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="font-body text-sm text-brand-brown/60">
                        {activity.duration}
                      </span>
                      <Link
                        href="/products"
                        className="font-body font-medium text-sm text-brand-orange hover:underline"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
