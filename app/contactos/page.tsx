import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { contactDetails } from "@/content/site";
import { mailIsConfigured } from "@/lib/mail";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contactos",
  description:
    "Contacte a Flexiparabola II para apresentar um problema, uma instalação ou um projeto industrial. A resposta parte da análise do caso.",
  path: "/contactos",
});

export default async function ContactosPage({ searchParams }: PageProps<"/contactos">) {
  const params = await searchParams;
  const assunto = typeof params.assunto === "string" ? params.assunto : "";

  return (
    <>
      <PageHero
        eyebrow="Contactos"
        title="Tem uma necessidade técnica?"
        lead="Envie-nos uma descrição do problema ou projeto e entraremos em contacto."
        path="/contactos"
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Contactos" },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Email</h2>
            <p className="mt-4 text-lg">
              <a className="font-medium text-ink underline decoration-line underline-offset-4 hover:text-brand" href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </a>
            </p>
          </div>

          <div className="border border-line bg-white p-5 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Enviar pedido</h2>
            <p className="mt-3 leading-relaxed text-steel">
              Indique a empresa e, na mensagem, a instalação ou o problema. Quanto mais concreto for o contexto, mais útil é a primeira resposta.
            </p>
            {mailIsConfigured() ? null : (
              <p className="mt-3 leading-relaxed text-steel">
                Este formulário ainda não envia email. Para já, escreva diretamente para {contactDetails.email}.
              </p>
            )}
            <div className="mt-8">
              <ContactForm defaultSubject={assunto} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
