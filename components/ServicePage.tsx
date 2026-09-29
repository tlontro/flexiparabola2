import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import type { ServiceContent } from "@/content/services";
import Link from "next/link";

export function ServicePage({ content }: { content: ServiceContent }) {
  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        lead={content.lead}
        path={content.path}
        image={content.image}
        imagePosition={content.imagePosition ?? "object-cover"}
        action={content.action}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: content.eyebrow },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-5 text-lg leading-relaxed text-steel">
            {content.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              {content.offeringsTitle}
            </h2>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {content.offerings.map((item) => (
                <div key={item.title} className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
                  <dt className="font-medium text-ink">{item.title}</dt>
                  <dd className="leading-relaxed text-steel">{item.text}</dd>
                </div>
              ))}
            </dl>
            {content.note ? (
              <p className="mt-6 border-l-2 border-brand pl-4 text-sm leading-relaxed text-steel">
                {content.note}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-16" aria-labelledby="relacionados">
        <div className="mx-auto w-full max-w-[1120px] px-5 md:px-8">
          <h2 id="relacionados" className="text-2xl font-semibold tracking-tight text-ink">
            Trabalho relacionado
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {content.related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block h-full border border-line bg-white p-6 transition-colors hover:border-brand"
                >
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-steel">{item.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title={content.cta.title}
        text={content.cta.text}
        primary={{ href: content.cta.href, label: content.cta.label }}
      />
    </>
  );
}
