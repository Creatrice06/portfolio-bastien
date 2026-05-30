import { useReveal } from "../hooks/useReveal";

export function Card({ children, className = "", as: Tag = "article", revealVariant = "fade-up" }) {
  const reveal = useReveal(revealVariant);

  return (
    <Tag
      ref={reveal.ref}
      className={`group rounded-lg border border-line/65 bg-ivory/[0.03] p-5 shadow-premium backdrop-blur transition-all duration-700 ease-out hover:-translate-y-0.5 hover:border-gold/40 hover:bg-ivory/[0.05] hover:shadow-gold ${reveal.className} ${className}`}
    >
      {children}
    </Tag>
  );
}
