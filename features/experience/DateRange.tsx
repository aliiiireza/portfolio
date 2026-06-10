interface DateRangeProps {
  range: string;
}

export function DateRange({ range }: DateRangeProps) {
  const parts = range.split(" — ");

  if (parts.length !== 2) {
    return (
      <time className="text-sm font-medium text-accent">{range}</time>
    );
  }

  const [start, end] = parts;

  return (
    <time className="inline-flex flex-col text-sm font-medium leading-snug text-accent">
      <span className="whitespace-nowrap">{start}</span>
      <span className="whitespace-nowrap">{end}</span>
    </time>
  );
}
