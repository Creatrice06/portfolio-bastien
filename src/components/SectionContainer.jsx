import { useReveal } from "../hooks/useReveal";

export function SectionContainer({ id, eyebrow, title, children, className = "" }) {
  const reveal = useReveal("slide-up");

  return (
    <section id={id} className={`px-5 py-12 sm:px-6 sm:py-16 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <div
            ref={reveal.ref}
            className={`mb-8 max-w-4xl transition-all duration-700 ease-out ${reveal.className}`}
          >
            {eyebrow && (
              <div className="mb-4 flex items-center gap-4">
                <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
                  {eyebrow}
                </p>
                <span className="h-px flex-1 bg-gradient-to-r from-gold/45 to-transparent" />
              </div>
            )}
            {title && (
              <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
