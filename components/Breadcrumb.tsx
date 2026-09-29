import Link from "next/link";
import { site } from "@/content/site";
import { serializeJsonLd } from "@/lib/json-ld";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items, path }: { items: Crumb[]; path: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href ?? path, site.url).toString(),
    })),
  };

  return (
    <nav aria-label="Percurso" className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-steel">
        {items.map((item, index) => {
          const current = !item.href;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={current ? "page" : undefined} className="text-ink">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
