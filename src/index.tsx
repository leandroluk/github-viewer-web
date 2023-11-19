import '@mantine/core/styles.css';
import './styles/global.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { RootRouter } from './components/organisms/RootRouter';
import authStore from './stores/authStore/authStore';
import { theme } from './theme';

authStore.persist.rehydrate()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RootRouter />
    </MantineProvider>
  </React.StrictMode>,
)
