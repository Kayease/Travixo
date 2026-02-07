import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Travixo - Travel & Tour",
  description:
    "Simple steps to book your dream vacation with Travixo. Search, book, and enjoy your journey.",
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
