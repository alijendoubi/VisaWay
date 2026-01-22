import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/posts";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://visaway.com";
  const staticRoutes = [
    "",
    "/services",
    "/eligibility",
    "/student-visa",
    "/work-visa",
    "/professional-visa",
    "/success-stories",
    "/about",
    "/blog",
    "/contact"
  ];

  const staticEntries = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date()
    }))
  );

  const blogEntries = locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date)
    }))
  );

  return [...staticEntries, ...blogEntries];
}
