"use client";

import * as React from "react";

export default function MainShell({ children }:{ children: React.ReactNode }) {
  return (
    <div style={{ position: "relative" }}>
      {/* Abribus collé à gauche, de sous le header jusqu'en bas */}
      <div className="decor-left" aria-hidden>
        <img src="/brand/abribus.png" alt="" className="decor-left-img" />
      </div>

      {/* Le contenu passe à droite de la bande */}
      <div className="main-content">{children}</div>
    </div>
  );
}
