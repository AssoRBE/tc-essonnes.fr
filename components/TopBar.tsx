"use client";
import * as React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";

export default function TopBar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}
      sx={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <a href="/" aria-label="Accueil">
            <img
              src="/brand/logo-wordmark.png"
              alt="Logo"
              style={{ height: 28, width: "auto", display: "block" }}
            />
          </a>
        </Box>
        <Box sx={{ flex: 1 }} />
      </Toolbar>
    </AppBar>
  );
}
