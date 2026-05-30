import React, { useMemo, useRef, useState } from "react";

const CARD = {
  ad: { width: 300, height: 360 },
  landing: { width: 360, height: 410 },
};

const STATUS_OPTIONS = ["Idee", "A tester", "En cours", "Gagnante", "Pause"];

const STATUS_STYLES = {
  Idee: "bg-slate-100 text-slate-700 border-slate-200",
  "A tester": "bg-amber-50 text-amber-800 border-amber-200",
  "En cours": "bg-blue-50 text-blue-800 border-blue-200",
  Gagnante: "bg-emerald-50 text-emerald-800 border-emerald-200",
  Pause: "bg-zinc-100 text-zinc-600 border-zinc-200",
};

const replacementAds = [
  {
    name: "Ad - Diagnostic express",
    angle: "Faire gagner du temps au dirigeant",
    hook: "Votre funnel perd des prospects avant meme le premier appel.",
    format: "Video face camera 30s + captions",
    cta: "Auditer mon funnel",
    kpi: "CTR > 1,7% | CPL qualifie < 95 EUR",
  },
  {
    name: "Ad - Avant / Apres",
    angle: "Montrer le contraste entre trafic et conversion",
    hook: "Vous n'avez pas un probleme d'audience, vous avez un probleme de sequence.",
    format: "Carousel 5 slides",
    cta: "Voir la methode",
    kpi: "CVR LP > 9% | Scroll 75% > 42%",
  },
  {
    name: "Ad - Preuve client",
    angle: "Reduire le risque percu avec un cas concret",
    hook: "Ce que nous avons change pour transformer l'attention en demandes qualifiees.",
    format: "UGC + screen recording",
    cta: "Recevoir le plan",
    kpi: "Hook rate > 32% | CPA < 140 EUR",
  },
];

