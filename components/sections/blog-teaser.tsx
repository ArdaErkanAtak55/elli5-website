import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PostCard } from "@/components/post-card";
import { sortedPosts } from "@/content/blog";

export function BlogTeaser() {
  const posts = sortedPosts.slice(0, 3);
  return (
    <Section tone="mist">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Blog
          </p>
          <h2 className="text-3xl sm:text-4xl">Son içeriklerimiz</h2>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-carbon hover:text-brand"
        >
          Tüm yazılar
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 80} className="h-full">
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
