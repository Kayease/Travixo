import type { Metadata } from "next";
import { siteUrl } from "@/app/lib/siteConfig";

export const metadata: Metadata = {
  title: "Log In | Travixo - Travel & Tour",
  description:
    "Sign in to access your Travixo bookings and continue planning your next adventure.",
  alternates: {
    canonical: `${siteUrl}/login`,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
