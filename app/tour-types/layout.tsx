import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Types | Travixo - Travel & Tour",
  description:
    "Explore Travixo tour categories: safaris, cultural journeys, adventure trips, and more.",
  alternates: {
    canonical: "https://travixo.kayease.com/tour-types",
  },
};

export default function TourTypesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
