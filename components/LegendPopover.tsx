"use client";
import * as React from "react";

export default function LegendPopover(){
  const [open,setOpen] = React.useState(false);
  return (
    <div style={{position:"relative"}}>
      <button className="legend-btn" onClick={()=>setOpen(!open)}>Légende</button>
      {open && (
        <div className="legend" onMouseLeave={()=>setOpen(false)}>
          <h4>Signalétique</h4>
          <ul>
            <li>⚠️ Attention — alerte/panne/incomplétion</li>
            <li>ℹ️ Information — note utile</li>
            <li>🛑 STOP — accès restreint</li>
            <li>❓ Interrogation — appel à contribution</li>
          </ul>
        </div>
      )}
    </div>
  );
}
