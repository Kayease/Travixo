import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Travixo - Travel & Tour",
  description:
    "Travixo terms of service, booking conditions, and cancellation policy. Read before you book.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
