import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Travixo - Travel & Tour",
  description:
    "Frequently asked questions about our tours, bookings, and travel services. Find answers before you go.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
