import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

type CTASectionProps = {
  title: string;
  text: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function CTASection({ title, text, primary, secondary }: CTASectionProps) {
  return (
    <section className="bg-graphite text-white" aria-labelledby="cta-titulo">
      <Container className="py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 id="cta-titulo" className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-on-dark">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primary.href} variant="inverse">
              {primary.label}
            </ButtonLink>
            {secondary ? (
              <ButtonLink href={secondary.href} variant="secondary">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
