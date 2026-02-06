import { Navbar } from "@/app/components/layout/Navbar";
import { HeroSection } from "@/app/components/home/HeroSection";
import { ExploreSection } from "@/app/components/home/ExploreSection";
import { ServicesSection } from "@/app/components/home/ServicesSection";
import { DestinationsSection } from "@/app/components/home/DestinationsSection";
import { ExperienceSection } from "@/app/components/home/ExperienceSection";
import { AboutSection } from "@/app/components/home/AboutSection";
import { CTABannerSection } from "@/app/components/home/CTABannerSection";
import { TourTypesSection } from "@/app/components/home/TourTypesSection";
import { BenefitsSection } from "@/app/components/home/BenefitsSection";
import { FeaturedToursSection } from "@/app/components/home/FeaturedToursSection";
import { TestimonialSection } from "@/app/components/home/TestimonialSection";
import { CommunitySection } from "@/app/components/home/CommunitySection";
import { FeaturesBarSection } from "@/app/components/home/FeaturesBarSection";
import { Footer } from "@/app/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ExploreSection />
      <ServicesSection />
      <DestinationsSection />
      <ExperienceSection />
      <AboutSection />
      <CTABannerSection />
      <TourTypesSection />
      <BenefitsSection />
      <FeaturedToursSection />
      <TestimonialSection />
      <CommunitySection />
      <FeaturesBarSection />
      <Footer />
    </main>
  );
}