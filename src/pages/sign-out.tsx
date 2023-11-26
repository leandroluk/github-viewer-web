import { NextPage } from 'next';

import Router from 'next/router';
import { useEffect } from 'react';

import { authStore } from '../stores';

const SignOutPage: NextPage = () => {
  useEffect(() => {
    authStore.getState().signOut();
    Router.replace('/sign-in');
  }, []);

  return null;
};

export default SignOutPage;
