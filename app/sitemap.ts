import type { MetadataRoute } from "next";
import { site, sitemapRoutes } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.contentUpdated);

  return sitemapRoutes.map((route) => ({
    url: new URL(route.path, site.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
