import Link from "next/link";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { blogPosts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "VisaWay insights on visas, admissions, and global mobility."
};

export default function BlogPage() {
  return (
    <div>
      <PageHeader
        eyebrow="VisaWay Blog"
        title="Visa guidance, simplified"
        description="Insights and checklists for students, professionals, and global teams."
      />
      <section className="section-padding pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="glass rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase text-sky">{post.tags.join(" · ")}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink">{post.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{post.excerpt}</p>
              <p className="mt-4 text-xs text-ink/50">{post.date} · {post.readingTime}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
