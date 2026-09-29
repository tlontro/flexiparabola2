import { ButtonLink } from "@/components/ButtonLink";
import { MediaFrame } from "@/components/MediaFrame";
import { home } from "@/content/home";

export function Hero() {
  const { hero, facts } = home;

  return (
    <section className="border-b border-line bg-paper">
      <div className="grid lg:min-h-[720px] lg:grid-cols-2">
        <div className="flex items-center">
          <div className="rise w-full px-5 py-16 md:px-8 lg:ml-auto lg:max-w-[560px] lg:py-24 lg:pr-16 lg:pl-8">
            <p className="text-xs font-medium tracking-[0.16em] text-brand uppercase">
              {hero.eyebrow}
            </p>
            <h1 className="mt-5 text-[2.15rem] leading-[1.12] font-semibold tracking-tight text-ink md:text-5xl lg:text-[3.15rem]">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">{hero.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={hero.primary.href}>{hero.primary.label}</ButtonLink>
              <ButtonLink href={hero.secondary.href} variant="secondary">
                {hero.secondary.label}
              </ButtonLink>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs tracking-[0.14em] text-steel uppercase">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="relative min-h-[440px] lg:min-h-full">
          <MediaFrame
            image={hero.image}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            imageClassName="object-cover object-[center_30%]"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}
