import type { Block } from "@/content/blog";

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="pt-4 text-2xl">
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="text-[1.05rem] leading-relaxed text-ink">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5 pl-1">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[1.02rem] leading-relaxed text-ink">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-[3px] border-brand bg-mist px-5 py-4 text-[1.05rem] font-medium italic leading-relaxed text-carbon"
              >
                {block.text}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
