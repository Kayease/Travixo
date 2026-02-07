"use client";
import React from "react";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

export default function HowItWorksPage() {
  return (
    <main
      className="min-h-screen relative flex flex-col pt-16"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <Navbar />
      <div className="flex-1 w-full relative z-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-20">
          <h1 className="font-display italic font-semibold text-3xl md:text-5xl text-brand-brown mb-8 text-center">
            How It Works
          </h1>
          <p className="font-body text-lg text-brand-brown/80 text-center max-w-2xl mx-auto mb-12">
            Simple steps to book your dream vacation with Travixo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-brand-orange/30 -z-10" />

            {/* Steps */}
            {[
              {
                id: 1,
                title: "Search Destination",
                desc: "Browse through our extensive list of curated destinations.",
              },
              {
                id: 2,
                title: "Book Your Tour",
                desc: "Select your preferred tour and date with our easy booking system.",
              },
              {
                id: 3,
                title: "Enjoy Your Trip",
                desc: "Pack your bags and get ready for an unforgettable experience.",
              },
            ].map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-xl shadow-sm p-8 border border-brand-orange/10 text-center z-10"
              >
                <div className="w-20 h-20 bg-brand-orange text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="font-display font-bold text-3xl">
                    {step.id}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-brand-brown mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-brand-brown/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
