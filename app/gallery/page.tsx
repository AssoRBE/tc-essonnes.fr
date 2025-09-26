import Link from "next/link";
import { networks } from "../../content/networks";

export default function GalleryPage() {
  return (
    <section className="gallery-wrap">
      <h1>Galeries par Réseau de transports</h1>

      <div className="net-grid">
        {networks.map((net) => (
          <Link key={net.slug} href={net.href} className="net-card">
            <img
              src={net.img}
              alt={net.name}
              style={{ ['--logo-h' as any]: `${net.h ?? 64}px` }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
