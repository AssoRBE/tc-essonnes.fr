// components/Lightbox.tsx
"use client";

import { useCallback, useEffect, useState } from "react";

type Item = { src: string; title?: string; description?: string };

export default function Lightbox({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  // fonction globale pour ouvrir
  useEffect(() => {
    (window as any).__openLb = (i: number) => { setIdx(i); setOpen(true); };
    return () => { delete (window as any).__openLb; };
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const prev  = useCallback(() => setIdx(i => (i + items.length - 1) % items.length), [items.length]);
  const next  = useCallback(() => setIdx(i => (i + 1) % items.length), [items.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  if (!open || !items.length) return null;
  const it = items[idx];

  return (
    <div className="lb-backdrop" onClick={close} role="dialog" aria-modal="true">
      <div className="lb-modal two-cols" onClick={(e) => e.stopPropagation()}>
        <button className="lb-x" onClick={close} aria-label="Fermer">×</button>

        {/* Colonne image (contain → aucune coupe) */}
        <div className="lb-left">
          <img src={it.src} alt={it.title || ""} />
          <button className="lb-nav lb-prev" onClick={prev} aria-label="Précédent">❮</button>
          <button className="lb-nav lb-next" onClick={next} aria-label="Suivant">❯</button>
        </div>

        {/* Colonne texte à droite */}
        <aside className="lb-right">
          {it.title && <div className="lb-title">{it.title}</div>}
          {it.description && <div className="lb-desc">{it.description}</div>}
        </aside>
      </div>
    </div>
  );
}
