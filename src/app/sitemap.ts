import type { MetadataRoute } from "next";
import { CAPABILITIES } from "@/data/capabilities";
import { INSIGHTS } from "@/data/insights";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = INSIGHTS[0].date;
  const page = (path: string, priority: number, lastModified = latest) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    priority,
  });

  return [
    page("", 1),
    page("/capabilities", 0.9),
    page("/projects", 0.9),
    page("/diligence", 0.9),
    page("/service-agreements", 0.8),
    page("/insights", 0.8),
    page("/about", 0.6),
    page("/contact", 0.6),
    ...CAPABILITIES.map((c) => page(`/capabilities/${c.slug}`, 0.7)),
    ...PROJECTS.map((p) => page(`/projects/${p.slug}`, 0.7)),
    ...INSIGHTS.map((i) => page(`/insights/${i.slug}`, 0.6, i.date)),
  ];
}
