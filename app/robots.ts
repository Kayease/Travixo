import type { MetadataRoute } from "next";
import { siteUrl } from "@/app/lib/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/settings", "/profile", "/checkout", "/cart"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
