// components/PhotoGrid.tsx
"use client";

import Lightbox from "./Lightbox";

type Item = { src: string; title?: string; description?: string };

function fileTitleFallback(src: string) {
  try {
    const base = src.split("/").pop() || "";
    return base.replace(/\.[^.]+$/, "");
  } catch { return ""; }
}

export default function PhotoGrid({ items }: { items: Item[] }) {
  return (
    <>
      <div className="photo-grid" style={{ marginTop: 16 }}>
        {items.map((p, i) => {
          const title = p.title || fileTitleFallback(p.src);
          return (
            <button
              key={p.src}
              type="button"
              className="photo-card"
              onClick={() => (window as any).__openLb?.(i)}
              aria-label={title ? `Agrandir : ${title}` : "Agrandir la photo"}
            >
              <div className="photo-thumb">
                <img src={p.src} alt={title} />
              </div>

              <div className="photo-meta">
                {title ? <div className="photo-title">{title}</div> : null}
                {p.description ? <div className="photo-desc">{p.description}</div> : null}
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox client */}
      <Lightbox items={items} />
    </>
  );
}
