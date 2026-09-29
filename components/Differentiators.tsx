import { SectionHeading } from "@/components/SectionHeading";
import { differentiators } from "@/content/approach";

export function Differentiators() {
  return (
    <section className="border-t border-line py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1120px] px-5 md:px-8">
        <SectionHeading
          eyebrow={differentiators.eyebrow}
          title={differentiators.title}
        />
        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.items.map((item) => (
            <li key={item.title} className="border-t-2 border-brand pt-5">
              <h3 className="text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-steel">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
