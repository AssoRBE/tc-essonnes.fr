// components/PhotoOfMonth.tsx
"use client";

import Link from "next/link";
import { pickSpotlight } from "../content/spotlight";

export default function PhotoOfMonth() {
  const sp = pickSpotlight();
  return (
    <article className="bubble-card photo-card">
      <span className="bubble-pin bubble-pin--right" aria-hidden="true">
        <img src="/icons/icon-heart.png" alt="" />
      </span>

      <div className="photo-head">Photo du moment</div>

      <Link href={sp.href ?? "#"} className="photo-img-wrap" aria-label={sp.title}>
        <img src={sp.src} alt={sp.title} />
      </Link>

      {/* le titre dessous mène aussi vers la page adéquate */}
      <div className="photo-caption">
        <Link href={sp.href ?? "#"} className="photo-caption-link">{sp.title}</Link>
        {sp.credit ? <> — <span style={{opacity:.7}}>{sp.credit}</span></> : null}
      </div>
    </article>
  );
}