const initialCards = [
  {
    id: "ad-1",
    type: "ad",
    funnel: "Funnel 1",
    x: 80,
    y: 120,
    data: {
      name: "Ad statique - Clients, pas contenu",
      angle: "Positionnement business: Prospera ne vend pas du contenu, mais un systeme qui genere des demandes.",
      hook: "On pourrait vous faire du contenu. On prefere vous ramener des clients.",
      format: "Statique vertical - Mercure_META Ads_STAT_12.png",
      cta: "Audit gratuit",
      status: "A tester",
      kpi: "CTR > 1,8% | CVR LP > 9% | CPL qualifie < 110 EUR",
      note: "Angle prioritaire pour Prospera: simple, orienté resultat, tres differenciant vs agences de contenu. A mettre en tete de funnel froid.",
    },
  },
  {
    id: "ad-2",
    type: "ad",
    funnel: "Funnel 1",
    x: 410,
    y: 120,
    data: {
      name: "Ad video - Dans le mille",
      angle: "Precision commerciale: l'audit identifie ce qui bloque vraiment la conversion.",
      hook: "Vos ads touchent du monde. Mais est-ce qu'elles touchent les bons clients ?",
      format: "Video - Mercure_META Ads_VID_Dans le mille_V3_AUDIT_Effet Balle (1).mp4",
      cta: "Demander un audit",
      status: "En cours",
      kpi: "Hook rate > 32% | VTR 50% > 24% | CPL qualifie < 120 EUR",
      note: "Bonne video pour faire comprendre la valeur de l'audit: moins de bruit, plus de precision. A connecter a une LP avec diagnostic en 3 etapes.",
    },
  },
  {
    id: "ad-3",
    type: "ad",
    funnel: "Funnel 1",
    x: 740,
    y: 120,
    data: {
      name: "Ad video - Temps perdu",
      angle: "Cout d'opportunite: continuer sans systeme fait perdre du temps, du budget et des prospects.",
      hook: "Combien de temps vos contenus ont-ils deja coute sans ramener de vrais clients ?",
      format: "Video - Mercure_META Ads_VID_Temps Perdu.mp4",
      cta: "Arreter de perdre du temps",
      status: "Idee",
      kpi: "Thumbstop > 35% | CTR > 1,4% | Taux formulaire > 7%",
      note: "Angle de douleur fort, utile pour activer les prospects conscients du probleme. A tester avec un CTA plus direct vers l'audit gratuit.",
    },
  },
  {
    id: "lp-1",
    type: "landing",
    funnel: "Funnel 1",
    x: 430,
    y: 560,
    data: {
      name: "LP - Audit gratuit Prospera",
      promise: "Transformer vos contenus et vos ads en demandes qualifiees, pas seulement en vues.",
      structure: "Hero reprenant l'angle clients, preuve visuelle, symptomes du funnel actuel, methode audit, exemples avant/apres, formulaire de qualification.",
      cta: "Demander mon audit gratuit",
      objective: "Reservation d'un audit qualifie avec contexte budget et maturite marketing",
      link: "https://prospera.studio/audit-gratuit",
      note: "La LP doit reprendre exactement la promesse leader: pas du contenu, des clients. Eviter de parler trop tot de production video.",
    },
  },
  {
    id: "ad-4",
    type: "ad",
    funnel: "Funnel 2",
    x: 1180,
    y: 120,
    data: {
      name: "Ad statique - Avant / Apres",
      angle: "Transformation visible: passer de reseaux qui dorment a un flux de demandes.",
      hook: "Tes reseaux dorment ? On transforme ta presence digitale en acquisition.",
      format: "Statique vertical - Mercure_META Ads_STAT_03.png",
      cta: "Audit gratuit",
      status: "A tester",
      kpi: "CTR > 1,6% | Saves > 2,5% | CVR LP > 8%",
      note: "Tres bon angle visuel pour secteurs restauration, lifestyle et services locaux. Garder la preuve '+15 clients satisfaits' proche du CTA.",
    },
  },
  {
    id: "ad-5",
    type: "ad",
    funnel: "Funnel 2",
    x: 1510,
    y: 120,
    data: {
      name: "Ad video - Faux experts",
      angle: "Objection anti-agence: denoncer les prestataires qui vendent de la visibilite sans acquisition.",
      hook: "Le probleme, ce n'est pas de manquer d'experts. C'est de payer des experts qui ne convertissent rien.",
      format: "Video - Mercure_META Ads_VID_Faux experts.mp4",
      cta: "Verifier votre strategie",
      status: "En cours",
      kpi: "Comment rate > 1% | CTR > 1,3% | Lead qualifie > 40%",
      note: "Angle clivant mais utile pour filtrer les prospects deja decus par agences, freelances ou alternants. A utiliser avec un ton premium, pas agressif.",
    },
  },
  {
    id: "ad-6",
    type: "ad",
    funnel: "Funnel 2",
    x: 1840,
    y: 120,
    data: {
      name: "Ad statique - Prospere",
      angle: "Offre claire: rendre l'accompagnement Prospera concret, accessible et oriente conversion.",
      hook: "Prospere: videos pro, strategie qui convertit, audit gratuit.",
      format: "Statique vertical - Mercure_META Ads_STAT_01.png",
      cta: "Audit gratuit",
      status: "Idee",
      kpi: "CTR > 1,5% | CVR LP > 8% | CPL qualifie < 125 EUR",
      note: "Meilleur que 'Reposte en paix' pour un set principal client: plus premium, plus clair sur l'offre, moins risque en perception. A utiliser en retargeting chaud.",
    },
  },
  {
    id: "lp-2",
    type: "landing",
    funnel: "Funnel 2",
    x: 1530,
    y: 560,
    data: {
      name: "LP - Strategie digitale qui convertit",
      promise: "Remplacer les publications sans effet par une strategie qui attire, rassure et convertit.",
      structure: "Hero avant/apres, diagnostic des reseaux, erreurs frequentes, offre Prospera 750 EUR/mois, preuves clients, audit gratuit.",
      cta: "Recevoir mon audit gratuit",
      objective: "Qualifier les entreprises qui veulent structurer acquisition, contenus et videos",
      link: "https://prospera.studio/strategie-digitale",
      note: "Cette LP doit absorber les angles plus douloureux: reseaux dormants, faux experts, contenus inutiles. Montrer rapidement la methode pour rassurer.",
    },
  },
];

