import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 * Tour type data with detailed descriptions and images
 */
const TOUR_TYPES = [
  {
    id: 1,
    title: "Adventure Tours",
    description:
      "Push your limits with thrilling expeditions — from mountain climbing and zip-lining to white-water rafting and bungee jumping.",
    image: "/images/travixo-tours/cards/tour-1.png",
    tourCount: 24,
    color: "#FF6E00",
  },
  {
    id: 2,
    title: "Relaxation Retreats",
    description:
      "Unwind at world-class spas, serene beaches, and tranquil countryside escapes designed for complete rejuvenation.",
    image: "/images/travixo-tours/cards/tour-2.png",
    tourCount: 18,
    color: "#4B3621",
  },
  {
    id: 3,
    title: "Cultural Experiences",
    description:
      "Immerse yourself in local traditions, visit ancient temples, explore museums, and connect with indigenous communities.",
    image: "/images/travixo-tours/cards/tour-3.png",
    tourCount: 31,
    color: "#FF6E00",
  },
  {
    id: 4,
    title: "History & Heritage",
    description:
      "Walk through centuries of history with guided tours of castles, ruins, battlefields, and UNESCO World Heritage sites.",
    image: "/images/travixo-tours/cards/community-1.png",
    tourCount: 22,
    color: "#4B3621",
  },
  {
    id: 5,
    title: "Nature & Wildlife",
    description:
      "From African safaris to Amazon rainforest treks, experience the planet's most extraordinary ecosystems and creatures.",
    image: "/images/travixo-tours/cards/community-2.png",
    tourCount: 27,
    color: "#FF6E00",
  },
  {
    id: 6,
    title: "City & Urban Tours",
    description:
      "Discover the energy of the world's greatest cities with guided walks, food tours, and exclusive access to hidden gems.",
    image: "/images/travixo-tours/cards/community-3.png",
    tourCount: 35,
    color: "#4B3621",
  },
];

export default function TourTypesPage() {
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
                Tour Types
              </h1>
              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-brand-brown max-w-[780px] mx-auto">
                From adrenaline-pumping adventures to peaceful retreats, find
                the perfect type of tour for your next journey.
              </p>
            </div>
          </div>
        </section>

        {/* Tour Types Grid */}
        <section className="w-full py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TOUR_TYPES.map((type, index) => (
                <Link
                  key={type.id}
                  href="/destinations"
                  className="group block"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-brand-orange/10 hover:shadow-lg transition-all duration-300">
                    {/* Image */}
                    <div className="relative w-full h-[240px] overflow-hidden">
                      <Image
                        src={type.image}
                        alt={type.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                      {/* Tour Count Badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-brand-brown font-body font-medium text-sm px-3 py-1 rounded-full">
                          {type.tourCount} Tours
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-display italic font-semibold text-xl text-brand-brown mb-2 group-hover:text-brand-orange transition-colors">
                        {type.title}
                      </h3>
                      <p className="font-body font-normal text-sm text-brand-brown/70 line-clamp-2">
                        {type.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 mt-4 text-brand-orange font-body font-medium text-sm">
                        <span>Explore Tours</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="group-hover:translate-x-1 transition-transform"
                        >
                          <path
                            d="M5 12H19M19 12L13 6M19 12L13 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
