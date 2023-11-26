import Router from 'next/router';
import { create } from 'zustand';

import { IProfile, IUser } from '#/domain/entities';
import { IAuthorization, IEntity, IGithubUser } from '#/domain/generics';
import { authService, myService } from '#/services';
import { STORE_AUTH_KEY } from '../constants/stores';
import { cookiesHelper } from '../helpers';

export type IAuthStore = IAuthStore.State & IAuthStore.Actions;
export namespace IAuthStore {
  export type State = {
    loading: boolean;
    error: null | Error;
    isAuth: null | boolean;
    authorization: null | IAuthorization;
    profile: null | IProfile;
  };
  export type Actions = {
    clearError(): void;
    signIn(data: SignIn.Data): Promise<void>;
    signUp(data: SignUp.Data): Promise<void>;
    signOut(): void;
    editMyUser(data: EditMyUser.Data): Promise<void>;
    refreshMyGithubUser(): Promise<void>;
    verifyToken(): Promise<void>;
    refreshToken(): Promise<void>;
  };
  export namespace SignIn {
    export type Data = Pick<IUser, 'email' | 'password'>;
    export type Result = IAuthorization;
  }
  export namespace SignUp {
    export type Data = Pick<IUser, 'email' | 'password'> & { _github: Pick<IGithubUser, 'login'> };
  }
  export namespace EditMyUser {
    export type Data = Partial<Omit<IUser, keyof IEntity>>;
  }
  export namespace RefreshToken {
    export type Result = IAuthorization;
  }
}

const makeInitialState = (): IAuthStore.State => ({
  loading: false,
  error: null,
  isAuth: null,
  authorization: null,
  profile: null,
});

const boostraped = false;
const authStore = create<IAuthStore>((setState, get) => {
  const set: typeof setState = (partial, replace) => {
    setState(partial, replace);
    cookiesHelper().setItem(STORE_AUTH_KEY, get());
  };
  return {
    ...makeInitialState(),

    // actions
    clearError: () => {
      set({ error: null });
    },

    signIn: async (data) => {
      try {
        set({ loading: true });
        const authorization = await authService.postSignIn(data);
        const profile = await myService.getMyProfile(authorization?.accessToken);
        set({ authorization, profile });
        Router.replace('/');
      } catch (error) {
        set({ error: error as Error, loading: false });
      }
    },

    signUp: async (data) => {
      try {
        set({ loading: true });
        await authService.postSignUp(data);
        set({ loading: false });
        Router.replace('/sign-in');
      } catch (error) {
        set({ error: error as Error, loading: false });
      }
    },

    signOut: () => {
      set(makeInitialState());
    },

    editMyUser: async (data) => {
      try {
        set({ loading: true });
        const accessToken = get().authorization?.accessToken as string;
        await myService.editMyUser(accessToken, data);
        const profile = await myService.getMyProfile(accessToken);
        set({ profile });
      } catch (error) {
        set({ error: error as Error });
      } finally {
        set({ loading: false });
      }
    },

    refreshMyGithubUser: async () => {
      try {
        set({ loading: true });
        const accessToken = get().authorization?.accessToken as string;
        await myService.patchMyProfileGithub(accessToken);
        const profile = await myService.getMyProfile(accessToken);
        set({ profile });
      } catch (error) {
        set({ error: error as Error });
      } finally {
        set({ loading: false });
      }
    },

    verifyToken: async () => {
      try {
        set({ loading: true });
        const accessToken = get().authorization?.accessToken as string;
        await authService.getVerifyToken(accessToken);
        set({ isAuth: true });
      } catch (error) {
        set({ error: error as Error, isAuth: false });
      } finally {
        set({ loading: false });
      }
    },

    refreshToken: async () => {
      try {
        set({ loading: true });
        const accessToken = get().authorization?.accessToken as string;
        const authorization = await authService.postRefreshToken(accessToken);
        set({ authorization, isAuth: true });
      } catch (error) {
        set({ isAuth: false });
      } finally {
        set({ loading: false });
      }
    },
  };
});

const { getState: originalGetState, setState: originalSetState } = authStore;

authStore.getState = () => {
  if (!boostraped) {
    const initialState = cookiesHelper().getItem<IAuthStore>(STORE_AUTH_KEY);
    if (initialState) originalSetState(initialState);
  }
  return originalGetState();
};

authStore.setState = (partial, replace) => {
  originalSetState(partial, replace);
  cookiesHelper().setItem(STORE_AUTH_KEY, originalGetState());
};

export { authStore };
