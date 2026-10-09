export type Lang = 'fr' | 'en'

const fr = {
  nav: {
    musique: 'musique',
    code: 'code',
    freelance: 'freelance',
    contact: 'contact',
  },
  hero: {
    kicker: 'GGK — Guilleme Benoit · compositeur & ingénieur logiciel',
    titleA: 'Musique. Code.',
    titleB: 'Les deux,',
    titleC: 'bien faits.',
    sub: "Ingénieur logiciel freelance le jour, compositeur la nuit — tout ce que je construis vit ici.",
    ctaHire: 'Travaillons ensemble',
    ctaListen: 'Écouter',
    scroll: 'défiler',
  },
  music: {
    kicker: '04 — Musique',
    title: 'Musique',
    lead: "Drum & bass, expérimentations et séries Low Effort Music — composé à la maison, publié au fil de l'eau.",
    handmade: 'Fait main, avec amour.',
    play: 'Écouter',
    alsoOn: 'Aussi disponible sur',
  },
  code: {
    kicker: '03 — Code',
    title: 'Code',
    lead: "Les outils que j'écris pour le plaisir et pour la communauté — éditeurs, planificateurs, prototypes. Tout est sur GitHub.",
    vault: 'Arctic Code Vault Contributor',
    more: 'Voir tout sur GitHub',
  },
  freelance: {
    kicker: '02 — Freelance',
    title: 'Freelance',
    lead: "Ingénieur logiciel indépendant — je conçois, construis et livre des applications web de bout en bout.",
    services: [
      {
        name: 'Concevoir',
        text: 'Analyse du besoin, architecture, choix techniques : des décisions documentées et explicables.',
      },
      {
        name: 'Construire',
        text: 'Applications TypeScript de bout en bout — frontend React, API, données, déploiement.',
      },
      {
        name: 'Accompagner',
        text: 'Reprise de code existant, maintenance, revues, ou renfort ponctuel au sein de votre équipe.',
      },
    ],
    stackLabel: 'Stack',
    availability: 'Disponible pour de nouvelles missions',
    cta: 'Discutons-en',
  },
  contact: {
    kicker: '05 — Contact',
    titleA: 'Donnons forme à',
    titleB: 'vos idées.',
    lead: 'Une mission, une idée, un morceau à partager ? Écrivez-moi — je réponds vite.',
    socialsLabel: 'Ailleurs',
  },
  footer: {
    rights: 'Tous droits réservés.',
  },
}

export type Dict = typeof fr

const en: Dict = {
  nav: {
    musique: 'music',
    code: 'code',
    freelance: 'freelance',
    contact: 'contact',
  },
  hero: {
    kicker: 'GGK — Guilleme Benoit · composer & software engineer',
    titleA: 'Music. Code.',
    titleB: 'Both, done',
    titleC: 'properly.',
    sub: 'Freelance software engineer by day, composer by night — everything I build lives here.',
    ctaHire: 'Work with me',
    ctaListen: 'Listen',
    scroll: 'scroll',
  },
  music: {
    kicker: '04 — Music',
    title: 'Music',
    lead: 'Drum & bass, experiments and the Low Effort Music series — made at home, released as it comes.',
    handmade: 'Handmade, with love.',
    play: 'Listen',
    alsoOn: 'Also available on',
  },
  code: {
    kicker: '03 — Code',
    title: 'Code',
    lead: "Tools I write for fun and for the community — editors, planners, prototypes. Everything's on GitHub.",
    vault: 'Arctic Code Vault Contributor',
    more: 'See everything on GitHub',
  },
  freelance: {
    kicker: '02 — Freelance',
    title: 'Freelance',
    lead: 'Independent software engineer — I design, build and ship web applications end to end.',
    services: [
      {
        name: 'Design',
        text: 'Understanding the need, architecture, technical choices: documented, explainable decisions.',
      },
      {
        name: 'Build',
        text: 'End-to-end TypeScript applications — React frontend, API, data, deployment.',
      },
      {
        name: 'Support',
        text: 'Taking over existing code, maintenance, reviews, or short-notice backup for your team.',
      },
    ],
    stackLabel: 'Stack',
    availability: 'Available for new missions',
    cta: "Let's talk",
  },
  contact: {
    kicker: '05 — Contact',
    titleA: "Let's give shape to",
    titleB: 'your next project.',
    lead: 'A mission, an idea, a track to share? Write to me — I answer fast.',
    socialsLabel: 'Elsewhere',
  },
  footer: {
    rights: 'All rights reserved.',
  },
}

export const dict: Record<Lang, Dict> = { fr, en }
