import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Modal } from './components/Modal';

import { Routes } from './routes';

import { GlobalCSS } from './styles/global';
import { theme } from './styles/theme';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Routes />
      <Modal />
    </ThemeProvider>
  </React.StrictMode>
);
