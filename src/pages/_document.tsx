import theme from '#/theme';
import { ColorModeScript } from '@chakra-ui/react';
import { Head, Html, Main, NextScript } from 'next/document';
import { FC } from 'react';

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
