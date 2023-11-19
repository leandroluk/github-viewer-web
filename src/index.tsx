import '@mantine/core/styles.css';
import './styles/global.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <span>woraasdadsdasks</span>
    </MantineProvider>
  </React.StrictMode>,
)
