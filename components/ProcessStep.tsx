type ProcessStepProps = {
  step: number;
  title: string;
  text: string;
  isLast?: boolean;
};

export function ProcessStep({ step, title, text, isLast = false }: ProcessStepProps) {
  return (
    <li className="flex flex-col">
      <div className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center border border-ink text-sm font-medium text-ink tabular-nums">
          {step}
        </span>
        {isLast ? null : <span className="hidden h-px flex-1 bg-line lg:block" aria-hidden="true" />}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-steel">{text}</p>
    </li>
  );
}
