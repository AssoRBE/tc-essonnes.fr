import Link from "next/link";
import { networks } from "../../../content/networks";

export const metadata = {
  title: "Réseaux – Galerie",
  description: "Liste des réseaux de transport disponibles."
};

export default function NetworksIndexPage() {
  return (
    <section className="gallery-wrap">
      <nav style={{ marginBottom: 8, opacity: 0.8 }}>
        <Link href="/gallery">← Retour aux galeries</Link>
      </nav>
      <h1>Réseaux disponibles</h1>
      <div className="net-grid">
        {networks.map(net => (
          <Link key={net.slug} href={net.href} className="net-card" title={net.name}>
            <img src={net.img} alt={net.name} style={{ ['--logo-h' as any]: `${net.h ?? 64}px` }} />
          </Link>
        ))}
      </div>
    </section>
  );
}
