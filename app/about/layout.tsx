import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Travixo - Travel & Tour",
  description:
    "Learn how Travixo brings decades of travel expertise and a passion for unforgettable safari and adventure experiences.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
