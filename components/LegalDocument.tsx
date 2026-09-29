import { PageHero } from "@/components/PageHero";
import type { LegalBlock } from "@/content/legal";

export function LegalDocument({
  title,
  lead,
  path,
  blocks,
}: {
  title: string;
  lead: string;
  path: string;
  blocks: LegalBlock[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Informação legal"
        title={title}
        lead={lead}
        path={path}
        crumbs={[
          { label: "Início", href: "/" },
          { label: title },
        ]}
      />
      <article className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-3xl space-y-5 px-5 text-base leading-relaxed text-steel md:px-8">
          {blocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2 key={index} className="pt-4 text-2xl font-semibold tracking-tight text-ink">
                  {block.text}
                </h2>
              );
            }

            if (block.type === "ul") {
              return (
                <ul key={index} className="list-disc space-y-2 pl-5">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            if (block.type === "todo") {
              return (
                <p key={index} className="border border-line bg-paper px-4 py-3 text-sm text-ink">
                  <span className="font-semibold">TODO:</span> {block.text}
                </p>
              );
            }

            return <p key={index}>{block.text}</p>;
          })}
        </div>
      </article>
    </>
  );
}
