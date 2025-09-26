'use client';

import * as React from 'react';
import { Card, CardContent, Typography, Chip, Stack } from '@mui/material';
import type { Photo } from '../lib/photos';

export default function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <Card variant="outlined" sx={{ overflow: 'hidden' }}>
      <img src={photo.url} alt={photo.title} />
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{photo.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {photo.region} · {photo.reseau} · {photo.ligne} · {photo.modele}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {photo.ambiance.map(a => <Chip key={a} size="small" label={a} />)}
          <Chip size="small" label={photo.couleur} variant="outlined" />
        </Stack>
      </CardContent>
    </Card>
  );
}
