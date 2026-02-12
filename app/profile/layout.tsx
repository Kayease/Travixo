import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile | Travixo - Travel & Tour",
  description:
    "Manage your Travixo profile, bookings, and account settings.",
  alternates: {
    canonical: "https://travixo.kayease.com/profile",
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
