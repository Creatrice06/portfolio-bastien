import { useState } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Play, X } from "lucide-react";
import { Tag } from "./Tag";

export function CreativeVideoSection({ studio }) {
  const [modal, setModal] = useState(null);

  return (
    <section id="creation-ia" className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-4xl">
          <div className="mb-4 flex items-center gap-4">
            <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.28em] text-gold">{studio.eyebrow}</p>
            <span className="h-px flex-1 bg-gradient-to-r from-gold/45 to-transparent" />
          </div>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl">
            {studio.title}
          </h2>
          <p className="mt-4 text-base font-semibold text-gold">{studio.subtitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{studio.description}</p>
        </div>

        <VideoHero video={studio.heroVideo} onOpen={setModal} />
        <YouTubeEmbedSection youtube={studio.youtube} />

        <div className="mt-10">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">6+ vidéos réalisées</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ivory sm:text-3xl">Bibliothèque créative</h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">
              Une sélection resserrée des pièces les plus lisibles: narration, ambiance, montage et expérimentation IA.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {studio.videos.map((video) => (
              <VideoCard key={video.title} video={video} onOpen={setModal} />
            ))}
          </div>
        </div>
      </div>

      {modal && <VideoModal media={modal} onClose={() => setModal(null)} />}
    </section>
  );
}

function VideoHero({ video, onOpen }) {
  const isPlayable = Boolean(video.src || video.embedUrl);
  const Wrapper = isPlayable ? "button" : "article";

  return (
    <article className="group relative overflow-hidden rounded-lg border border-gold/25 bg-[radial-gradient(circle_at_18%_16%,rgba(216,183,106,.11),transparent_28%),linear-gradient(145deg,rgba(16,24,32,.9),rgba(5,8,12,.98))] p-2.5 shadow-premium transition duration-500 hover:border-gold/45 hover:shadow-gold">
      <Wrapper
        className="focus-ring relative block w-full overflow-hidden rounded-xl bg-black text-left"
        type={isPlayable ? "button" : undefined}
        onClick={isPlayable ? () => onOpen(video) : undefined}
        aria-label={`Lire ${video.title}`}
      >
        {video.src ? (
          <video
            className="aspect-[21/9] w-full object-cover opacity-75 saturate-[.82] contrast-[.92] transition duration-700 group-hover:scale-[1.012] group-hover:opacity-90"
            preload="metadata"
            poster={video.poster}
            src={video.src}
          />
        ) : video.poster ? (
          <img
            className="aspect-[21/9] w-full object-cover opacity-75 saturate-[.82] contrast-[.92] transition duration-700 group-hover:scale-[1.012] group-hover:opacity-90"
            src={video.poster}
            alt=""
            loading="lazy"
          />
        ) : (
          <div className="aspect-[21/9] w-full bg-[radial-gradient(circle_at_25%_28%,rgba(216,183,106,.18),transparent_30%),linear-gradient(135deg,#101820,#05080C)]" />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,12,.88),rgba(5,8,12,.22)_58%,rgba(5,8,12,.64)),radial-gradient(circle_at_68%_35%,rgba(216,183,106,.16),transparent_24%)]" />
        <div className="cinematic-grain pointer-events-none absolute inset-0" />
        <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-gold/70 to-transparent" />
        <div className="absolute inset-0 flex items-end p-5 sm:p-7 lg:p-8">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">{video.category}</p>
            <h3 className="mt-2 font-display text-3xl font-bold leading-tight text-ivory sm:text-5xl">
              {video.title}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-ivory/82">
              Pièce centrale de la section: direction narrative, ambiance cinématique, rythme et expérimentation IA.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-gold text-ink shadow-gold transition group-hover:scale-105">
                <Play className="ml-1 h-4 w-4 fill-current" aria-hidden="true" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-ivory">
                {isPlayable ? "Voir le film" : "Preview créative"}
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
    </article>
  );
}

