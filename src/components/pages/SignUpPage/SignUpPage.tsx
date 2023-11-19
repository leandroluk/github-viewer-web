import { FC } from "react";

import { SignUpPageProps } from './SignUpPage.types';

const SignUpPage: FC<SignUpPageProps> = (props) => {
  return (
    <div data-testid={props.testID}>
      SignUpPage
    </div>
  )
}

SignUpPage.displayName = 'SignUpPage'
SignUpPage.defaultProps = {
  testID: SignUpPage.displayName
}

export default SignUpPage