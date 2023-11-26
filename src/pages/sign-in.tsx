import { NextPage } from 'next';

import { DefaultHead } from '#/components/molecules';
import { SignInScreen } from '#/components/screens';

const SignInPage: NextPage = () => {
  return (
    <>
      <DefaultHead />
      <SignInScreen />
    </>
  );
};

export default SignInPage;
