import { NextPage } from 'next';

import { DefaultHead } from '#/components/molecules';
import { SearchGithubScreen } from '#/components/screens';
import { verifyTokenInitialProps } from '#/guards';

const GithubPage: NextPage = () => {
  return (
    <>
      <DefaultHead />
      <SearchGithubScreen />
    </>
  );
};

GithubPage.getInitialProps = verifyTokenInitialProps;

export default GithubPage;
