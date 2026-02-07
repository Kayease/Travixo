import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations | Travixo - Travel & Tour",
  description:
    "Discover Travixo destinations. From savannas to coastlines, find your next safari or adventure.",
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
