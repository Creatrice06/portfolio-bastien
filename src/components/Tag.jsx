export function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line/75 bg-graphite/65 px-3 py-1 text-xs font-semibold text-muted ${className}`}
    >
      {children}
    </span>
  );
}
