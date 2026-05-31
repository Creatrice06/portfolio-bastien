import { Button } from "./Button";

const links = [
  ["Profil", "#profil"],
  ["Compétences", "#competences"],
  ["Cases", "#case-studies"],
  ["Expériences", "#experiences"],
  ["Création", "#creation-ia"],
  ["Projets", "#projets"],
  ["Contact", "#contact"],
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/45 bg-ink/70 px-5 backdrop-blur-xl sm:px-6 lg:px-8">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4">
        <a className="focus-ring rounded-sm font-display text-lg font-bold tracking-wide text-ivory" href="#hero">
          Bastien Ferrari
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              className="focus-ring rounded-sm text-sm font-semibold text-muted transition hover:text-ivory"
              href={href}
            >
              {label}
            </a>
          ))}
        </div>

        <Button href="/assets/pdf/cv-bastien-ferrari.pdf" download variant="secondary" className="hidden md:inline-flex">
          CV
        </Button>
      </nav>
    </header>
  );
}
