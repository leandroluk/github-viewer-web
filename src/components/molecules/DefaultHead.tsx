import Head from 'next/head';

import vars from '#/vars';
import { FC } from 'react';

export type IDefaultHead = {
  title?: string;
  description?: string;
};

export const DefaultHead: FC<IDefaultHead> = ({ title = vars.app.name, description = vars.app.description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon.ico"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favlight__192-192px.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favdark__192-192px.png"
        media="(prefers-color-scheme: dark)"
      />
    </Head>
  );
};
