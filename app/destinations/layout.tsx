import type { Metadata } from "next";
import { siteUrl } from "@/app/lib/siteConfig";

export const metadata: Metadata = {
  title: "Destinations | Travixo - Travel & Tour",
  description:
    "Discover Travixo destinations. From savannas to coastlines, find your next safari or adventure.",
  alternates: {
    canonical: `${siteUrl}/destinations`,
  },
  openGraph: {
    title: "Destinations — Travixo",
    description:
      "Discover Travixo destinations. From savannas to coastlines, find your next safari or adventure.",
    url: `${siteUrl}/destinations`,
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
