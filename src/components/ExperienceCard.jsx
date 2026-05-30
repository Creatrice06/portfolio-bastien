import { Card } from "./Card";

export function ExperienceCard({ experience }) {
  return (
    <Card className="relative pl-8">
      <span className="absolute left-0 top-8 h-3 w-3 -translate-x-[7px] rounded-full border border-gold bg-ink shadow-[0_0_0_6px_rgba(216,183,106,.08)]" />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">{experience.company}</p>
          <h3 className="mt-2 text-2xl font-bold text-ivory">{experience.role}</h3>
        </div>
        <p className="text-sm font-semibold text-muted">{experience.timeframe}</p>
      </div>
      <ul className="mt-4 space-y-2.5 text-sm leading-6 text-muted">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
