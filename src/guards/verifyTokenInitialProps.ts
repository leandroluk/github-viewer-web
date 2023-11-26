import { NextPage } from 'next';
import { STORE_AUTH_KEY } from '../constants/stores';
import { cookiesHelper } from '../helpers';
import { authService } from '../services';
import { IAuthStore } from '../stores';

export const verifyTokenInitialProps: NextPage['getInitialProps'] = async (context) => {
  try {
    const cookies = cookiesHelper(context.req?.headers.cookie);
    const rawAuthStore = cookies.getItem<IAuthStore>(STORE_AUTH_KEY);
    const accessToken = rawAuthStore?.authorization?.accessToken;
    await authService.getVerifyToken(accessToken ?? '');
  } catch (error) {
    const Location = '/sign-in';
    if (context.res) {
      context.res.writeHead(302, { Location });
      context.res.end();
    }
  }
  // this is required to omit the error "{{Page}} returned an empty object from `getInitialProps`"
  // see: https://nextjs.org/docs/messages/empty-object-getInitialProps
  return { 0: 1 };
};
