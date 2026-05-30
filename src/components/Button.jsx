const variants = {
  primary:
    "bg-gold text-ink shadow-gold hover:-translate-y-0.5 hover:bg-[#e5c77f] hover:shadow-[0_18px_70px_rgba(216,183,106,.22)]",
  secondary:
    "border border-line/80 bg-ivory/[0.03] text-ivory hover:-translate-y-0.5 hover:border-gold/60 hover:bg-gold/[0.08]",
};

export function Button({ href, children, variant = "primary", download, className = "" }) {
  return (
    <a
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-md px-5 text-sm font-bold transition duration-300 ${variants[variant]} ${className}`}
      href={href}
      download={download}
    >
      {children}
    </a>
  );
}