function YouTubeEmbedSection({ youtube }) {
  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
      <div className="overflow-hidden rounded-lg border border-line/70 bg-ivory/[0.03] p-2.5 shadow-premium">
        <a
          className="focus-ring group relative block w-full overflow-hidden rounded-xl border border-line/70 bg-black text-left"
          href={youtube.channelUrl}
          target="_blank"
          rel="noreferrer"
        >
          <div className="aspect-[16/9] bg-[radial-gradient(circle_at_32%_28%,rgba(216,183,106,.16),transparent_26%),linear-gradient(135deg,#101820,#071015_46%,#05080C)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,12,.92),rgba(7,16,21,.52)_58%,rgba(5,8,12,.82))]" />
          <div className="cinematic-grain pointer-events-none absolute inset-0" />
          <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-gold/70 to-transparent" />
          <div className="absolute inset-0 flex items-end p-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Channel embed</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ivory">DreamVibes Studio</h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-ivory/78">
                Aperçu intégré de la chaîne YouTube: contenus IA, formats narratifs et expérimentations vidéo.
              </p>
              <div className="mt-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-ivory">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/45 bg-gold text-ink shadow-gold transition group-hover:scale-105">
                  <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true" />
                </span>
                Ouvrir la sélection
              </div>
            </div>
          </div>
        </a>
        <div className="flex flex-col gap-3 px-2 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">YouTube channel</p>
            <p className="mt-2 text-sm leading-6 text-muted">Hub de contenus narratifs, formats IA et tests créatifs.</p>
          </div>
          <a
            className="focus-ring inline-flex items-center rounded-sm text-sm font-bold text-gold transition hover:text-ivory"
            href={youtube.channelUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ouvrir la chaîne
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="grid gap-3">
        {youtube.cards.map((card) => (
          <article
            key={card.title}
            className="rounded-lg border border-line/70 bg-[linear-gradient(145deg,rgba(16,24,32,.68),rgba(5,8,12,.96))] p-4 text-left shadow-premium"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Sélection YouTube</p>
            <h4 className="mt-2 text-lg font-bold text-ivory">{card.title}</h4>
            <p className="mt-2 text-sm leading-6 text-muted">{card.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function VideoCard({ video, onOpen }) {
  const isPlayable = Boolean(video.src || video.embedUrl);
  const Wrapper = isPlayable ? "button" : "article";

  return (
    <Wrapper
      className={`group overflow-hidden rounded-lg border border-line/70 bg-ivory/[0.03] text-left shadow-premium transition duration-500 ${
        isPlayable ? "focus-ring hover:-translate-y-0.5 hover:border-gold/45 hover:shadow-gold" : ""
      }`}
      type={isPlayable ? "button" : undefined}
      onClick={isPlayable ? () => onOpen(video) : undefined}
    >
      <div className="relative overflow-hidden bg-black">
        {video.src ? (
          <video
            className="aspect-video w-full object-cover opacity-70 saturate-[.82] transition duration-700 group-hover:scale-[1.02] group-hover:opacity-90"
            preload="metadata"
            poster={video.poster}
            src={video.src}
          />
        ) : video.poster ? (
          <img
            className="aspect-video w-full object-cover opacity-70 saturate-[.82] transition duration-700 group-hover:scale-[1.02] group-hover:opacity-90"
            src={video.poster}
            alt=""
            loading="lazy"
          />
        ) : (
          <div className="aspect-video bg-[radial-gradient(circle_at_30%_20%,rgba(216,183,106,.18),transparent_30%),linear-gradient(135deg,#101820,#05080C)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        {isPlayable && (
          <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 bg-ink/80 text-gold transition group-hover:bg-gold group-hover:text-ink">
            <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true" />
          </span>
        )}
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold leading-6 text-ivory">{video.title}</h4>
        <div className="mt-4 flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

function VideoModal({ media, onClose }) {
  const content = (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        className="focus-ring absolute right-5 top-5 rounded-full border border-line bg-ink/85 p-3 text-ivory transition hover:border-gold/60"
        type="button"
        onClick={onClose}
        aria-label="Fermer la vidéo"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
      <div
        className="w-full max-w-6xl overflow-hidden rounded-2xl border border-gold/30 bg-black shadow-gold"
        onClick={(event) => event.stopPropagation()}
      >
        {media.embedUrl ? (
          <iframe
            className="aspect-video w-full"
            src={media.embedUrl}
            title={media.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <video
            className="max-h-[82vh] w-full bg-black object-contain"
            controls
            playsInline
            preload="metadata"
            poster={media.poster}
            src={media.src}
          />
        )}
        <div className="border-t border-line/70 bg-ink px-5 py-4">
          <p className="font-display text-2xl font-bold text-ivory">{media.title}</p>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
