// content/spotlight.ts
export type Spotlight = { src: string; title: string; href?: string; credit?: string };

export const spotlightPool: Spotlight[] = [
  {
    
    src: "/brand/hero-bg.jpg",
    title: "232191 - HeuliezBus GX 437 Hybride - TISSE",
    href: "/tisse",
    credit: "TCE Photos",
  },
];

export function pickSpotlight(d = new Date()): Spotlight {
  const pool = spotlightPool.length ? spotlightPool : [{ src: "/brand/hero-bg.jpg", title: "Exemple" }];
  const idx = (d.getFullYear() * 12 + d.getMonth()) % pool.length;
  return pool[idx];
}
