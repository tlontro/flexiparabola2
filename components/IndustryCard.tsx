import Link from "next/link";

export function IndustryCard({ title, href }: { title: string; href: string }) {
  return (
    <article>
      <Link
        href={href}
        className="group flex items-start justify-between gap-4 border border-line bg-white p-5 transition-colors duration-200 hover:border-brand"
      >
        <h3 className="text-base leading-relaxed font-medium text-ink">{title}</h3>
        <span aria-hidden="true" className="mt-1 text-brand transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </article>
  );
}
