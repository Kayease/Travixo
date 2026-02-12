/**
 * Site Configuration
 *
 * Central configuration for site-wide constants.
 * The site URL is read from the NEXT_PUBLIC_SITE_URL environment variable
 * with a fallback to the default domain.
 *
 * Usage in layout/page metadata:
 *   import { siteUrl } from "@/app/lib/siteConfig";
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://travixo.kayease.com";

