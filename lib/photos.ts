export type Photo = {
  id: string;
  title: string;
  url: string;
  region: string;
  reseau: string;
  ligne: string;
  modele: string;
  ambiance: string[]; // ex: ['nuit','pluie']
  couleur: string;    // ex: 'bleu'
  takenAt?: string;
  exif?: Record<string, string>;
};

const sample: Photo[] = [
  {
    id: '1',
    title: 'Citaro sur la 91-06',
    url: 'https://via.placeholder.com/1200x800?text=Citaro+91-06',
    region: 'Île-de-France',
    reseau: 'TICE',
    ligne: '91-06',
    modele: 'Mercedes Citaro',
    ambiance: ['jour','urbain'],
    couleur: 'bleu',
    takenAt: '2024-10-12'
  },
  {
    id: '2',
    title: 'Agora S au dépôt',
    url: 'https://via.placeholder.com/1200x1400?text=Agora+Depot',
    region: 'Île-de-France',
    reseau: 'RATP',
    ligne: 'PC',
    modele: 'Renault Agora S',
    ambiance: ['nuit','pluie'],
    couleur: 'vert',
    takenAt: '2023-02-08'
  },
  {
    id: '3',
    title: 'Heuliez GX en campagne',
    url: 'https://via.placeholder.com/1200x900?text=GX%20campagne',
    region: 'Pays de la Loire',
    reseau: 'ALEOP',
    ligne: '302',
    modele: 'Heuliez GX327',
    ambiance: ['jour','campagne'],
    couleur: 'jaune',
    takenAt: '2022-07-18'
  }
];

export function getAllPhotos(): Photo[] {
  return sample;
}

export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

export function filtersFromPhotos(photos: Photo[]) {
  return {
    regions: unique(photos.map(p=>p.region)),
    reseaux: unique(photos.map(p=>p.reseau)),
    lignes: unique(photos.map(p=>p.ligne)),
    modeles: unique(photos.map(p=>p.modele)),
    ambiances: unique(photos.flatMap(p=>p.ambiance)),
    couleurs: unique(photos.map(p=>p.couleur))
  };
}

export function getExpoDuJour(): Photo[] {
  // Simple pick: first 6 or all
  return getAllPhotos().slice(0, 6);
}
