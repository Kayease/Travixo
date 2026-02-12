import type { Metadata } from "next";
import { siteUrl } from "@/app/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us | Travixo - Travel & Tour",
  description:
    "Learn how Travixo brings decades of travel expertise and a passion for unforgettable safari and adventure experiences.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Us — Travixo",
    description:
      "Learn how Travixo brings decades of travel expertise and a passion for unforgettable safari and adventure experiences.",
    url: `${siteUrl}/about`,
    siteName: "Travixo",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
