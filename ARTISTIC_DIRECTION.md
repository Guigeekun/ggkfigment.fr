# figment.fr — Direction Artistique

> Portfolio de **Guilleme Benoit** — *Guigeek / GGK* — compositeur & ingénieur logiciel freelance.
> Un site statique React, noir profond, bleu Klein, serif éditoriale, parallaxe signature.

---

## 1. Nom & ton

**ggkfigment.fr** — GGK + *figment*. Le nom est là parce qu'il est cool et qu'il
était libre ; et puisque tous les projets vivent sur ce domaine, il colle
parfaitement. Pas besoin d'en dire plus.

Wordmark : **figment.** (le point fait partie du logo) — kicker mono : `GGK`.

Ton éditorial : sobre, précis, direct. Zéro mythologie de marque, zéro superlatif
marketing — on montre, on ne clame pas.

---

## 2. Palette — « Klein sur nuit »

Fond noir en couches (jamais de `#000` plat), accent bleu inspiré du
Bleu International Klein.

```css
:root {
  /* Fonds */
  --void:    #05060B;   /* page */
  --surface: #0B0D16;   /* cartes */
  --raised:  #11141F;   /* survol cartes, nav */

  /* Texte */
  --ink:       #E9EBF4;                 /* principal */
  --ink-dim:   #9AA1B8;                 /* secondaire */
  --ink-faint: #5D6478;                 /* désactivé, métadonnées */

  /* Hairlines */
  --hairline: rgba(233, 235, 244, 0.08);
  --hairline-strong: rgba(233, 235, 244, 0.16);

  /* Bleus */
  --klein:      #1E2FD0;                /* nébuleuses, marques, surfaces profondes */
  --klein-glow: rgba(30, 47, 208, 0.35);
  --signal:     #4D6BFF;                /* liens, waveform, états actifs */
  --edge:       #93A8FF;                /* bouts de dégradés, focus */
}
```

Règles d'usage :

- Le bleu est un **accent rare** : ≤ 10 % de la surface d'un écran. Un mot en italique
  signal, une ligne, un chiffre de section — jamais un bloc entier.
- Nébuleuse d'arrière-plan : radial-gradient `--klein` → transparent, blur 120px,
  opacité ≤ 0.5, dérive lente.
- Grain film en overlay plein écran : SVG `feTurbulence` en data-URI,
  opacité 0.04, `mix-blend-mode: overlay`, `pointer-events: none`.

---

## 3. Typographie — éditoriale, fine

Trois voix, toutes en graisse légère :

| Rôle | Police | Graisse | Usage |
|---|---|---|---|
| Display | **Cormorant Garamond** | 300 (+ italique 300) | titres, phrases d'accroche |
| Texte | **Inter** | 300 / 400 | paragraphes, navigation |
| Label | **JetBrains Mono** | 300 | kickers, chiffres, métadonnées, boutons |

Échelle :

```
Display XL (hero)   clamp(3rem, 10vw, 8.5rem)  Cormorant 300, lh 0.95, ls -0.01em
H2 section          clamp(2.5rem, 6vw, 4.5rem)  Cormorant 300
H3                  1.75rem                     Cormorant 300 italic
Kicker / mono       0.75rem  uppercase  ls 0.25em  JetBrains Mono
Body                1rem / 1.7                  Inter 300
Meta                0.875rem                    JetBrains Mono (--ink-dim)
```

Recette signature : un mot-clé par titre en **italique signal** —
« Musique. Code. Les deux, *bien faits*. »

Chiffres de section en mono, p. ex. `02 — Musique`, posés sur la hairline.

---

## 4. Grille & mise en page

- Conteneur : `max-width: 1200px`, gouttières 24 px (16 px mobile).
- Sections : `padding-block: clamp(6rem, 14vh, 10rem)`, séparées par une hairline
  pleine largeur qui s'estompe aux extrémités (`mask-image` gradient).
- Rythme asymétrique : texte sur 5 colonnes, visuels sur 7 ; éviter les blocs
  centrés uniformes, sauf le hero et le CTA final.
- Nav fixe : fond `void / 85 %` + blur 12 px, hairline basse, haute ≈ 64 px.
  Contenu : wordmark à gauche, liens au centre-droite, `FR / EN` à l'extrême droite.
- Rayon : 2 px partout (presque droit). Ombres quasi nulles — la profondeur vient
  des couches de fond et du grain, pas des box-shadows.

---

## 5. Mouvement — « Signature »

Niveau retenu : parallaxe multi-couches + fil d'onde dessiné par le scroll.
Tout à 60 fps via `requestAnimationFrame` + lerp ; tout désactivé si
`prefers-reduced-motion: reduce`.

### 5.1 Hero (parallaxe 4 couches)

| Couche | Vitesse | Contenu |
|---|---|---|
| L0 | 0.2× | nébuleuse Klein (dérive propre lente 40 s en plus) |
| L1 | 0.45× | waveform hairline 1 (SVG, opacité 0.35) |
| L2 | 0.65× | waveform hairline 2, décalée |
| L3 | 1× | titre serif + kicker (léger contre-mouvement -0.1×) |

Indicateur de scroll en bas : hairline verticale animée + `scroll` en mono.

### 5.2 Le fil d'onde (signature de la page)

Un SVG vertical absolu traverse tout le `main` : une ligne fine `--signal`
(en pointillé 2-6) qui se **dessine au fil du scroll** (`stroke-dashoffset` lié à
la progression). Elle ondule doucement, passe derrière les contenus, et relie
physiquement Musique ↔ Code ↔ Freelance. Chiffre de progression `01→05` en mono
dans le coin bas-gauche, lié au même scroll.

