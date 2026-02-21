import type { MetadataRoute } from "next";
import { siteUrl } from "@/app/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/blog2",
    "/contact",
    "/destinations",
    "/faq",
    "/history",
    "/how-it-works",
    "/login",
    "/news",
    "/paris",
    "/portfolio",
    "/privacy",
    "/tour-listings",
    "/room",
    "/room-detail",
    "/signup",
    "/stay",
    "/team",
    "/terms",
    "/testimonials",
    "/tour-activities",
    "/tour-types",
  ];

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/about" ? 0.9 : 0.7,
  }));
}
