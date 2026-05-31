import { useState } from "react";
import { CaseStudyCard } from "./CaseStudyCard";
import { CaseStudyModal } from "./CaseStudyModal";

export function CaseStudies({ studies }) {
  const [activeStudy, setActiveStudy] = useState(null);

  return (
    <section id="case-studies" className="scroll-mt-24 px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-6 lg:grid-cols-[.72fr_1fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.28em] text-orange-200">
                Rocket School · Growth execution
              </p>
              <span className="h-px flex-1 bg-gradient-to-r from-orange-300/55 to-transparent" />
            </div>
            <h2 className="font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl">
              Deux systèmes d'acquisition construits comme de vrais assets business.
            </h2>
          </div>
          <p className="text-base leading-8 text-muted">
            ICP, personas, CRM, scoring, outreach, Meta Ads, landing pages et angles créatifs: ces case studies montrent
            une méthode complète pour passer d'un problème de croissance à un système testable.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {studies.map((study) => (
            <CaseStudyCard key={study.title} study={study} onOpen={setActiveStudy} />
          ))}
        </div>
      </div>

      {activeStudy && <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />}
    </section>
  );
}
