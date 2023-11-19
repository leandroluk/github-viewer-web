import { FC } from "react";

import { SignInPageProps } from './SignInPage.types';

const SignInPage: FC<SignInPageProps> = (props) => {
  return (
    <div data-testid={props.testID}>
      SignInPage
    </div>
  )
}

SignInPage.displayName = 'SignInPage'
SignInPage.defaultProps = {
  testID: SignInPage.displayName
}

export default SignInPage