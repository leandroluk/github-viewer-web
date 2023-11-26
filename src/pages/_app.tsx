import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import { GithubCornerLink } from '#/components/atoms';
import { axiosHelper } from '#/helpers';
import { authStore } from '#/stores';
import theme from '#/theme';
import { FC, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    axiosHelper.init(authStore.getState().refreshToken);
  }, []);

  return (
    <>
      <style
        jsx
        global
      >
        {`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}
      </style>

      <CacheProvider>
        <ChakraProvider theme={theme}>
          <GithubCornerLink />
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </>
  );
};

export default App;
