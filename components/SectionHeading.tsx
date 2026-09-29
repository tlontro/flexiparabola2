type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, text, id }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-medium tracking-[0.16em] text-brand uppercase">{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl"
      >
        {title}
      </h2>
      {text ? <p className="mt-4 text-lg leading-relaxed text-steel">{text}</p> : null}
    </div>
  );
}
