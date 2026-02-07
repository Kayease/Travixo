"use client";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TourActivatesPage() {
  return (
    <main
      className="min-h-screen relative flex flex-col pt-16"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <Navbar />
      <div className="flex-1 w-full relative z-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-20">
          <h1 className="font-display italic font-semibold text-3xl md:text-5xl text-brand-brown mb-8 text-center">
            Tour Activates
          </h1>
          <p className="font-body text-lg text-brand-brown/80 text-center max-w-2xl mx-auto mb-12">
            Explore our range of exciting tour activites designed to give you
            the best travel experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Content */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-sm p-6 border border-brand-orange/10 h-64 flex flex-col items-center justify-center space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="#FF6E00"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="#FF6E00"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="#FF6E00"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-brand-brown font-display font-medium text-xl">
                  Activity {item}
                </h3>
                <span className="text-brand-brown/60 font-body text-sm text-center px-4">
                  Experience the thrill of adventure with our curated
                  activities.
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
