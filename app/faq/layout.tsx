import type { Metadata } from "next";
import { siteUrl } from "@/app/lib/siteConfig";

export const metadata: Metadata = {
  title: "FAQ | Travixo - Travel & Tour",
  description:
    "Frequently asked questions about our tours, bookings, and travel services. Find answers before you go.",
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
  openGraph: {
    title: "FAQ — Travixo",
    description:
      "Frequently asked questions about our tours, bookings, and travel services. Find answers before you go.",
    url: `${siteUrl}/faq`,
    siteName: "Travixo",
    type: "website",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
