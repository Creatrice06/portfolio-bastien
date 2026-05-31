import { createPortal } from "react-dom";
import { CheckCircle2, X } from "lucide-react";
import { Tag } from "./Tag";

const sectionLabels = {
  context: "Context",
  problem: "Problem",
  strategy: "Strategy",
  execution: "Execution",
  results: "Results",
  insights: "Key insights",
};

export function CaseStudyModal({ study, onClose }) {
  const content = (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/82 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`Case study ${study.title}`}
      onClick={onClose}
    >
      <button
        className="focus-ring absolute right-5 top-5 rounded-full border border-line bg-ink/85 p-3 text-ivory transition hover:border-orange-300/60"
        type="button"
        onClick={onClose}
        aria-label="Fermer le case study"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <article
        className="relative max-h-[88vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-orange-300/25 bg-[linear-gradient(145deg,rgba(16,24,32,.96),rgba(5,8,12,.99))] shadow-[0_30px_120px_rgba(249,115,22,.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-[radial-gradient(circle_at_18%_0%,rgba(249,115,22,.18),transparent_34%),radial-gradient(circle_at_78%_4%,rgba(216,183,106,.10),transparent_26%)]" />
        <div className="cinematic-grain pointer-events-none absolute inset-0" />

        <div className="relative border-b border-line/70 p-6 sm:p-8 lg:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <Tag className="border-orange-300/30 bg-orange-300/[0.07] text-orange-100">{study.challenge}</Tag>
            <Tag className="border-gold/25 bg-gold/[0.05] text-ivory/80">{study.type}</Tag>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight text-ivory sm:text-5xl">{study.title}</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{study.summary}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="rounded-md border border-line/65 bg-ink/42 p-4">
                  <p className="font-display text-2xl font-bold text-ivory">{metric.value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative grid gap-5 p-6 sm:p-8 lg:grid-cols-[.36fr_.64fr] lg:p-10">
          <aside className="h-fit rounded-lg border border-line/70 bg-ink/45 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-200">Growth stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <Tag key={tag} className="border-orange-300/20 bg-orange-300/[0.055] text-ivory/80">
                  {tag}
                </Tag>
              ))}
            </div>
            <div className="mt-6 border-t border-line/70 pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Pipeline livré</p>
              <div className="mt-4 space-y-3">
                {study.pipeline.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-orange-300/35 bg-orange-300/[0.08] text-xs font-bold text-orange-100">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-ivory/84">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="grid gap-4">
            {Object.entries(study.sections).map(([key, items]) => (
              <section key={key} className="rounded-lg border border-line/70 bg-ivory/[0.025] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-200">{sectionLabels[key]}</p>
                <div className="mt-4 grid gap-3">
                  {items.map((item) => (
                    <p key={item} className="flex gap-3 text-sm leading-7 text-muted">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-200" aria-hidden="true" />
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </div>
  );

  return createPortal(content, document.body);
}
