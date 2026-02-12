import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://travixo.kayease.com";

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
    "/products",
    "/room",
    "/room-detail",
    "/signup",
    "/stay",
    "/team",
    "/terms",
    "/testimonials",
    "/tour-activates",
    "/tour-types",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/about" ? 0.9 : 0.7,
  }));
}
