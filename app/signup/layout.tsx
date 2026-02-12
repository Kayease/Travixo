import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account | Travixo - Travel & Tour",
  description:
    "Create your Travixo account to save preferences, manage bookings, and unlock exclusive travel offers.",
  alternates: {
    canonical: "https://travixo.kayease.com/signup",
  },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
