import { ArrowUpRight, BarChart3, Target, Workflow } from "lucide-react";
import { Tag } from "./Tag";

const iconMap = {
  target: Target,
  workflow: Workflow,
  chart: BarChart3,
};

export function CaseStudyCard({ study, onOpen }) {
  const Icon = iconMap[study.icon] ?? Target;

  return (
    <button
      className="focus-ring group relative overflow-hidden rounded-lg border border-orange-300/20 bg-[linear-gradient(145deg,rgba(16,24,32,.78),rgba(5,8,12,.96))] p-5 text-left shadow-premium backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-orange-300/45 hover:shadow-[0_26px_90px_rgba(249,115,22,.16)] sm:p-6"
      type="button"
      onClick={() => onOpen(study)}
      aria-label={`Ouvrir le case study ${study.title}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(249,115,22,.16),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(216,183,106,.10),transparent_24%)] opacity-75 transition duration-500 group-hover:opacity-100" />
      <div className="cinematic-grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />

      <div className="relative">
        <div className="mb-8 flex items-start justify-between gap-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-orange-200/90">{study.challenge}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-gold">{study.type}</p>
          </div>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-orange-300/30 bg-orange-300/[0.08] text-orange-200 transition group-hover:scale-105 group-hover:bg-orange-300 group-hover:text-ink">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>

        <h3 className="font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl">{study.title}</h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{study.summary}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="rounded-md border border-line/65 bg-ink/38 p-3">
              <p className="font-display text-2xl font-bold text-ivory">{metric.value}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Tag key={tag} className="border-orange-300/20 bg-orange-300/[0.055] text-ivory/80">
              {tag}
            </Tag>
          ))}
        </div>

        <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-orange-200 transition group-hover:text-ivory">
          Voir le case study
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
    </button>
  );
}
