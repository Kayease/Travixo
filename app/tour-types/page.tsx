"use client";
import React from "react";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

export default function TourTypesPage() {
  return (
    <main
      className="min-h-screen relative flex flex-col pt-16"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <Navbar />
      <div className="flex-1 w-full relative z-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-20">
          <h1 className="font-display italic font-semibold text-3xl md:text-5xl text-brand-brown mb-8 text-center">
            Tour Types
          </h1>
          <p className="font-body text-lg text-brand-brown/80 text-center max-w-2xl mx-auto mb-12">
            From adventure to relaxation, find the perfect type of tour for your
            next journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Content */}
            {[
              "Adventure",
              "Relaxation",
              "Cultural",
              "History",
              "Nature",
              "City",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-sm p-6 border border-brand-orange/10 h-64 flex flex-col items-center justify-center space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-2xl text-brand-orange">
                    {item[0]}
                  </span>
                </div>
                <h3 className="text-brand-brown font-display font-medium text-xl">
                  {item} Tours
                </h3>
                <span className="text-brand-brown/60 font-body text-sm text-center px-4">
                  Discover amazing {item.toLowerCase()} experiences tailored
                  just for you.
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
