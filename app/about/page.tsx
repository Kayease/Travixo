"use client";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";

/**
 * About Page
 */
export default function AboutPage() {
  return (
    <main className="min-h-screen relative bg-[#FDFBF7]">
      <Navbar />
      <AboutHeroSection />
      <ProcessSection />
      <ValuesSection />
      <Footer />
    </main>
  );
}
