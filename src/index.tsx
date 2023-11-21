import { CSSReset, ChakraProvider, ColorModeProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import customTheme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
