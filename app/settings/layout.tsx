import type { Metadata } from "next";
import { siteUrl } from "@/app/lib/siteConfig";

export const metadata: Metadata = {
  title: "Account Settings | Travixo - Travel & Tour",
  description:
    "Update your Travixo account preferences, notifications, and security settings.",
  alternates: {
    canonical: `${siteUrl}/settings`,
  },
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
