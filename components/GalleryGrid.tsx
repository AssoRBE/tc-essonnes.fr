"use client";
import * as React from "react";

export type Item = { src:string; alt?:string };

export default function GalleryGrid({ items }:{ items: Item[] }){
  const [open, setOpen] = React.useState(false);
  const [idx, setIdx] = React.useState(0);
  const go = (d:number) => setIdx(i => (i + d + items.length) % items.length);

  return (
    <>
      <div className="grid">
        {items.map((it, i) => (
          <img key={i} src={it.src} alt={it.alt ?? ""} onClick={()=>{ setIdx(i); setOpen(true); }} />
        ))}
      </div>

      {open && (
        <div className="lightbox" onClick={()=>setOpen(false)}>
          <button className="btn close" onClick={()=>setOpen(false)}>Fermer ✕</button>
          <button className="btn" onClick={(e)=>{e.stopPropagation(); go(-1);}}>&larr;</button>
          <img src={items[idx].src} alt={items[idx].alt ?? ""} onClick={(e)=>e.stopPropagation()} />
          <button className="btn" onClick={(e)=>{e.stopPropagation(); go(1);}}>&rarr;</button>
        </div>
      )}
    </>
  );
}
