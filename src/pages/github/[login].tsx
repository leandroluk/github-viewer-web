import { NextPage } from 'next';

import { DefaultHead } from '#/components/molecules';
import { SearchResultScreen } from '#/components/screens';
import { verifyTokenInitialProps } from '#/guards';

const GithubPage: NextPage = () => {
  return (
    <>
      <DefaultHead />
      <SearchResultScreen />
    </>
  );
};

GithubPage.getInitialProps = verifyTokenInitialProps;

export default GithubPage;
