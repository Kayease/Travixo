import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Travixo - Travel & Tour",
  description:
    "Get in touch with Travixo. Start planning your safari or adventure with our destination experts.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
