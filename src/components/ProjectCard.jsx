import { useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  LockKeyhole,
  PhoneCall,
  Sparkles,
  X,
} from "lucide-react";
import { Card } from "./Card";
import { Tag } from "./Tag";

export function ProjectCard({ project }) {
  const [mode, setMode] = useState("results");

  if (project.layout === "aura-conciergerie") {
    return <AuraConciergerieCard project={project} mode={mode} setMode={setMode} />;
  }

  return (
    <Card className={`flex h-full flex-col overflow-hidden p-0 ${project.featured ? "md:col-span-2" : ""}`}>
      <ProjectMedia project={project} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{project.category}</p>
          {project.badge && (
            <span className="rounded-full border border-line/70 bg-graphite/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
              {project.badge}
            </span>
          )}
          {project.confidential && <ConfidentialBadge />}
        </div>
        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <h3 className="text-xl font-bold text-ivory sm:text-2xl">{project.title}</h3>
          {project.caseStudy && (
            <div className="inline-flex w-fit rounded-full border border-line/70 bg-ink/60 p-1">
              {[
                ["results", "Voir résultat"],
                ["process", "Voir processus"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                    mode === value ? "bg-gold text-ink" : "text-muted hover:text-ivory"
                  }`}
                  type="button"
                  onClick={() => setMode(value)}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{project.description}</p>
        {project.caseStudy && <CaseStudyList items={project.caseStudy[mode]} />}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <a className="focus-ring inline-flex items-center rounded-sm text-sm font-bold text-gold transition hover:text-ivory" href="#contact">
            Voir le projet
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
          {project.siteUrl && (
            <a
              className="focus-ring inline-flex items-center rounded-sm text-sm font-bold text-ivory/85 transition hover:text-gold"
              href={project.siteUrl}
              target="_blank"
              rel="noreferrer"
            >
              Voir le site
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

function CaseStudyList({ items }) {
  return (
    <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted md:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="rounded-md border border-line/60 bg-ink/35 p-3">
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProjectMedia({ project }) {
  if (project.layout === "app-showcase") {
    return <AppShowcaseMedia project={project} />;
  }

  if (project.layout === "clean-genius") {
    return <CleanGeniusMedia project={project} />;
  }

  if (project.slides || project.videos) {
    return (
      <div className="border-b border-line/70 bg-ink/70 p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted">
            {project.mediaLabel}
          </p>
          {project.featured && <span className="h-px flex-1 bg-gradient-to-r from-gold/45 to-transparent" />}
        </div>

        {project.slides && (
          <div className="grid gap-3 lg:grid-cols-[1.25fr_.75fr]">
            <figure className="overflow-hidden rounded-md border border-line/70 bg-graphite/70">
              <img
                className="h-full w-full object-cover"
                src={project.slides[0]}
                alt="Slide de présentation VocalDigest"
                loading="lazy"
              />
            </figure>
            <div className="grid grid-cols-3 gap-2 lg:grid-cols-2">
              {project.slides.slice(1, 5).map((slide, index) => (
                <img
                  key={slide}
                  className="aspect-video rounded-md border border-line/60 object-cover opacity-85 transition group-hover:opacity-100"
                  src={slide}
                  alt={`Slide VocalDigest ${index + 2}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}

        {project.videos && (
          <div className={`mt-3 grid gap-3 ${project.videos.length > 1 ? "lg:grid-cols-2" : ""}`}>
            {project.videos.map((video) => (
              <figure key={video.src ?? video.poster ?? video.title} className="overflow-hidden rounded-md border border-line/70 bg-black">
                {video.src ? (
                  <video
                    className="aspect-video w-full object-cover"
                    autoPlay
                    controls
                    loop
                    muted
                    playsInline
                    poster={video.poster}
                    preload="metadata"
                    src={video.src}
                  />
                ) : (
                  <img
                    className="aspect-video w-full object-cover"
                    src={video.poster}
                    alt=""
                    loading="lazy"
                  />
                )}
                <figcaption className="flex items-center justify-between gap-3 border-t border-line/70 bg-ink/85 px-4 py-3 text-xs text-muted">
                  <span>{video.title}</span>
                  {video.status && <span className="text-gold">{video.status}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden border-b border-line/70 bg-[radial-gradient(circle_at_28%_22%,rgba(216,183,106,.24),transparent_24%),linear-gradient(135deg,#101820,#071015_55%,#05080C)]">
      <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-gold/55 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 rounded-md border border-line/60 bg-ink/35 p-4 backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Case study</p>
        <p className="mt-2 text-sm leading-6 text-ivory/80">Média extensible: screenshots, vidéo, deck ou PDF.</p>
      </div>
    </div>
  );
}

function AuraConciergerieCard({ project, mode, setMode }) {
  return (
    <Card className="md:col-span-2 overflow-hidden p-0">
      <div className="space-y-6 border-b border-line/70 bg-[radial-gradient(circle_at_16%_0%,rgba(216,183,106,.09),transparent_28%),linear-gradient(145deg,rgba(16,24,32,.72),rgba(5,8,12,.96))] p-5 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">{project.category}</p>
              <span className="rounded-full border border-line/70 bg-graphite/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                {project.badge}
              </span>
            </div>
            <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-3 text-lg font-semibold text-gold">{project.subtitle}</p>
          </div>
          <p className="text-base leading-8 text-muted">{project.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {project.operationCards.map((item, index) => (
            <div
              key={item.title}
              className="rounded-lg border border-line/70 bg-ink/50 p-4"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.08] font-display text-lg font-bold text-gold">
                {index + 1}
              </div>
              <p className="text-lg font-bold text-ivory">{item.title}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
            </div>
          ))}
        </div>

        <AuraPerformanceBlock project={project} />

        <div className="grid gap-3 rounded-lg border border-gold/25 bg-gold/[0.06] p-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.proofStats.map((stat) => (
            <div key={stat.label} className="rounded-md border border-line/60 bg-ink/55 p-4">
              <p className="font-display text-2xl font-bold text-ivory">{stat.value}</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">
              Case study immobilier
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              Aura Conciergerie est traité comme une activité immobilière et opérationnelle: gestion locative,
              expérience voyageur, communication client et qualité terrain.
            </p>
          </div>
          <div className="inline-flex w-fit rounded-full border border-line/70 bg-ink/60 p-1">
            {[
              ["results", "Voir résultat"],
              ["process", "Voir processus"],
            ].map(([value, label]) => (
              <button
                key={value}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                  mode === value ? "bg-gold text-ink" : "text-muted hover:text-ivory"
                }`}
                type="button"
                onClick={() => setMode(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <CaseStudyList items={project.caseStudy[mode]} />

        <div className="mt-6 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-4">
          <a className="focus-ring inline-flex items-center rounded-sm text-sm font-bold text-gold transition hover:text-ivory" href="#contact">
            Voir le projet
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
          <a
            className="focus-ring inline-flex items-center rounded-sm text-sm font-bold text-ivory/85 transition hover:text-gold"
            href={project.siteUrl}
            target="_blank"
            rel="noreferrer"
          >
            Voir le site
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </Card>
  );
}

function AuraPerformanceBlock({ project }) {
  return (
    <section className="rounded-lg border border-gold/25 bg-[linear-gradient(145deg,rgba(216,183,106,.06),rgba(16,24,32,.38))] p-4 shadow-[0_18px_60px_rgba(0,0,0,.2)] sm:p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
            Performance immobilière intégrée
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Données PriceLabs liées à l'activité Aura Conciergerie, présentées comme case study privé.
          </p>
        </div>
        {project.confidential && <ConfidentialBadge />}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_.82fr]">
        <div className="rounded-md border border-line/70 bg-ink/55 p-4">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
            KPI dashboard
          </p>
          <div className="grid gap-2 sm:grid-cols-3">
            {project.kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-md border border-line/60 bg-black/20 p-3">
                <p className="font-display text-xl font-bold text-ivory sm:text-2xl">{kpi.value}</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">{kpi.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-5 text-muted">
            Confidentiel - données d'exploitation réelle. Présentation limitée au portfolio et à la lecture recruteur.
          </p>
        </div>

        <a
          className="focus-ring group overflow-hidden rounded-md border border-gold/35 bg-ink/70"
          href={project.reportPdf}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="aspect-[4/3] w-full object-cover object-top opacity-90 transition duration-700 group-hover:scale-[1.018] group-hover:opacity-100"
            src={project.reportPreview}
            alt="Aperçu du rapport PriceLabs Aura Conciergerie"
            loading="lazy"
          />
          <div className="flex items-center justify-between gap-3 border-t border-gold/25 px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-muted">
            <span className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4 text-gold" aria-hidden="true" />
              Preview PDF PriceLabs
            </span>
            <span className="text-gold">Ouvrir</span>
          </div>
        </a>
      </div>
    </section>
  );
}

function AppShowcaseMedia({ project }) {
  const demo = project.videos?.[0];
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="border-b border-line/70 bg-ink/70 p-4">
      <MediaHeader label={project.mediaLabel} featured={project.featured} />
      <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
        <div className="grid gap-3">
          <button
            className="focus-ring overflow-hidden rounded-md border border-line/70 bg-graphite/70 text-left"
            type="button"
            onClick={() => setActiveImage(0)}
          >
            <img
              className="aspect-video w-full bg-ink object-contain transition duration-700 hover:scale-[1.015]"
              src={project.slides[0]}
              alt="Cartographie du projet VocalDigest"
              loading="lazy"
            />
          </button>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {project.slides.slice(1).map((slide, index) => (
              <button
                key={slide}
                className="focus-ring overflow-hidden rounded-md border border-line/60 bg-ink"
                type="button"
                onClick={() => setActiveImage(index + 1)}
              >
                <img
                  className="aspect-video w-full object-contain opacity-85 transition duration-500 hover:scale-[1.02] hover:opacity-100"
                  src={slide}
                  alt={`Slide VocalDigest ${index + 2}`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {demo && (
          <figure className="mx-auto w-full max-w-[280px]">
            <div className="relative rounded-[2rem] border border-gold/35 bg-black p-2 shadow-[0_24px_90px_rgba(216,183,106,.18)]">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
            {demo.src ? (
              <video
                className="aspect-[9/16] w-full rounded-[1.45rem] object-cover"
                autoPlay
                controls
                loop
                muted
                playsInline
                poster={demo.poster}
                preload="metadata"
                src={demo.src}
              />
            ) : (
              <img
                className="aspect-[9/16] w-full rounded-[1.45rem] object-cover"
                src={demo.poster}
                alt=""
                loading="lazy"
              />
            )}
            </div>
            <figcaption className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Format social ads 9:16
            </figcaption>
          </figure>
        )}
      </div>
      {activeImage !== null && (
        <Lightbox
          images={project.slides}
          activeIndex={activeImage}
          onClose={() => setActiveImage(null)}
          onChange={setActiveImage}
        />
      )}
    </div>
  );
}

function CleanGeniusMedia({ project }) {
  return (
    <div className="border-b border-line/70 bg-ink/70 p-4">
      <MediaHeader label={project.mediaLabel} featured={project.featured} />
      <div className="grid gap-4 lg:grid-cols-[1fr_.95fr]">
        <div className="overflow-hidden rounded-md border border-line/70 bg-[#f7fafc] p-2">
          <img
            className="aspect-[4/3] w-full rounded-sm object-cover object-top"
            src={project.audienceImage}
            alt="Audience CleanGenius issue des statistiques sociales"
            loading="lazy"
          />
        </div>

        <div className="grid gap-3">
          <div className="rounded-md border border-gold/25 bg-gold/[0.07] p-4">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Offre claire
            </div>
            <div className="grid gap-2">
              {project.offers.map((offer) => (
                <div key={offer.price} className="flex items-center justify-between rounded-md border border-line/60 bg-ink/55 px-4 py-3">
                  <span className="text-sm font-semibold text-muted">{offer.label}</span>
                  <span className="font-display text-2xl font-bold text-ivory">{offer.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm font-bold text-gold">Déplacement gratuit</p>
          </div>

          <div className="rounded-md border border-line/70 bg-graphite/55 p-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-muted">Pipeline de conversion</p>
            <div className="flex flex-wrap items-center gap-2">
              {project.pipeline.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-line/70 bg-ink px-3 py-2 text-xs font-bold text-ivory">
                    {step}
                  </span>
                  {index < project.pipeline.length - 1 && <ArrowRight className="h-4 w-4 text-gold" aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {project.adCreatives.map((creative) => (
          <div key={creative.hook} className="rounded-md border border-line/70 bg-[linear-gradient(145deg,rgba(16,24,32,.88),rgba(5,8,12,.94))] p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">{creative.angle}</p>
            <p className="mt-3 text-lg font-bold leading-6 text-ivory">{creative.hook}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line/70 bg-ink px-3 py-2 text-xs font-bold text-muted">
              <PhoneCall className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {creative.proof}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConfidentialBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/35 bg-gold/[0.07] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
      <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
      Confidentiel
    </span>
  );
}

function Lightbox({ images, activeIndex, onClose, onChange }) {
  const [touchStart, setTouchStart] = useState(null);
  const previous = () => onChange((activeIndex - 1 + images.length) % images.length);
  const next = () => onChange((activeIndex + 1) % images.length);

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;
    const delta = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(delta) > 45) {
      if (delta > 0) previous();
      else next();
    }
    setTouchStart(null);
  };

  const content = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className="focus-ring absolute right-5 top-5 rounded-full border border-line bg-ink/80 p-3 text-ivory transition hover:border-gold/60"
        type="button"
        onClick={onClose}
        aria-label="Fermer la galerie"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        className="focus-ring absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-line bg-ink/80 p-3 text-ivory transition hover:border-gold/60 sm:block"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          previous();
        }}
        aria-label="Image précédente"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex max-h-[80vh] max-w-[90vw] items-center justify-center" onClick={(event) => event.stopPropagation()}>
        <img
          className="h-auto max-h-[80vh] w-auto max-w-[90vw] rounded-lg border border-line object-contain shadow-premium"
          src={images[activeIndex]}
          alt={`Slide VocalDigest ${activeIndex + 1}`}
        />
      </div>
      <button
        className="focus-ring absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-line bg-ink/80 p-3 text-ivory transition hover:border-gold/60 sm:block"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          next();
        }}
        aria-label="Image suivante"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-line bg-ink/80 px-4 py-2 text-xs font-bold text-muted">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );

  return createPortal(content, document.body);
}

function MediaHeader({ label, featured }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted">
        {label}
      </p>
      {featured && <span className="h-px flex-1 bg-gradient-to-r from-gold/45 to-transparent" />}
    </div>
  );
}
