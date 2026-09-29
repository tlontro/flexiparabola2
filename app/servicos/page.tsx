import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { overviewParents, serviceOverview } from "@/content/services";
import { contactHref } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: serviceOverview.metaTitle,
  description: serviceOverview.metaDescription,
  path: "/servicos",
});

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title={serviceOverview.title}
        lead={serviceOverview.lead}
        path="/servicos"
        crumbs={[overviewParents[0], { label: "Serviços" }]}
        action={{ label: "Falar connosco", href: "/contactos" }}
      />

      <div className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1120px] space-y-16 px-5 md:px-8">
          {serviceOverview.groups.map((group) => {
            if (!("items" in group)) {
              return (
                <div key={group.id} id={group.id} className="max-w-2xl scroll-mt-24">
                  <h2 className="text-3xl font-semibold tracking-tight text-ink">{group.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-steel">{group.text}</p>
                </div>
              );
            }

            return (
              <section key={group.id} id={group.id} className="scroll-mt-24 border-t border-line pt-10" aria-labelledby={`${group.id}-titulo`}>
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                  <div>
                    <h2 id={`${group.id}-titulo`} className="text-2xl font-semibold tracking-tight text-ink">
                      {group.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-steel">{group.text}</p>
                    <Link
                      href={group.href}
                      className="mt-6 inline-flex text-sm font-medium text-brand"
                    >
                      Saber mais <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                  </div>
                  <ul className="divide-y divide-line border-y border-line">
                    {group.items.map((item) => (
                      <li key={item} className="py-3 text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <CTASection
        title="Não sabe por qual área começar?"
        text="Descreva o problema ou a instalação. A primeira resposta é técnica, não um menu de serviços."
        primary={{ label: "Pedir análise", href: contactHref("Pedido de análise") }}
      />
    </>
  );
}
