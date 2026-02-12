import type { Metadata } from "next";
import { siteUrl } from "@/app/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Travixo - Travel & Tour",
  description:
    "How Travixo collects, uses, and protects your personal information. Your privacy matters to us.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
