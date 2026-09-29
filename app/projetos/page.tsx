import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { experience } from "@/content/about";
import { contactHref } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: experience.metaTitle,
  description: experience.metaDescription,
  path: "/projetos",
});

export default function ProjetosPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiência"
        title={experience.title}
        lead={experience.lead}
        path="/projetos"
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Experiência" },
        ]}
      />

      <section className="py-16 md:py-20" aria-labelledby="industrias">
        <div className="mx-auto w-full max-w-[1120px] px-5 md:px-8">
          <h2 id="industrias" className="text-2xl font-semibold tracking-tight text-ink">
            {experience.industriesTitle}
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-steel">{experience.industriesLead}</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experience.industries.map((item) => (
              <li key={item.name} className="border-t-2 border-brand pt-5">
                <div className="flex h-24 items-center">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt=""
                      className="max-h-20 w-auto max-w-[220px] object-contain object-left"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex h-14 w-full items-center justify-center border border-dashed border-line bg-mist px-4 text-center text-sm text-steel"
                    >
                      {item.name}
                    </div>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.name}</h3>
                <p className="mt-2 leading-relaxed text-steel">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-16 md:py-20" aria-labelledby="ambito">
        <div className="mx-auto w-full max-w-[1120px] px-5 md:px-8">
          <h2 id="ambito" className="text-2xl font-semibold tracking-tight text-ink">
            {experience.scope.title}
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-steel">{experience.scope.text}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {experience.scope.items.map((item) => (
              <li key={item} className="border border-line bg-white px-4 py-3 text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="contextos">
        <div className="mx-auto w-full max-w-[1120px] px-5 md:px-8">
          <h2 id="contextos" className="text-2xl font-semibold tracking-tight text-ink">
            Situações típicas
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-steel">
            O contacto parte sempre da instalação concreta, seja numa destas indústrias ou noutro contexto.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {experience.contexts.map((item) => (
              <li key={item.title} className="border-t-2 border-brand pt-5">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-steel">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Precisa de uma referência para um caso concreto?"
        text="As referências discutem-se em função da instalação. Envie o contexto do pedido."
        primary={{ label: "Contactar", href: contactHref("Pedido de referência técnica") }}
      />
    </>
  );
}
