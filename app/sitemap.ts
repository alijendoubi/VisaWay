import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/posts";

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

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticEntries, ...blogEntries];
}
