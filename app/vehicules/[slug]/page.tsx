// app/vehicules/[slug]/page.tsx
import Link from "next/link";

export default function VehiculePage({ params }: { params: { slug: string } }) {
  const titre = decodeURIComponent(params.slug)
    .replace(/-/g, " ")
    .replace(/\b(gx|tisse|rer|ratp)\b/gi, (m) => m.toUpperCase());

  return (
    <section className="gallery-wrap">
      <nav style={{marginBottom:8, opacity:.8}}>
        <Link href="/">← Accueil</Link>
      </nav>
      <h1 style={{margin:0}}>{titre}</h1>

      <p style={{opacity:.85, marginTop:12}}>
        Page véhicule — contenu à venir (galerie, infos techniques, historique…).
      </p>
    </section>
  );
}
