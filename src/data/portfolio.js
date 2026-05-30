export const profileCards = [
  {
    title: "Terrain",
    text: "Gestion opérationnelle, relation client, qualité de service et exécution rapide sur des prestations réelles.",
  },
  {
    title: "Growth",
    text: "Funnels, acquisition payante, bases SEO/ASO, KPI, tests, itérations et optimisation de parcours.",
  },
  {
    title: "Création",
    text: "Storytelling, contenus courts, vidéo IA, scripts, angles créatifs et messages conçus pour déclencher l'action.",
  },
];

export const skills = [
  {
    title: "Acquisition & Funnels",
    description: "Landing pages, tunnels simples, Meta Ads, Google Ads et logique de conversion.",
  },
  {
    title: "Copywriting & Storytelling",
    description: "Positionnement, angles créatifs, scripts, promesses et clarté commerciale.",
  },
  {
    title: "IA générative & contenu vidéo",
    description: "Création de contenus augmentés, avatars IA, montage et narration cinématique.",
  },
  {
    title: "Expérience client",
    description: "Qualité perçue, avis, satisfaction, suivi terrain et parcours fluide.",
  },
  {
    title: "Analyse & optimisation",
    description: "Lecture de résultats, itérations, priorisation, hypothèses et amélioration continue.",
  },
  {
    title: "Exécution terrain",
    description: "Coordination, autonomie, résolution de problèmes et passage rapide de l'idée au réel.",
  },
];

export const experiences = [
  {
    company: "Aura Conciergerie",
    role: "Entrepreneur short-term rental",
    timeframe: "2024 - aujourd'hui",
    bullets: [
      "Gestion de 3 logements avec optimisation de l'expérience voyageur.",
      "Statut Superhost et notes moyennes entre 4.6 et 4.8.",
      "Coordination terrain, qualité opérationnelle, messages clients et suivi de performance.",
    ],
  },
  {
    company: "CleanGenius / PurePropre",
    role: "Founder",
    timeframe: "2024 - 2025",
    bullets: [
      "100+ opérations réalisées, de l'acquisition client à la livraison.",
      "Mise en place d'un système d'acquisition Meta Ads et de funnels de qualification.",
      "Création des offres, messages, supports commerciaux et processus de conversion.",
    ],
  },
  {
    company: "E.Leclerc / Intermarché",
    role: "Expérience retail",
    timeframe: "Parcours terrain",
    bullets: [
      "Contact client, rigueur opérationnelle et rythme d'exécution en environnement exigeant.",
      "Compréhension des comportements d'achat, de la disponibilité produit et du service.",
      "Base solide pour relier marketing, terrain et expérience concrète.",
    ],
  },
];

