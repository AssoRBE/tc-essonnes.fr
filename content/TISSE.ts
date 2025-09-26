// content/tisse.ts
export type Album = {
  slug: string;
  title: string;
  cover: string;         // image de couverture
  location?: string;
  date?: string;
  count?: number;        // nombre de photos (indicatif)
};

export const tisseAlbums: Album[] = [
  {
    slug: "heuliezbus-gx437-232191",
    title: "232191 — HeuliezBus GX 437 Hybride",
    cover: "/brand/hero-bg.jpg",           // ⚠️ remplace par /photos/tisse/heuliezbus-gx437-232191/cover.jpg
    location: "Viry-Châtillon",
    date: "2022",
    count: 12,
  },
  {
    slug: "depot-evry-remisage",
    title: "Dépôt d’Évry — Remisage",
    cover: "/brand/hero-bg.jpg",           // ⚠️ remplace par /photos/tisse/depot-evry/cover.jpg
    location: "Évry-Courcouronnes",
    date: "2023",
    count: 18,
  },
] satisfies Album[];
