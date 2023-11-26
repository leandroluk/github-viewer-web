import { NextPage } from 'next';

import { DefaultHead } from '#/components/molecules';
import { SignUpScreen } from '#/components/screens';

const SignUpPage: NextPage = () => {
  return (
    <>
      <DefaultHead />
      <SignUpScreen />
    </>
  );
};

export default SignUpPage;
