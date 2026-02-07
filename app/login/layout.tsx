import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In | Travixo - Travel & Tour",
  description:
    "Sign in to access your Travixo bookings and continue planning your next adventure.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
