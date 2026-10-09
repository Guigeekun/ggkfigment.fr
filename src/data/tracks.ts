export interface Track {
  id: string // YouTube video id
  title: string
  tag: string
}

// Curated picks — swap titles/tags freely, keep `id` as the YouTube video id.
export const tracks: Track[] = [
  {
    id: 'RlgoXwn1X2E',
    title: 'Rolling Square',
    tag: 'chiptune',
  },
  {
    id: 'a7m9M_deW2c',
    title: 'White Void',
    tag: 'drum & bass',
  },
  {
    id: 'RN1a6vW0c1o',
    title: 'Looking For A Way',
    tag: 'experimental',
  },
  {
    id: '6Wn55JY-uyY',
    title: "Dumb and Boring",
    tag: 'drum & bass',
  },
]
