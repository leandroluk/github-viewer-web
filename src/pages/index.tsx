import { NextPage } from 'next';

import { verifyTokenInitialProps } from '#/guards';
import Router from 'next/router';
import { useEffect } from 'react';

const IndexPage: NextPage = () => {
  useEffect(() => {
    Router.replace('/github');
  }, []);

  return null;
};

IndexPage.getInitialProps = verifyTokenInitialProps;

export default IndexPage;
