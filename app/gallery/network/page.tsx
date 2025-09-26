import { notFound } from "next/navigation";
import Link from "next/link";
import { networks } from "../../../../content/networks";

export default function NetworkPage({ params }:{ params:{ slug:string } }) {
  const net = networks.find(n => n.slug === params.slug);
  if (!net) return notFound();

  return (
    <section className="gallery-wrap network-page">
      <nav style={{marginBottom:8, opacity:.8}}>
        <Link href="/gallery">← Retour aux réseaux</Link>
      </nav>
      <h1 style={{margin:0}}>{net.name}</h1>

      <div style={{marginTop:12, display:"flex", alignItems:"center", gap:16}}>
        <img src={net.img} alt={net.name} style={{height:(net as any).h ?? 64, width:"auto"}} />
        <div style={{opacity:.85}}>Page dédiée au réseau <strong>{net.name}</strong>. (Contenu à venir)</div>
      </div>
    </section>
  );
}
