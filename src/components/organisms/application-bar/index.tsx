import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function ApplicationBar(): JSX.Element {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Mural da Vergonha do G13
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
