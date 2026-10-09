export interface Track {
  id: string // YouTube video id
  title: string
  series: string
  tag: string
}

// Curated picks — swap titles/tags freely, keep `id` as the YouTube video id.
export const tracks: Track[] = [
  {
    id: 'LkCFqYjuyTQ',
    title: 'Chaotic Carnival',
    series: 'Original',
    tag: 'original',
  },
  {
    id: '7SA9TuWWccc',
    title: 'Vocal experiment',
    series: 'Low Effort Music',
    tag: 'expérimental',
  },
  {
    id: 'wxwy_h4cp_E',
    title: 'Confiture sous-marine',
    series: 'Low Effort Music',
    tag: 'expérimental',
  },
  {
    id: 'IhzjPgiQjTk',
    title: "GGK's DnB stuff",
    series: 'Compilation',
    tag: 'drum & bass',
  },
]
