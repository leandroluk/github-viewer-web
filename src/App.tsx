import '@mantine/core/styles.css';
import './styles/globals.css';

import { MantineProvider } from '@mantine/core';
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RootRouter } from './components/organisms';
import theme from './styles/theme';

const App: FC = () => {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