const initialZones = {
  hypotheses: [
    "L'angle 'clients, pas contenu' devrait etre le meilleur angle froid car il parle directement au resultat business.",
    "Les videos devraient mieux qualifier l'intention, les statiques devraient mieux generer le thumbstop et le clic.",
    "L'angle offre claire 'Prospere' devrait mieux convertir en retargeting que les angles purement provocateurs.",
  ],
  kpis: [
    "Priorite media: thumbstop, hook rate, CTR, CPC, VTR 50%, saves, comments.",
    "Priorite business: CVR landing, CPL qualifie, taux de formulaire complet, taux de rendez-vous pris, show rate.",
    "Comparer chaque couple Ad -> LP, surtout 'Clients pas contenu -> Audit gratuit' vs 'Avant/Apres -> Strategie digitale'.",
  ],
  recommendations: [
    "Choisir 'On prefere vous ramener des clients' comme angle leader Prospera.",
    "Garder un mix 3 statiques / 3 videos pour couvrir arret scroll, preuve, objection, offre et intention.",
    "Ne pas vendre la production video en premier: vendre le systeme d'acquisition, puis expliquer que la video est un levier.",
    "Garder 'Reposte en paix' en challenger creatif, pas en angle principal, car le ton peut abaisser la perception premium.",
  ],
  actions: [
    "Creer deux LP miroir: Audit gratuit et Strategie digitale qui convertit.",
    "Lancer les 6 ads avec budget egal pendant 5 a 7 jours avant arbitrage.",
    "Couper les creatives qui font du clic non qualifie, meme si le CTR est bon.",
    "Dupliquer le gagnant en 3 variantes: hook plus direct, preuve plus forte, CTA plus explicite.",
  ],
};

function Field({ label, value, onChange, multiline = false }) {
  const common =
    "mt-1 w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-sm leading-relaxed text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100";

  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
        {label}
      </span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={2}
          className={`${common} resize-none`}
        />
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={common}
        />
      )}
    </label>
  );
}

function StatusSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onPointerDown={(event) => event.stopPropagation()}
      onChange={(event) => onChange(event.target.value)}
      className={`rounded-full border px-3 py-1.5 text-xs font-semibold outline-none transition focus:ring-4 focus:ring-slate-100 ${
        STATUS_STYLES[value] || STATUS_STYLES.Idee
      }`}
    >
      {STATUS_OPTIONS.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function AdCard({ card, onStartDrag, onUpdate, onReplace }) {
  return (
    <article
      className="absolute rounded-[8px] border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.10)] ring-1 ring-white/70"
      style={{ left: card.x, top: card.y, width: CARD.ad.width, minHeight: CARD.ad.height }}
    >
      <div
        onPointerDown={(event) => onStartDrag(event, card.id)}
        className="flex cursor-grab items-center justify-between rounded-t-[8px] border-b border-slate-100 bg-slate-50/90 px-4 py-3 active:cursor-grabbing"
      >
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
            {card.funnel} / Ad
          </p>
          <h3 className="mt-1 text-base font-semibold text-slate-950">{card.data.name}</h3>
        </div>
        <StatusSelect
          value={card.data.status}
          onChange={(value) => onUpdate(card.id, "status", value)}
        />
      </div>

      <div className="grid gap-3 p-4">
        <Field label="Nom de l'ad" value={card.data.name} onChange={(value) => onUpdate(card.id, "name", value)} />
        <Field label="Angle marketing" value={card.data.angle} onChange={(value) => onUpdate(card.id, "angle", value)} />
        <Field label="Hook" value={card.data.hook} onChange={(value) => onUpdate(card.id, "hook", value)} multiline />
        <Field label="Format creatif" value={card.data.format} onChange={(value) => onUpdate(card.id, "format", value)} />
        <div className="grid grid-cols-2 gap-3">
          <Field label="CTA" value={card.data.cta} onChange={(value) => onUpdate(card.id, "cta", value)} />
          <Field label="KPI cible" value={card.data.kpi} onChange={(value) => onUpdate(card.id, "kpi", value)} />
        </div>
        <Field
          label="Note strategique"
          value={card.data.note}
          onChange={(value) => onUpdate(card.id, "note", value)}
          multiline
        />
        <button
          type="button"
          onClick={() => onReplace(card.id)}
          className="mt-1 inline-flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-950 px-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Remplacer cette ad
        </button>
      </div>
    </article>
  );
}

function LandingCard({ card, onStartDrag, onUpdate }) {
  return (
    <article
      className="absolute rounded-[8px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] ring-1 ring-white/70"
      style={{
        left: card.x,
        top: card.y,
        width: CARD.landing.width,
        minHeight: CARD.landing.height,
      }}
    >
      <div
        onPointerDown={(event) => onStartDrag(event, card.id)}
        className="cursor-grab rounded-t-[8px] border-b border-slate-100 bg-gradient-to-r from-slate-950 to-slate-800 px-4 py-4 text-white active:cursor-grabbing"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">
          {card.funnel} / Landing Page
        </p>
        <h3 className="mt-1 text-lg font-semibold">{card.data.name}</h3>
      </div>

      <div className="grid gap-3 p-4">
        <Field label="Nom de la landing page" value={card.data.name} onChange={(value) => onUpdate(card.id, "name", value)} />
        <Field label="Promesse principale" value={card.data.promise} onChange={(value) => onUpdate(card.id, "promise", value)} multiline />
        <Field label="Structure de la page" value={card.data.structure} onChange={(value) => onUpdate(card.id, "structure", value)} multiline />
        <Field label="CTA principal" value={card.data.cta} onChange={(value) => onUpdate(card.id, "cta", value)} />
        <Field label="Objectif de conversion" value={card.data.objective} onChange={(value) => onUpdate(card.id, "objective", value)} />
        <Field label="Lien modifiable" value={card.data.link} onChange={(value) => onUpdate(card.id, "link", value)} />
        <Field label="Note strategique" value={card.data.note} onChange={(value) => onUpdate(card.id, "note", value)} multiline />
      </div>
    </article>
  );
}

function ArrowLayer({ cards }) {
  const cardMap = useMemo(() => new Map(cards.map((card) => [card.id, card])), [cards]);
  const connections = [
    ["ad-1", "lp-1"],
    ["ad-2", "lp-1"],
    ["ad-3", "lp-1"],
    ["ad-4", "lp-2"],
    ["ad-5", "lp-2"],
    ["ad-6", "lp-2"],
  ];

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
      <defs>
        <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
          <path d="M2,2 L10,6 L2,10 Z" fill="#334155" />
        </marker>
      </defs>
      {connections.map(([fromId, toId]) => {
        const from = cardMap.get(fromId);
        const to = cardMap.get(toId);
        if (!from || !to) return null;

        const startX = from.x + CARD.ad.width / 2;
        const startY = from.y + CARD.ad.height;
        const endX = to.x + CARD.landing.width / 2;
        const endY = to.y;
        const midY = startY + Math.max(90, (endY - startY) * 0.52);
        const path = `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY - 10}`;

        return (
          <g key={`${fromId}-${toId}`}>
            <path d={path} fill="none" stroke="rgba(148,163,184,0.35)" strokeWidth="10" />
            <path
              d={path}
              fill="none"
              stroke="#334155"
              strokeDasharray="8 8"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
          </g>
        );
      })}
    </svg>
  );
}

function InsightZone({ title, eyebrow, items, onChange, onAdd }) {
  return (
    <section className="rounded-[8px] border border-slate-200 bg-white/90 p-4 shadow-[0_16px_50px_rgba(15,23,42,0.08)]">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
            {eyebrow}
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-950">{title}</h2>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="h-8 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Ajouter
        </button>
      </div>

      <div className="grid gap-2">
        {items.map((item, index) => (
          <textarea
            key={index}
            value={item}
            onChange={(event) => onChange(index, event.target.value)}
            rows={2}
            className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm leading-relaxed text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100"
          />
        ))}
      </div>
    </section>
  );
}

