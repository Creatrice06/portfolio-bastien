const variantStyles = {
  hero: {
    frame: "rounded-lg border border-gold/25 bg-graphite/70 p-2 shadow-gold",
    media: "aspect-[4/5] rounded-md",
    content: "items-end",
    image: "object-cover object-[50%_22%]",
    overlay:
      "bg-[radial-gradient(circle_at_50%_18%,rgba(216,183,106,.10),transparent_28%),linear-gradient(180deg,rgba(7,16,21,.10),rgba(5,8,12,.48))]",
  },
  divider: {
    frame: "rounded-lg border border-gold/25 bg-black p-0 shadow-premium",
    media: "h-[220px] rounded-lg sm:h-[250px] lg:h-[280px]",
    content: "items-center",
    image: "scale-[1.04] object-cover object-center saturate-[.68] contrast-[.84]",
    overlay:
      "bg-[linear-gradient(90deg,rgba(5,8,12,.94),rgba(7,16,21,.64)_48%,rgba(5,8,12,.76)),radial-gradient(circle_at_70%_30%,rgba(216,183,106,.08),transparent_26%)]",
  },
  card: {
    frame: "rounded-lg border border-line/70 bg-graphite/70 p-2 shadow-premium",
    media: "aspect-video rounded-md",
    content: "items-end",
    image: "object-cover object-center",
    overlay: "bg-[linear-gradient(180deg,rgba(7,16,21,.08),rgba(5,8,12,.38))]",
  },
};

const toneStyles = {
  dark: "bg-midnight/20",
  gold: "bg-gold/[0.035]",
  neutral: "bg-black/10",
};

export function CinematicImage({
  src,
  alt,
  variant = "card",
  tone = "dark",
  className = "",
  imageClassName = "",
  children,
}) {
  const styles = variantStyles[variant] ?? variantStyles.card;
  const toneClass = toneStyles[tone] ?? toneStyles.dark;

  return (
    <figure
      className={`group relative overflow-hidden ${styles.frame} ${className}`}
    >
      <div className={`relative overflow-hidden ${styles.media}`}>
        <img
          className={`h-full w-full transition duration-700 group-hover:scale-[1.025] ${styles.image} ${imageClassName}`}
          src={src}
          alt={alt}
          loading={variant === "hero" ? "eager" : "lazy"}
        />
        <div className={`pointer-events-none absolute inset-0 ${styles.overlay}`} />
        <div
          className={`pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 ${toneClass}`}
        />
        <div className="cinematic-grain pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        {children && <div className={`absolute inset-0 flex p-6 sm:p-8 ${styles.content}`}>{children}</div>}
      </div>
    </figure>
  );
}