export const projects = [
  {
    title: "VOCALDIGEST",
    category: "App iOS · IA · Product marketing",
    description:
      "Application iOS de résumé IA pensée pour transformer l'audio en contenu clair, exploitable et valorisable. Le projet réunit produit, UX, ASO, storytelling et démo vidéo.",
    skills: ["ASO", "UX", "IA", "Positionnement", "Démo vidéo"],
    badge: "Product & AI Case Study",
    featured: true,
    layout: "app-showcase",
    mediaLabel: "Slides produit + vidéo démo",
    slides: [
      "/assets/images/vocaldigest/slide-1.png",
      "/assets/images/vocaldigest/slide-2.png",
      "/assets/images/vocaldigest/slide-3.png",
      "/assets/images/vocaldigest/slide-4.png",
      "/assets/images/vocaldigest/slide-5.png",
      "/assets/images/vocaldigest/slide-6.png",
    ],
    videos: [
      {
        title: "Démo VocalDigest",
        src: "/assets/videos/vocaldigest-demo.mov",
        poster: "/assets/images/vocaldigest/slide-1.png",
      },
    ],
    caseStudy: {
      process: [
        "Analyse du problème: voix longues, fatigue, perte d'informations utiles.",
        "Construction des personas, angles ASO et parcours de conversion mobile.",
        "Démo vidéo verticale pensée comme asset social ads premium.",
      ],
      results: [
        "App iOS lancée avec proposition de valeur claire.",
        "6 slides case study pour raconter marché, cible, solution et acquisition.",
        "Système prêt pour tests App Store, contenus courts et campagnes paid social.",
      ],
    },
  },
  {
    title: "AI video storytelling",
    category: "Contenu · Vidéo · IA",
    description:
      "6+ vidéos finalisées avec scripts, narration, avatars IA, rythme visuel et intention émotionnelle. Travail sur l'accroche, la tension narrative, la voix et le montage.",
    skills: ["Storytelling", "CapCut", "Avatars IA", "Montage", "Narration"],
    featured: true,
    mediaLabel: "Extraits vidéo IA",
    videos: [
      {
        title: "Le mystère d'un village qui réapparaît chaque été",
        src: "/assets/videos/village-reapparait.mov",
        poster: "/assets/images/poster-village.svg",
      },
      {
        title: "La faille sous l'église",
        src: "/assets/videos/faille-eglise.mov",
        poster: "/assets/images/poster-eglise.svg",
        status: "Work in progress",
      },
    ],
    caseStudy: {
      process: [
        "Recherche d'angles narratifs et construction de tension dès les premières secondes.",
        "Production avec outils IA, avatars, voix, scènes et montage court format.",
        "Itération sur le rythme, l'atmosphère et la lisibilité pour garder l'attention.",
      ],
      results: [
        "6+ vidéos finalisées avec univers visuel cohérent.",
        "Capacité à transformer une idée brute en contenu publiable.",
        "Bibliothèque d'extraits utilisables pour portfolio, ads ou social content.",
      ],
    },
  },
  {
    title: "Aura Conciergerie",
    category: "Conciergerie · Expérience client",
    subtitle: "Gestion de locations courte durée",
    description:
      "Gestion et optimisation de locations courte durée : expérience voyageur, automatisation des process, amélioration de la qualité et performance des annonces.",
    skills: ["Airbnb", "Booking", "Messages automatisés", "Qualité", "Pricing"],
    badge: "Operations & Client Experience",
    featured: true,
    layout: "aura-conciergerie",
    mediaLabel: "Operations immobilières",
    siteUrl: "https://www.auraconciergeriefr.com/gestion-location-courte-duree",
    operationCards: [
      {
        title: "Gestion opérationnelle",
        text: "Gestion de logements courte durée, coordination terrain, disponibilité et standards de qualité.",
      },
      {
        title: "Communication voyageurs",
        text: "Automatisation des échanges clients, messages avant séjour, pendant séjour et après départ.",
      },
      {
        title: "Annonces & expérience",
        text: "Optimisation Airbnb / Booking, pricing, satisfaction client et amélioration continue.",
      },
    ],
    proofStats: [
      { value: "3", label: "logements gérés" },
      { value: "4.6 - 4.8", label: "notes moyennes" },
      { value: "Superhost", label: "logique qualité" },
      { value: "Réel", label: "business en exploitation" },
    ],
    confidential: true,
    reportPreview: "/assets/images/cleangenius/pricelabs-preview.png",
    reportPdf: "/assets/pdf/pricelabs-portfolio-analytics.pdf",
    kpis: [
      { value: "24.01K€", label: "Revenus" },
      { value: "32.93%", label: "Occupation" },
      { value: "296.41€", label: "ADR" },
      { value: "97.60€", label: "RevPAR" },
      { value: "24", label: "Réservations" },
      { value: "1", label: "Annonce active" },
    ],
    caseStudy: {
      process: [
        "Gestion opérationnelle des logements et structuration des process terrain.",
        "Communication voyageurs via messages automatisés et suivi des étapes clés.",
        "Optimisation des annonces Airbnb / Booking, qualité, pricing et satisfaction client.",
      ],
      results: [
        "3 logements gérés en courte durée.",
        "Notes moyennes entre 4.6 et 4.8 avec logique Superhost.",
        "Business opérationnel réel: immobilier, opérations terrain et expérience client.",
      ],
    },
  },
  {
    title: "CleanGenius acquisition",
    category: "Acquisition · Funnels · Ads",
    description:
      "Système d'acquisition local: créas Meta Ads, offre claire, formulaire de lead, CRM, puis appel téléphonique pour convertir.",
    skills: ["Meta Ads", "Funnels", "Copywriting", "Offre"],
    badge: "Growth & Acquisition System",
    featured: true,
    layout: "clean-genius",
    mediaLabel: "Pipeline acquisition locale",
    audienceImage: "/assets/images/cleangenius/audience.png",
    offers: [
      { price: "69€", label: "Canapé 1 à 2 places" },
      { price: "89€", label: "Canapé 3 à 4 places" },
      { price: "109€", label: "Canapé 5 à 6 places" },
    ],
    pipeline: ["Meta Ads", "Formulaire", "CRM", "Appel", "Client"],
    adCreatives: [
      {
        hook: "Votre canapé retrouve sa couleur",
        angle: "Avant / après",
        proof: "Déplacement gratuit",
      },
      {
        hook: "Nettoyage canapé à domicile",
        angle: "Offre locale",
        proof: "À partir de 69€",
      },
      {
        hook: "Réponse rapide, service clair",
        angle: "Conversion appel",
        proof: "Lead form + CRM",
      },
    ],
    caseStudy: {
      process: [
        "Clarification de l'offre locale avec prix simples et déplacement gratuit.",
        "Acquisition via Meta Ads et formulaire lead natif.",
        "Récupération CRM, rappel téléphonique et conversion finale par échange humain.",
      ],
      results: [
        "Pipeline complet de l'annonce jusqu'au client.",
        "Données audience exploitables pour orienter les angles créatifs.",
        "Case study entrepreneurial réel centré sur acquisition, offre et conversion locale.",
      ],
    },
  },
];

