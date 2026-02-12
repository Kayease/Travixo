import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paris Tours & Experiences | Travixo - Travel & Tour",
  description:
    "Explore Paris with Travixo. Iconic landmarks, world-class art, and charming streets—tours and experiences tailored for you.",
  alternates: {
    canonical: "https://travixo.kayease.com/paris",
  },
};

export default function ParisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
