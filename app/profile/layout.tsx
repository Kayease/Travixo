import type { Metadata } from "next";
import { siteUrl } from "@/app/lib/siteConfig";

export const metadata: Metadata = {
  title: "My Profile | Travixo - Travel & Tour",
  description:
    "Manage your Travixo profile, bookings, and account settings.",
  alternates: {
    canonical: `${siteUrl}/profile`,
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
