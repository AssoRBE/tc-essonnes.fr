export const gallery = {
  countries: [
    {
      code: "fr",
      name: "France",
      cover: "/brand/hero-bg.jpg",
      regions: [
        {
          slug: "ile-de-france",
          name: "Île-de-France",
          authority: "IDF Mobilités",
          cover: "/brand/hero-bg.jpg",
          galleries: [
            {
              slug: "rer-a-nocturne",
              title: "RER A — Nocturne",
              year: 2024,
              status: "attention", // attention|info|stop|help
              tags: ["nuit","urbain"],
              cover: "/brand/hero-bg.jpg",
              items: [
                { src: "/brand/hero-bg.jpg", alt: "RER A de nuit 1" },
                { src: "/brand/hero-bg.jpg", alt: "RER A de nuit 2" },
                { src: "/brand/hero-bg.jpg", alt: "RER A de nuit 3" }
              ]
            }
          ]
        },
        {
          slug: "pays-de-la-loire",
          name: "Pays de la Loire",
          authority: "Région PDLL",
          cover: "/brand/hero-bg.jpg",
          galleries: []
        }
      ]
    }
  ]
} as const;
export type GalleryItem = { src:string; alt?:string };
export type Gallery = { slug:string; title:string; year?:number; status?:string; tags?:string[]; cover:string; items:GalleryItem[] };
export type Region = { slug:string; name:string; authority?:string; cover?:string; galleries:Gallery[] };
export type Country = { code:string; name:string; cover?:string; regions:Region[] };
