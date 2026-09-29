import Link from "next/link";

type ServiceCardProps = {
  index?: string;
  title: string;
  text: string;
  href: string;
  linkLabel?: string;
};

export function ServiceCard({
  index,
  title,
  text,
  href,
  linkLabel = "Saber mais",
}: ServiceCardProps) {
  return (
    <article className="h-full">
      <Link
        href={href}
        className="group flex h-full flex-col p-6 transition-colors duration-200 hover:bg-paper md:p-8"
      >
        {index ? (
          <p className="text-sm font-medium text-brand tabular-nums">{index}</p>
        ) : null}
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">{title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-steel">{text}</p>
        <span className="mt-6 text-sm font-medium text-brand">
          {linkLabel}
          <span aria-hidden="true" className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </Link>
    </article>
  );
}
