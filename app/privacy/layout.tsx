import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Travixo - Travel & Tour",
  description:
    "How Travixo collects, uses, and protects your personal information. Your privacy matters to us.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
