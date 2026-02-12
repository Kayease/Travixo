import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";

const ProcessSection = dynamic(
  () => import("@/components/home/ProcessSection").then((mod) => mod.ProcessSection),
  { loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" /> }
);
const ValuesSection = dynamic(
  () => import("@/components/home/ValuesSection").then((mod) => mod.ValuesSection),
  { loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" /> }
);

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
