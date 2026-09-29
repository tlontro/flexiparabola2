import { CTASection } from "@/components/CTASection";
import { Differentiators } from "@/components/Differentiators";
import { Hero } from "@/components/Hero";
import { IndustryCard } from "@/components/IndustryCard";
import { ProcessStep } from "@/components/ProcessStep";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ButtonLink } from "@/components/ButtonLink";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Engenharia e Serviços Técnicos para a Indústria | Flexiparabola II",
  description:
    "Serviços técnicos, engenharia industrial e elétrica, montagem de instalações e manutenção para empresas industriais. Flexiparabola II, Tondela.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-b border-line" aria-label="Atividade">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-3 px-5 py-8 md:flex-row md:items-baseline md:justify-between md:px-8">
          <p className="text-xs font-medium tracking-[0.16em] text-brand uppercase">Atividade</p>
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-ink">{site.activity}</p>
            <p className="mt-2 leading-relaxed text-steel">{site.coverage}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="areas-titulo">
        <div className="mx-auto w-full max-w-[1120px] px-5 md:px-8">
          <SectionHeading
            id="areas-titulo"
            eyebrow={home.areas.eyebrow}
            title={home.areas.title}
            text={home.areas.lead}
          />
          <ul className="mt-12 grid border-t border-line md:grid-cols-2">
            {home.areas.items.map((item) => (
              <li key={item.href} className="border-b border-line md:odd:border-r">
                <ServiceCard {...item} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-16 md:py-24" aria-labelledby="processo-titulo">
        <div className="mx-auto w-full max-w-[1120px] px-5 md:px-8">
          <SectionHeading
            id="processo-titulo"
            eyebrow={home.process.eyebrow}
            title={home.process.title}
            text={home.process.lead}
          />
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {home.process.steps.map((step, index) => (
              <ProcessStep
                key={step.title}
                step={index + 1}
                title={step.title}
                text={step.text}
                isLast={index === home.process.steps.length - 1}
              />
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="situacoes-titulo">
        <div className="mx-auto w-full max-w-[1120px] px-5 md:px-8">
          <SectionHeading
            id="situacoes-titulo"
            eyebrow={home.situations.eyebrow}
            title={home.situations.title}
            text={home.situations.lead}
          />
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {home.situations.items.map((item) => (
              <li key={item.title}>
                <IndustryCard title={item.title} href={item.href} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Differentiators />

      <section className="border-t border-line py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.16em] text-brand uppercase">
              {home.equipment.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
              {home.equipment.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">{home.equipment.text}</p>
          </div>
          <ButtonLink href={home.equipment.link.href} variant="secondary">
            {home.equipment.link.label}
          </ButtonLink>
        </div>
      </section>

      <CTASection
        title={home.cta.title}
        text={home.cta.text}
        primary={home.cta.primary}
        secondary={home.cta.secondary}
      />
    </>
  );
}
