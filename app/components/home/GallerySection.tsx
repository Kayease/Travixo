"use client";
import React from "react";
import Image from "next/image";

/**
 * Gallery destination data
 * Each destination has an image, title, and location
 */
const GALLERY_DESTINATIONS = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    title: "Swiss Alps",
    location: "Switzerland",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop",
    title: "Cinque Terre",
    location: "Italy",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop",
    title: "Northern Lights",
    location: "Iceland",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    title: "Lake Bled",
    location: "Slovenia",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    title: "Maldives",
    location: "Indian Ocean",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
    title: "Mount Fuji",
    location: "Japan",
  },
];

/**
 * GallerySection Component
 * Displays a tilted gallery of travel destinations with decorative text
 * Background: #FFF7E5 (warm cream) with subtle pattern
 * Cards are rotated -8.6 degrees in an ascending diagonal pattern
 */
export const GallerySection = () => {
  return (
    <section
      className="relative w-full min-h-[800px] overflow-hidden py-20"
      style={{ backgroundColor: "#FFF7E5" }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B3621' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Text Content */}
      <div className="max-w-7xl mx-auto px-8 relative z-10 mb-16">
        <div className="max-w-3xl">
          <p className="text-brand-brown/60 font-medium uppercase tracking-widest text-sm mb-4">
            Discover the World
          </p>
          <h2 className="font-display italic text-5xl md:text-6xl text-brand-brown leading-tight mb-6">
            Let <span className="text-brand-orange">Travixo</span> Guide You to
            Your Next Adventure
          </h2>
          <p className="text-brand-brown/70 text-lg leading-relaxed max-w-2xl font-light">
            Discover the soul of Africa through iconic wildlife, breathtaking
            landscapes, the Great Migration, and a serene hot air balloon
            journey over the savanna. Experience unforgettable moments that will
            last a lifetime.
          </p>
        </div>
      </div>

      {/* Tilted Gallery Cards */}
      <div className="relative w-full h-[500px] overflow-visible">
        {/* Cards Container - rotated -8.6 degrees */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex gap-6"
          style={{
            transform: "translateX(-50%) rotate(-8.6deg)",
            transformOrigin: "center center",
          }}
        >
          {GALLERY_DESTINATIONS.map((destination, index) => (
            <div
              key={destination.id}
              className="relative shrink-0 rounded-xl overflow-hidden shadow-2xl cursor-pointer 
                         transition-all duration-500 hover:scale-105 hover:shadow-3xl group"
              style={{
                width: "272px",
                height: "363px",
                // Stagger the vertical position for ascending effect
                marginTop: `${(GALLERY_DESTINATIONS.length - 1 - index) * 40}px`,
              }}
            >
              {/* Image */}
              <Image
                src={destination.url}
                alt={destination.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="272px"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl italic mb-1">
                  {destination.title}
                </h3>
                <p className="text-white/80 text-sm flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {destination.location}
                </p>
              </div>

              {/* Hover Effect - Orange Border */}
              <div
                className="absolute inset-0 border-4 border-transparent group-hover:border-brand-orange 
                              transition-colors duration-300 rounded-xl pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-brand-orange" />
        <div className="w-12 h-0.5 bg-brand-brown/30" />
        <span className="text-brand-brown/50 text-sm font-medium tracking-wider uppercase">
          Explore More Destinations
        </span>
        <div className="w-12 h-0.5 bg-brand-brown/30" />
        <div className="w-2 h-2 rounded-full bg-brand-orange" />
      </div>
    </section>
  );
};
