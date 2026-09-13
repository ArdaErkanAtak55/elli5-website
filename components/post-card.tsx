import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/content/blog";
import { formatDateTR } from "@/lib/utils";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="flex items-center gap-2 text-xs text-ink-soft">
        <span className="rounded-full bg-brand-tint px-2.5 py-1 font-semibold text-brand">
          {post.category}
        </span>
        <span>{formatDateTR(post.date)}</span>
      </div>
      <h3 className="mt-4 text-lg leading-snug">{post.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
        {post.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Yazıyı oku
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