### 5.3 Révélations

- Entrée de section : `translateY(24px) → 0` + `opacity 0 → 1`,
  `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`, 700 ms, enfants décalés de 80 ms.
- IntersectionObserver, déclenche à 15 % de visibilité, une seule fois.

### 5.4 Hover

- Liens : underline qui se dessine (`background-size 0→100 %`, 300 ms).
- Boutons : hairline → `--signal` + halo `--klein-glow` doux (20 px, blur 24).
- Cartes : bordure hairline → hairline-strong, fond → `--raised`.

### 5.5 Scroll fluide

Lenis (lerp 0.1) ou équivalent maison — jamais au point de casser l'ancre de nav.

---

## 6. Sections & contenu (FR par défaut, toggle EN)

```
┌─ NAV ─  figment.        musique · code · freelance · contact      FR / EN ┐
│                                                                          │
│ 01 HERO — « Musique. Code. Les deux, bien faits. »                       │
│    kicker mono : GGK — GUILLEME BENOIT — compositeur · ingénieur         │
│    CTA : [ Travaillons ensemble ]  [ Écouter ]                           │
│──────────────────────────────────────────────────────────────────────────│
│ 02 MUSIQUE — « Musique » + série « Low Effort Music », DnB, expérimental │
│    3–4 cartes piste : miniature YouTube (facade), durée, lien           │
│    liens plateformes : YouTube · Spotify · Apple Music                  │
│──────────────────────────────────────────────────────────────────────────│
│ 03 CODE — « Code » — dépôts épinglés (Terra-Tools, ffxiv planner, …)     │
│    cartes : nom mono, description, chips langage (ts · py · js), étoiles│
│    badge : Arctic Code Vault Contributor (discret, mono)                │
│──────────────────────────────────────────────────────────────────────────│
│ 04 FREELANCE — « Freelance » — pitch services, stack, disponibilité      │
│    3 colonnes fines : Concevoir / Construire / Accompagner (à préciser)  │
│    chips stack mono + mention disponibilité (dot signal pulsant)         │
│──────────────────────────────────────────────────────────────────────────│
│ 05 CONTACT — grande phrase serif « Donnons forme à vos idées. »          │
│    email en grand + icônes fines : YouTube · GitHub · LinkedIn           │
└─ FOOTER — © 2026 Guilleme Benoit — figment. — mentions — fait main      ┘
```

---

## 7. Composants — règles

- **Boutons** : transparents, hairline 1 px, texte mono uppercase 0.75 ls 0.2 ;
  primaire : bordure + texte `--signal` (jamais de remplissage plein — trop loud).
- **Cartes** : fond `--surface`, hairline, radius 2 px, padding 24 px ;
  la profondeur vient du survol, pas de l'ombre.
- **Chips** : mono 0.75, hairline, padding 4×10, sans fond.
- **Icônes** : 3 SVG inline traits fins (YouTube, GitHub, LinkedIn), 20 px,
  `stroke 1.5`. Aucune librairie d'icônes.
- **Embeds YouTube** : facade — miniature + bouton lecture maison, l'iframe ne
  charge qu'au clic (perf + esthétique cohérente, pas de chrome YouTube).

---

## 8. Technique

- **React + Vite**, site 100 % statique (build → n'importe quel hébergeur ;
  cible finale ggkfigment.fr).
- **CSS** : un fichier `tokens.css` (palette, échelle, easings) + CSS Modules
  par composant. Pas de framework UI.
- **Mouvement** : Lenis (≈ 4 ko) + hooks maison `useParallax`, `useReveal`,
  `useScrollProgress` (rAF + lerp ; coupés si reduced-motion).
- **Données** : `data/repos.ts` statique et curaté (pas d'API au runtime) ;
  pistes musicales : `data/tracks.ts` (ids YouTube curatés).
- **i18n** : dictionnaire `{ fr, en }` + contexte + `localStorage`,
  défaut **fr**, `<html lang>` basculé, SEO meta en fr.
- **Polices** : Google Fonts — Cormorant Garamond 300/300i, Inter 300/400,
  JetBrains Mono 300/400 — `preconnect` + `display=swap`, subsets latin/latin-ext.
- **Budget** : JS < 150 ko gzippé, LCP < 2.5 s, aucune requête tierce avant
  interaction (embeds paresseux).

---

## 9. Accessibilité

- `prefers-reduced-motion` : Lenis off, parallaxe figée en position de repos,
  révélations instantanées.
- Contrastes : `--ink` sur `--void` > 15:1 ; `--signal` réservé aux ≥ 16 px,
  liens soulignés.
- Focus visible : outline 1 px `--edge`, offset 3 px.
- Nav clavier complète, cibles tactiles ≥ 44 px, `<html lang>` correct par langue.

---

## 10. Contenu à fournir ( blocants pour la v1 )

1. **Email pro** pour le contact (ou formulaire ?).
2. **3–4 pistes à mettre en avant** (IDs ou URLs YouTube — la série
   *Low Effort Music*, *Chaotic Carnival*, la compile DnB ?).
3. **Pitch freelance** : services exacts, années d'expérience, stack de prédilection,
   disponibilité (date / temps partiel), zone (remote / Paris / Lyon ?).
4. **Liens plateformes musique** : Spotify, Apple Music (URLs artiste exactes).
5. Optionnel : photo/portrait, logo préféré (`figment.` validé ?), mentions légales
   (nom, SIRET si auto-entrepreneur).
