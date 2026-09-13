import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PostCard } from "@/components/post-card";
import { sortedPosts } from "@/content/blog";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Yerel SEO, Google İşletme, yapay zeka öneri sistemleri ve mobil uygulama geliştirme üzerine Elli5'ten pratik yazılar.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", path: "/" },
              { name: "Blog", path: "/blog" },
            ]),
          ),
        }}
      />
      <PageHeader
        eyebrow="Blog"
        title="Dijitalde bir adım önde olmak için"
        lead="Yerel SEO'dan yapay zekaya, sahada işe yarayan pratik notlar."
      />

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 70} className="h-full">
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
