"use client";
import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { TeamHeroSection } from "../components/team/TeamHeroSection";
import { TeamBannerSection } from "../components/team/TeamBannerSection";
import { TeamGridSection } from "../components/team/TeamGridSection";

/**
 * TeamPage Component
 *
 * Meet our teams page showcasing all team members.
 * Features a hero section, banner image, and team members grid.
 *
 * Page Structure:
 * 1. Navbar - Site navigation
 * 2. TeamHeroSection - Page header with title and subtitle
 * 3. TeamBannerSection - Full-width scenic banner image
 * 4. TeamGridSection - Grid of team member cards
 * 5. Footer - Site footer
 *
 * @returns {JSX.Element} The complete team page
 */
const TeamPage: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-brand-cream">
      {/* Site Navigation */}
      <Navbar />

      {/* Hero Section - Page Header */}
      <TeamHeroSection
        title="Meet our teams"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />

      {/* Banner Image Section */}
      <TeamBannerSection />

      {/* Team Members Grid Section */}
      <TeamGridSection />

      {/* Site Footer */}
      <Footer />
    </main>
  );
};

export default TeamPage;