export const creativeStudio = {
  eyebrow: "Création IA & Storytelling visuel",
  title: "Création IA & Storytelling visuel",
  subtitle: "Direction narrative, montage, IA générative et contenus cinématiques.",
  description:
    "Je conçois des contenus émotionnels et narratifs en combinant écriture, IA, montage, rythme visuel et sound design. L'objectif: transformer une idée en séquence mémorable, compréhensible et exploitable pour une audience.",
  heroVideo: {
    title: "Film pirate",
    category: "Cinematic AI short",
    src: "/assets/videos/pirate.mov",
    tags: ["AI", "storytelling", "montage", "narrative"],
  },
  youtube: {
    channelUrl: "https://www.youtube.com/channel/UCwULdL-Lf5gnOnkVDfe-qCQ",
    playlistEmbed: "https://www.youtube.com/embed/videoseries?list=UUwULdL-Lf5gnOnkVDfe-qCQ",
    cards: [
      {
        title: "Chaîne YouTube",
        text: "Formats narratifs, expérimentations IA et direction visuelle.",
      },
      {
        title: "Angles cinématiques",
        text: "Accroches, tension, atmosphère et construction émotionnelle.",
      },
      {
        title: "Prototypes vidéo",
        text: "Tests rapides pour valider un univers, un rythme et une intention.",
      },
    ],
  },
  videos: [
    {
      title: "Film pirate",
      src: "/assets/videos/pirate.mov",
      tags: ["AI", "storytelling", "montage", "narrative"],
    },
    {
      title: "Le mystère d'un village qui réapparaît chaque été",
      src: "/assets/videos/village-reapparait.mov",
      poster: "/assets/images/poster-village.svg",
      tags: ["AI", "storytelling", "narrative", "prototyping"],
    },
    {
      title: "La faille sous l'église",
      src: "/assets/videos/faille-eglise.mov",
      poster: "/assets/images/poster-eglise.svg",
      tags: ["AI", "montage", "narrative", "work in progress"],
    },
  ],
};

export const proofSignals = [
  { value: "3", label: "logements gérés" },
  { value: "100+", label: "prestations terrain" },
  { value: "6+", label: "vidéos IA finalisées" },
  { value: "1", label: "app iOS lancée" },
];

export const education = [
  "Rocket School Growth Marketing · 2026",
  "Funnel Building · 2024-2025",
  "Conciergerie · 2024-2026",
  "Business model & entrepreneurship · 2020",
  "Investissement immobilier · 2019",
];

export const tools = [
  "Google Workspace",
  "Notion",
  "Système.io",
  "Canva",
  "CapCut",
  "Final Cut",
  "After Effects",
  "Meta Ads",
  "Google Ads",
  "AI tools",
  "Analytics",
  "Scraping",
  "Automation",
];
