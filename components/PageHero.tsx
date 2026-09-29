import type { SiteImage } from "@/content/images";
import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { MediaFrame } from "@/components/MediaFrame";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  crumbs: Crumb[];
  path: string;
  image?: SiteImage;
  imagePosition?: string;
  action?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  path,
  image,
  imagePosition = "object-cover",
  action,
}: PageHeroProps) {
  return (
    <section className="border-b border-line bg-paper">
      <Container className="grid gap-10 py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:py-20">
        <div>
          <Breadcrumb items={crumbs} path={path} />
          <p className="text-xs font-medium tracking-[0.16em] text-brand uppercase">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-steel">{lead}</p>
          {action ? (
            <div className="mt-8">
              <ButtonLink href={action.href}>{action.label}</ButtonLink>
            </div>
          ) : null}
        </div>
        {image ? (
          <MediaFrame
            image={image}
            sizes="(min-width: 1024px) 480px, 100vw"
            imageClassName={imagePosition}
            className="aspect-[4/3]"
          />
        ) : null}
      </Container>
    </section>
  );
}
