import { create } from "zustand";
import { COOKIES_AUTH_STORE } from "#/constants";
import { IProfile, IUser } from "#/domain/entities";
import { IAuthorization, IEntity, IGithubUser } from "#/domain/generics";
import { cookieManager } from "#/lib";
import customHistory from "#/lib/history";
import { authService, myService } from "#/services";

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
    export type Data = Pick<IUser, "email" | "password">;
    export type Result = IAuthorization;
  }
  export namespace SignUp {
    export type Data = Pick<IUser, "email" | "password"> & {
      _github: Pick<IGithubUser, "login">;
    };
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

const authStore = create<IAuthStore>((set, get) => ({
  ...makeInitialState(),

  clearError: () => {
    set({ error: null });
  },

  signIn: async (data) => {
    try {
      set({ loading: true });
      const authorization = await authService.postSignIn(data);
      const profile = await myService.getMyProfile(authorization?.accessToken);
      set({
        ...makeInitialState(),
        isAuth: true,
        authorization,
        profile,
        loading: false,
      });
      customHistory.replace("/");
    } catch (error) {
      set({ error: error as Error, loading: false });
    }
  },

  signUp: async (data) => {
    try {
      set({ loading: true });
      await authService.postSignUp(data);
      set({ loading: false });
    } catch (error) {
      set({ error: error as Error, loading: false });
    }
  },

  signOut: () => {
    set(makeInitialState());
    customHistory.replace(`/auth`);
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
      customHistory.replace(`/auth`);
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
}));

authStore.subscribe((state) =>
  cookieManager.setItem(COOKIES_AUTH_STORE, state),
);

export { authStore };
