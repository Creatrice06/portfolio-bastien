import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { CaseStudies } from "./components/CaseStudies";
import { CinematicImage } from "./components/CinematicImage";
import { CreativeVideoSection } from "./components/CreativeVideoSection";
import { Divider } from "./components/Divider";
import { ExperienceCard } from "./components/ExperienceCard";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { SectionContainer } from "./components/SectionContainer";
import { SkillCard } from "./components/SkillCard";
import { Tag } from "./components/Tag";
import {
  caseStudies,
  creativeStudio,
  education,
  experiences,
  profileCards,
  projects,
  proofSignals,
  skills,
  tools,
} from "./data/portfolio";

const cvPath = "/assets/pdf/cv-bastien-ferrari.pdf";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-ivory">
      <Navbar />
      <main>
        <Hero />

        <section className="px-5 pb-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-line/70 bg-ivory/[0.035] shadow-premium">
            <div className="grid divide-y divide-line/70 md:grid-cols-4 md:divide-x md:divide-y-0">
              {proofSignals.map((signal) => (
                <div key={signal.label} className="relative p-5">
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                  <p className="font-display text-3xl font-bold text-ivory">{signal.value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-muted">{signal.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionContainer id="profil" eyebrow="Profil" title="Un profil entre terrain, business et création.">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <p className="text-base leading-8 text-ivory/82">
              Profil hybride formé par le terrain: entrepreneuriat, conciergerie, prestations, retail, acquisition et
              création de contenu. Mon avantage vient de cette combinaison: comprendre le client réel, construire un
              message simple, produire vite, puis optimiser ce qui crée une action mesurable.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {profileCards.map((card) => (
                <Card key={card.title}>
                  <h3 className="text-xl font-bold text-ivory">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{card.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </SectionContainer>

        <Divider />

        <SectionContainer id="competences" eyebrow="Compétences" title="Des compétences orientées acquisition et exécution.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </SectionContainer>

        <Divider />

        <CaseStudies studies={caseStudies} />

        <Divider />

        <SectionContainer id="experiences" eyebrow="Expériences" title="Une trajectoire construite par l'action.">
          <div className="relative space-y-5 border-l border-line/80 pl-5">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.company} experience={experience} />
            ))}
          </div>
        </SectionContainer>

        <Divider />

        <section className="px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <CinematicImage
              src="/assets/images/brand/vision-architecture.png"
              alt="Portrait de Bastien Ferrari avec architecture moderne"
              variant="divider"
              tone="dark"
              imageClassName="object-[72%_18%]"
            >
              <div className="max-w-xl">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
                  Direction créative
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl">
                  Relier vision, contenu et croissance.
                </h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-ivory/82">
                  Une approche pensée pour passer d'une intuition à une expérience claire: angle, récit, exécution,
                  mesure, puis amélioration.
                </p>
              </div>
            </CinematicImage>
          </div>
        </section>

        <Divider />

        <CreativeVideoSection studio={creativeStudio} />

        <Divider />

        <SectionContainer id="projets" eyebrow="Projets digitaux" title="Des preuves visuelles, pas seulement des promesses.">
          <p className="-mt-3 mb-7 max-w-3xl text-base leading-8 text-muted">
            Cette section est pensée comme un mini showreel: elle montre la capacité à construire un produit, à raconter,
            à produire du contenu et à relier l'exécution créative à une logique growth.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </SectionContainer>

        <section className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-gold/25 bg-[radial-gradient(circle_at_15%_20%,rgba(216,183,106,.12),transparent_26%),linear-gradient(135deg,rgba(16,24,32,.9),rgba(5,8,12,.96))] p-6 shadow-gold sm:p-8 lg:p-10">
            <div className="mb-5 flex items-center gap-4">
              <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.28em] text-gold">Vision</p>
              <span className="h-px flex-1 bg-gradient-to-r from-gold/45 to-transparent" />
            </div>
            <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <h2 className="font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl">
                Créer du ressenti. Mesurer l'impact.
              </h2>
              <div>
                <p className="text-base leading-8 text-ivory/84">
                  Le storytelling donne une raison d'écouter. L'IA accélère la production. Le marketing transforme
                  l'attention en parcours, puis en résultats observables. Mon approche relie émotion, clarté et
                  performance pour créer des contenus et des expériences qui servent un objectif business.
                </p>
                <blockquote className="mt-6 border-l-2 border-gold pl-5 font-display text-xl leading-8 text-gold">
                  “Une marque forte ne vend pas seulement ce qu'elle fait. Elle vend ce qu'elle fait ressentir.”
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <SectionContainer id="formation" eyebrow="Formation" title="Formation continue, business et croissance.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {education.map((item) => (
              <Card key={item} className="min-h-32">
                <p className="text-sm font-bold leading-6 text-ivory">{item}</p>
              </Card>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer id="outils" eyebrow="Outils" title="Stack de création, acquisition et automatisation." className="pt-4">
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <Tag key={tool} className="border-gold/20 bg-gold/[0.06] px-4 py-2 text-sm text-ivory/85">
                {tool}
              </Tag>
            ))}
          </div>
        </SectionContainer>

        <section id="contact" className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-lg border border-line/70 bg-ivory/[0.035] p-8 shadow-premium sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_.82fr] lg:items-center">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">Contact</p>
                <h2 className="font-display text-3xl font-bold leading-tight text-ivory sm:text-5xl">
                  Discutons croissance, contenu et acquisition.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                  Disponible pour échanger avec des équipes growth, marketing, contenu ou produit qui cherchent un profil
                  junior capable de relier idée, exécution et résultat.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="mailto:bastienferrari1994@gmail.com">Me contacter</Button>
                  <Button href={cvPath} download variant="secondary">
                    Télécharger mon CV
                  </Button>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border border-line/70 bg-ink/45 p-6">
                <a className="focus-ring flex gap-3 rounded-sm text-muted transition hover:text-ivory" href="mailto:bastienferrari1994@gmail.com">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span>bastienferrari1994@gmail.com</span>
                </a>
                <a className="focus-ring flex gap-3 rounded-sm text-muted transition hover:text-ivory" href="tel:+33661138028">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span>06.61.13.80.28</span>
                </a>
                <p className="flex gap-3 text-muted">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span>Provence-Alpes-Côte d'Azur</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
