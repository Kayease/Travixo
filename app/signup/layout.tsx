import type { Metadata } from "next";
import { siteUrl } from "@/app/lib/siteConfig";

export const metadata: Metadata = {
  title: "Create Account | Travixo - Travel & Tour",
  description:
    "Create your Travixo account to save preferences, manage bookings, and unlock exclusive travel offers.",
  alternates: {
    canonical: `${siteUrl}/signup`,
  },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
