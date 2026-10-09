import type { Lang } from '../i18n/dict'

export interface Repo {
  name: string
  url: string
  lang: string
  stars: number
  desc: Record<Lang, string>
}

// Pinned picks — edit here, the UI follows.
export const repos: Repo[] = [
  {
    name: 'terra-tools',
    url: 'https://github.com/Guigeekun/Terra-Tools',
    lang: 'JavaScript',
    stars: 1,
    desc: {
      fr: 'Éditeur de niveaux pour Terra Battle, construit pour Project Liminal Gate.',
      en: 'A level editor for Terra Battle, built for Project Liminal Gate.',
    },
  },
  {
    name: 'ffxiv_collectable_planner',
    url: 'https://github.com/Guigeekun/ffxiv_collectable_planner',
    lang: 'TypeScript',
    stars: 1,
    desc: {
      fr: "Planificateur de runs de collecte pour party FFXIV — qui ramène quoi, et dans quel ordre.",
      en: 'Collectable farming planner for FFXIV parties — who grabs what, in which order.',
    },
  },
  {
    name: 'IWD-tech-challenge',
    url: 'https://github.com/Guigeekun/IWD-tech-challenge',
    lang: 'Python',
    stars: 0,
    desc: {
      fr: "Challenge technique d'intégration — normalisation et rendu de données spatiales.",
      en: 'Integrator tech challenge — normalising and rendering spatial data.',
    },
  },
]

export const githubProfile = 'https://github.com/Guigeekun'
