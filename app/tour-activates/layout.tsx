import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Activities | Travixo - Travel & Tour",
  description:
    "Discover activities included in Travixo tours: wildlife safaris, cultural experiences, and adventure options.",
};

export default function TourActivatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
