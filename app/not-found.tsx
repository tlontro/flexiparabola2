import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-[1120px] px-5 md:px-8">
        <p className="text-xs font-medium tracking-[0.16em] text-brand uppercase">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Esta página não existe.</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-steel">
          O endereço pode estar desatualizado. Volte ao início ou envie o pedido diretamente.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Ir para o início</ButtonLink>
          <ButtonLink href="/contactos" variant="secondary">
            Contactos
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
