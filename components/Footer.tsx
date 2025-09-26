'use client';

import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 6, py: 4, textAlign: 'center', color: 'text.secondary' }}>
      <Typography variant="body2">© {new Date().getFullYear()} — Tous droits réservés</Typography>
    </Box>
  );
}
