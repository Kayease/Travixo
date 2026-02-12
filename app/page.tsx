import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesBarSection } from "@/components/home/FeaturesBarSection";
import { Footer } from "@/components/layout/Footer";

const ExploreSection = dynamic(
  () =>
    import("@/components/home/ExploreSection").then(
      (mod) => mod.ExploreSection,
    ),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  },
);
const ServicesSection = dynamic(
  () =>
    import("@/components/home/ServicesSection").then(
      (mod) => mod.ServicesSection,
    ),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  },
);
const DestinationsSection = dynamic(
  () =>
    import("@/components/home/DestinationsSection").then(
      (mod) => mod.DestinationsSection,
    ),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  },
);
const ExperienceSection = dynamic(
  () =>
    import("@/components/home/ExperienceSection").then(
      (mod) => mod.ExperienceSection,
    ),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  },
);
const AboutSection = dynamic(
  () =>
    import("@/components/home/AboutSection").then((mod) => mod.AboutSection),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  },
);
const CTABannerSection = dynamic(
  () =>
    import("@/components/home/CTABannerSection").then(
      (mod) => mod.CTABannerSection,
    ),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  },
);
const TourTypesSection = dynamic(
  () =>
    import("@/components/home/TourTypesSection").then(
      (mod) => mod.TourTypesSection,
    ),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  },
);
const BenefitsSection = dynamic(
  () =>
    import("@/components/home/BenefitsSection").then(
      (mod) => mod.BenefitsSection,
    ),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  },
);
const FeaturedToursSection = dynamic(
  () =>
    import("@/components/home/FeaturedToursSection").then(
      (mod) => mod.FeaturedToursSection,
    ),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  },
);
const TestimonialSection = dynamic(
  () =>
    import("@/components/home/TestimonialSection").then(
      (mod) => mod.TestimonialSection,
    ),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  },
);
const CommunitySection = dynamic(
  () =>
    import("@/components/home/CommunitySection").then(
      (mod) => mod.CommunitySection,
    ),
  {
    loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />,
  },
);

export const metadata: Metadata = {
  title: "Travixo — Premium Travel & Tour Booking",
  description:
    "Discover breathtaking destinations worldwide. Book tours, stays, and experiences with Travixo — your trusted travel companion for unforgettable adventures.",
  alternates: {
    canonical: "https://travixo.kayease.com",
  },
  openGraph: {
    title: "Travixo — Premium Travel & Tour Booking",
    description:
      "Discover breathtaking destinations worldwide. Book tours, stays, and experiences with Travixo.",
    url: "https://travixo.kayease.com",
    siteName: "Travixo",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Travixo Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travixo — Premium Travel & Tour Booking",
    description: "Discover breathtaking destinations worldwide with Travixo.",
    images: ["/og-image.png"],
  },
};

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
