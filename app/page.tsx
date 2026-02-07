import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { ExploreSection } from "@/components/home/ExploreSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CTABannerSection } from "@/components/home/CTABannerSection";
import { TourTypesSection } from "@/components/home/TourTypesSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { FeaturedToursSection } from "@/components/home/FeaturedToursSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { FeaturesBarSection } from "@/components/home/FeaturesBarSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
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
