import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://travixo.kayease.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/settings", "/profile", "/checkout", "/cart"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
