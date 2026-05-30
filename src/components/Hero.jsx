import { ArrowDown, Download } from "lucide-react";
import { Button } from "./Button";
import { CinematicImage } from "./CinematicImage";
import { Tag } from "./Tag";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-cinematic-radial px-5 pt-32 sm:px-6 lg:px-8">
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink" />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 pb-24 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <Tag className="mb-7 border-gold/30 bg-gold/10 text-gold">
            Growth Marketing Junior · Acquisition · Storytelling · IA
          </Tag>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-muted">
            Bastien Ferrari
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.98] text-ivory sm:text-6xl lg:text-7xl">
            Growth Marketer créatif
          </h1>
          <p className="mt-5 text-lg font-semibold text-gold sm:text-xl">
            Acquisition · Storytelling · IA
          </p>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-ivory/90 sm:text-2xl sm:leading-10">
            Je transforme des idées en messages, des messages en expériences, et des expériences en actions mesurables.
          </p>
          <p className="mt-6 max-w-3xl text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Entrepreneur terrain · 3 logements gérés · 100+ prestations réalisées · 6+ vidéos finalisées · App iOS lancée
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#projets">
              Voir mes projets
              <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/assets/pdf/cv-bastien-ferrari.pdf" download variant="secondary">
              Télécharger mon CV
              <Download className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="relative lg:justify-self-end">
          <div className="absolute -inset-6 rounded-full bg-gold/10 blur-3xl" />
          <CinematicImage
            src="/assets/images/brand/portrait-restaurant.webp"
            alt="Portrait de Bastien Ferrari"
            variant="hero"
            tone="gold"
            className="relative mx-auto max-w-[420px]"
          >
            <div className="w-full">
              <div className="mb-4 h-px w-24 bg-gold/70" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Présence terrain</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-ivory/78">
                Profil humain, sérieux et orienté exécution: comprendre le réel avant d'optimiser le message.
              </p>
            </div>
          </CinematicImage>
        </div>
      </div>
    </section>
  );
}
