import type { MetadataRoute } from "next";
import { articles, categories } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/privacy", "/terms", "/disclaimer", "/search", "/tools"];
  return [
    ...staticRoutes.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.6 })),
    ...categories.map((category) => ({ url: `${siteConfig.url}/${category.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...articles.map((article) => ({ url: `${siteConfig.url}/articles/${article.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.75 })),
  ];
}
