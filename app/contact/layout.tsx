import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Travixo - Travel & Tour",
  description:
    "Get in touch with Travixo. Start planning your safari or adventure with our destination experts.",
  alternates: {
    canonical: "https://travixo.kayease.com/contact",
  },
  openGraph: {
    title: "Contact Us — Travixo",
    description:
      "Get in touch with Travixo. Start planning your safari or adventure with our destination experts.",
    url: "https://travixo.kayease.com/contact",
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
