# ggkfigment.fr

Portfolio statique de **Guilleme Benoit** (*Guigeek / GGK*) — ingénieur logiciel freelance & compositeur.

React + Vite, CSS Modules, aucune autre dépendance UI. Direction artistique complète dans [ARTISTIC_DIRECTION.md](./ARTISTIC_DIRECTION.md).

## Lancer

```sh
npm install
npm run dev       # dev server
npm run build     # type-check + build statique -> dist/
npm run preview   # sert dist/ en local
```

## Où modifier le contenu

| Quoi | Fichier |
|---|---|
| Textes FR / EN | `src/i18n/dict.ts` |
| Pistes musicales | `src/data/tracks.ts` (IDs YouTube) |
| Dépôts GitHub mis en avant | `src/data/repos.ts` |
| Liens & email | `src/data/links.ts` |
| Stack freelance | `src/components/Freelance.tsx` (constante `stack`) |

## TODO v1

- [ ] `links.spotify` / `links.appleMusic` — URLs artiste exactes
- [ ] Stack freelance — confirmer/étendre la liste
- [ ] Disponibilité & zone (remote / sur site) à préciser dans `dict.ts`
- [ ] Mentions légales (SIRET) si auto-entrepreneur

## Déploiement

`npm run build` produit un site 100 % statique dans `dist/` (base relative — déployable sur n'importe quel hébergeur, GitHub Pages, Netlify, etc.).
