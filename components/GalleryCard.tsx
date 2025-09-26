import Link from "next/link";
import StatusIcon from "./StatusIcon";

// components/NetworkCard.tsx
export function GalleryCard({ net }) {
  return (
    <a href={net.href} className="net-card">
      <img
        src={net.img}
        alt={net.name}
        style={{ ['--logo-h' as any]: `${net.h ?? 64}px` }}
      />
    </a>
  );
}
