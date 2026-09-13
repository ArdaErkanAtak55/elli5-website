import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { posts } from "@/content/blog";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const abs = (p: string) => new URL(p, site.url).toString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: abs("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: abs("/hizmetler"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: abs("/hakkimizda"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: abs("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: abs("/iletisim"), lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: abs("/teklif"), lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: abs("/dijital-analiz"), lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: abs(`/hizmetler/${s.id}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: abs(`/blog/${p.slug}`),
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...postRoutes];
}
