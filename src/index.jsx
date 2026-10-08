import React from 'react';
import { createRoot } from 'react-dom/client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { TssCacheProvider } from 'tss-react';
import { ThemeProvider } from '@mui/material/styles';

import './index.css';
import App from './App.jsx';
import theme from './theme.js';

// MUI and tss-react need separate emotion caches, with MUI's prepended, so
// that classes from makeStyles keep overriding MUI's own styles as JSS did.
const muiCache = createCache({ key: 'mui', prepend: true });
const tssCache = createCache({ key: 'tss' });

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CacheProvider value={muiCache}>
      <TssCacheProvider value={tssCache}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </TssCacheProvider>
    </CacheProvider>
  </React.StrictMode>
);
