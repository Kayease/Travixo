import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations | Travixo - Travel & Tour",
  description:
    "Discover Travixo destinations. From savannas to coastlines, find your next safari or adventure.",
  alternates: {
    canonical: "https://travixo.kayease.com/destinations",
  },
  openGraph: {
    title: "Destinations — Travixo",
    description:
      "Discover Travixo destinations. From savannas to coastlines, find your next safari or adventure.",
    url: "https://travixo.kayease.com/destinations",
    siteName: "Travixo",
    type: "website",
  },
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
