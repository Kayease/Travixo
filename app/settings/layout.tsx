import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Settings | Travixo - Travel & Tour",
  description:
    "Update your Travixo account preferences, notifications, and security settings.",
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