export default function FunnelCanvasPrototype() {
  const [cards, setCards] = useState(initialCards);
  const [zones, setZones] = useState(initialZones);
  const [zoom, setZoom] = useState(0.82);
  const dragRef = useRef(null);

  function updateCard(id, field, value) {
    setCards((current) =>
      current.map((card) =>
        card.id === id ? { ...card, data: { ...card.data, [field]: value } } : card,
      ),
    );
  }

  function replaceAd(id) {
    setCards((current) =>
      current.map((card) => {
        if (card.id !== id || card.type !== "ad") return card;
        const next = replacementAds[Math.floor(Math.random() * replacementAds.length)];
        return {
          ...card,
          data: {
            ...card.data,
            ...next,
            status: "A tester",
            note: "Nouvelle variante ajoutee. A connecter au message hero de la landing.",
          },
        };
      }),
    );
  }

  function startDrag(event, id) {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    const card = cards.find((item) => item.id === id);
    dragRef.current = {
      id,
      startX: event.clientX,
      startY: event.clientY,
      originX: card.x,
      originY: card.y,
    };
  }

  function moveDrag(event) {
    const drag = dragRef.current;
    if (!drag) return;
    const dx = (event.clientX - drag.startX) / zoom;
    const dy = (event.clientY - drag.startY) / zoom;
    setCards((current) =>
      current.map((card) =>
        card.id === drag.id
          ? {
              ...card,
              x: Math.max(32, Math.round(drag.originX + dx)),
              y: Math.max(32, Math.round(drag.originY + dy)),
            }
          : card,
      ),
    );
  }

  function endDrag() {
    dragRef.current = null;
  }

  function updateZone(zoneKey, index, value) {
    setZones((current) => ({
      ...current,
      [zoneKey]: current[zoneKey].map((item, itemIndex) => (itemIndex === index ? value : item)),
    }));
  }

  function addZoneItem(zoneKey) {
    setZones((current) => ({
      ...current,
      [zoneKey]: [...current[zoneKey], "Nouvelle note strategique a completer."],
    }));
  }

  return (
    <main className="min-h-screen bg-[#f7f8fb] text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/82 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Prospera Studio / Funnel Canvas
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-normal text-slate-950">
              Prototype interactif Ads -> Landing Pages
            </h1>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
            {[0.68, 0.82, 1].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setZoom(value)}
                className={`h-9 rounded-full px-4 text-sm font-semibold transition ${
                  zoom === value ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-white"
                }`}
              >
                {Math.round(value * 100)}%
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] gap-5 px-6 py-6 xl:grid-cols-[1fr_390px]">
        <section className="overflow-auto rounded-[8px] border border-slate-200 bg-[linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] shadow-[0_24px_90px_rgba(15,23,42,0.10)]">
          <div
            className="relative h-[1180px] w-[2300px] origin-top-left"
            style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}
            onPointerMove={moveDrag}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            <div className="absolute left-10 top-8 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              Funnel 1 - diagnostic qualifie
            </div>
            <div className="absolute left-[1110px] top-8 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              Funnel 2 - plan de tests
            </div>

            <ArrowLayer cards={cards} />

            {cards.map((card) =>
              card.type === "ad" ? (
                <AdCard
                  key={card.id}
                  card={card}
                  onStartDrag={startDrag}
                  onUpdate={updateCard}
                  onReplace={replaceAd}
                />
              ) : (
                <LandingCard
                  key={card.id}
                  card={card}
                  onStartDrag={startDrag}
                  onUpdate={updateCard}
                />
              ),
            )}
          </div>
        </section>

        <aside className="grid content-start gap-4">
          <InsightZone
            eyebrow="Validation"
            title="Hypotheses a tester"
            items={zones.hypotheses}
            onChange={(index, value) => updateZone("hypotheses", index, value)}
            onAdd={() => addZoneItem("hypotheses")}
          />
          <InsightZone
            eyebrow="Mesure"
            title="KPI a suivre"
            items={zones.kpis}
            onChange={(index, value) => updateZone("kpis", index, value)}
            onAdd={() => addZoneItem("kpis")}
          />
          <InsightZone
            eyebrow="Strategie"
            title="Recommandations strategiques"
            items={zones.recommendations}
            onChange={(index, value) => updateZone("recommendations", index, value)}
            onAdd={() => addZoneItem("recommendations")}
          />
          <InsightZone
            eyebrow="Execution"
            title="Prochaines actions"
            items={zones.actions}
            onChange={(index, value) => updateZone("actions", index, value)}
            onAdd={() => addZoneItem("actions")}
          />
        </aside>
      </div>
    </main>
  );
}
