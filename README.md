# Photothèque (Next.js + MUI)

Starter prêt à l'emploi pour ta photothèque, optimisé pour VS Code.

## Lancer en local
```bash
npm install
npm run dev
```
Ouvre http://localhost:3000

## Structure
- `app/` : App Router (Next 14)
- `components/` : UI (TopBar, PhotoCard, Filters)
- `lib/photos.ts` : données de démo (à remplacer par ta base)
- `public/` : images statiques (tu peux y glisser tes photos)
- `styles/` : styles globaux

## À faire ensuite
- Brancher un vrai stockage (Cloudinary / Supabase Storage)
- Remplacer `lib/photos.ts` par une API/DB
- Activer SEO (metadata dynamiques) et upload back-office

## Scripts utiles
- `npm run build` : build prod
- `npm start` : démarrer en prod
