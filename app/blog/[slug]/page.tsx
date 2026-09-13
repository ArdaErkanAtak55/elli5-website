import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PostBody } from "@/components/post-body";
import { PostCard } from "@/components/post-card";
import { buttonClasses } from "@/components/ui/button";
import { posts, getPost, sortedPosts } from "@/content/blog";
import { formatDateTR } from "@/lib/utils";
import { pageMetadata, breadcrumbJsonLd, absoluteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = sortedPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Elli5" },
    publisher: { "@type": "Organization", name: "Elli5" },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]),
          ),
        }}
      />

      <section className="hero-canvas border-b border-line-soft">
        <Container className="py-14 sm:py-16 lg:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-carbon"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Tüm yazılar
          </Link>
          <div className="mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs text-ink-soft">
              <span className="rounded-full bg-brand-tint px-2.5 py-1 font-semibold text-brand">
                {post.category}
              </span>
              <span>{formatDateTR(post.date)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" aria-hidden />
                {post.readingMinutes} dk okuma
              </span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.9rem]">{post.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{post.description}</p>
          </div>
        </Container>
      </section>

      <Section tone="white">
        <Reveal className="mx-auto max-w-2xl">
          <PostBody blocks={post.body} />

          <div className="mt-12 rounded-xl2 border border-line bg-mist p-7 text-center">
            <p className="text-lg font-semibold text-carbon">
              İşletmeniz için bunu konuşalım mı?
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
              Ücretsiz dijital analizle mevcut durumunuzu çıkarır, ilk adımı
              netleştiririz.
            </p>
            <Link href="/dijital-analiz" className={buttonClasses("primary", "md", "mt-5")}>
              Ücretsiz Dijital Analiz
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </Section>

      {more.length ? (
        <Section tone="mist">
          <h2 className="text-2xl">Devamı gelsin</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
