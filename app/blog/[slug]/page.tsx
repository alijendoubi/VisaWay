import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/content/posts";

export const generateStaticParams = async () => blogPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post" };
  return {
    title: post.title,
    description: post.excerpt
  };
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const shareUrl = `https://visaway.com/blog/${post.slug}`;

  return (
    <div>
      <section className="section-padding pb-10 pt-16">
        <p className="text-xs font-semibold uppercase text-sky">{post.tags.join(" · ")}</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">{post.title}</h1>
        <p className="mt-2 text-sm text-ink/60">{post.date} · {post.readingTime}</p>
      </section>
      <section className="section-padding pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <article className="space-y-8">
            {post.sections.map((section) => (
              <div key={section.id} id={section.id} className="space-y-3">
                <h2 className="text-2xl font-semibold text-ink">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm text-ink/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </article>
          <aside className="space-y-6">
            <div className="glass rounded-2xl p-5">
              <p className="text-sm font-semibold text-ink">Table of contents</p>
              <ul className="mt-3 space-y-2 text-sm text-ink/70">
                {post.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="transition hover:text-ink">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-sm font-semibold text-ink">Share</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-ink/70">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  aria-label="Share on LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                  aria-label="Share on X"
                >
                  X (Twitter)
                </a>
                <a href={`mailto:?subject=${post.title}&body=${shareUrl}`} aria-label="Share via email">
                  Email
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="section-padding pb-20">
        <h3 className="text-xl font-semibold text-ink">Related posts</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`} className="glass rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase text-sky">{item.tags.join(" · ")}</p>
              <p className="mt-2 text-sm font-semibold text-ink">{item.title}</p>
              <p className="mt-2 text-xs text-ink/60">{item.readingTime}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
