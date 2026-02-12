import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Travixo - Travel & Tour",
  description:
    "How Travixo collects, uses, and protects your personal information. Your privacy matters to us.",
  alternates: {
    canonical: "https://travixo.kayease.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
