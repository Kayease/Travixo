import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Travixo - Travel & Tour",
  description:
    "Frequently asked questions about our tours, bookings, and travel services. Find answers before you go.",
  alternates: {
    canonical: "https://travixo.kayease.com/faq",
  },
  openGraph: {
    title: "FAQ — Travixo",
    description:
      "Frequently asked questions about our tours, bookings, and travel services. Find answers before you go.",
    url: "https://travixo.kayease.com/faq",
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
