import type { Metadata } from "next";
import { siteUrl } from "@/app/lib/siteConfig";

export const metadata: Metadata = {
  title: "Tour Types | Travixo - Travel & Tour",
  description:
    "Explore Travixo tour categories: safaris, cultural journeys, adventure trips, and more.",
  alternates: {
    canonical: `${siteUrl}/tour-types`,
  },
};

export default function TourTypesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
