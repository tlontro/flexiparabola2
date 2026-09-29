import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Differentiators } from "@/components/Differentiators";
import { PageHero } from "@/components/PageHero";
import { about } from "@/content/about";
import { values } from "@/content/approach";
import { site, contactHref } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: about.metaTitle,
  description: about.metaDescription,
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title={about.title}
        lead={about.lead}
        path="/sobre"
        image={about.image}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Sobre" },
        ]}
        action={{ label: "Falar connosco", href: "/contactos" }}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-5 text-lg leading-relaxed text-steel">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="border border-line bg-paper p-6">
            <h2 className="text-lg font-semibold text-ink">{about.factsTitle}</h2>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="text-xs tracking-[0.14em] text-steel uppercase">Empresa</dt>
                <dd className="mt-1 text-ink">{site.legalName}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-steel uppercase">Localização</dt>
                <dd className="mt-1 text-ink">
                  {site.locality}, {site.country}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-steel uppercase">Atuação</dt>
                <dd className="mt-1 text-ink">{site.coverage}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-steel uppercase">CAE principal</dt>
                <dd className="mt-1 text-ink">
                  {site.cae} — {site.caeLabel}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-steel uppercase">Atividade</dt>
                <dd className="mt-1 text-ink">{site.activity}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-20" aria-labelledby="valores-titulo">
        <div className="mx-auto w-full max-w-[1120px] px-5 md:px-8">
          <h2 id="valores-titulo" className="text-3xl font-semibold tracking-tight text-ink">
            Valores
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <li key={value.title} className="border-t border-line pt-5">
                <h3 className="text-lg font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-steel">{value.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Differentiators />

      <section className="border-t border-line py-16">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-4 px-5 md:flex-row md:items-end md:justify-between md:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">{about.experience.title}</h2>
            <p className="mt-3 leading-relaxed text-steel">{about.experience.text}</p>
          </div>
          <Link href={about.experience.href} className="text-sm font-medium text-brand">
            {about.experience.label} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <CTASection
        title="Quer apresentar uma instalação?"
        text="O primeiro passo é descrever o problema, o equipamento ou a alteração que tem em mãos."
        primary={{ label: "Apresentar um projeto", href: contactHref("Apresentar um projeto") }}
      />
    </>
  );
}
