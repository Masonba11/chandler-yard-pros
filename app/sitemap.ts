import { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blogPosts";

const baseUrl = "https://www.chandleryardpros.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Core pages
  const coreRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // All Chandler service pages (including ones that may not be in services array)
  const allServiceSlugs = [
    "pavers-chandler",
    "artificial-turf-chandler",
    "irrigation-chandler",
    "lawn-mowing-chandler",
    "tree-trimming-chandler",
    "yard-clean-up-chandler",
    "weed-control-chandler",
    "shrub-trimming-chandler",
    "landscape-maintenance-chandler",
    "lawn-care-chandler",
    "landscape-design-chandler",
    "hardscaping-chandler",
    "landscape-lighting-chandler",
    "landscape-rock-chandler",
  ];

  const serviceRoutes = allServiceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Service area pages (including chandler which links back to homepage)
  const serviceAreaRoutes = [
    "chandler",
    "mesa",
    "gilbert",
    "queen-creek",
    "san-tan-valley",
  ].map((city) => ({
    url: `${baseUrl}/service-areas/${city}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog post pages
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...coreRoutes, ...serviceRoutes, ...serviceAreaRoutes, ...blogRoutes];
}
