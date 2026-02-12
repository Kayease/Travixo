import type { Metadata } from "next";
import { siteUrl } from "@/app/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us | Travixo - Travel & Tour",
  description:
    "Get in touch with Travixo. Start planning your safari or adventure with our destination experts.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us — Travixo",
    description:
      "Get in touch with Travixo. Start planning your safari or adventure with our destination experts.",
    url: `${siteUrl}/contact`,
    siteName: "Travixo",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
