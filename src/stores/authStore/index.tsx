import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { authService } from '#/services';

import { myService } from '#/services/myService';
import { AuthStore } from './types';

const SESSION_EXPIRED_MESSAGE = 'Session has expired.';

export const authStore = create(
  persist<AuthStore>(
    (set, get) => ({
      loading: false,
      error: null,
      isAuth: null,
      authorization: null,
      profile: null,

      signIn: async (data) => {
        try {
          set({ loading: true });
          const authorization = await authService.postSignIn({ body: data });
          const profile = await myService.getMyProfile({
            headers: { authorization: `Bearer ${authorization?.accessToken}` },
          });
          set({ authorization, profile });
        } catch (error) {
          set({ error: error as Error });
        } finally {
          set({ loading: false });
        }
      },

      signUp: async (data) => {
        try {
          set({ loading: true });
          await authService.postSignUp({ body: data });
        } catch (error) {
          set({ error: error as Error });
        } finally {
          set({ loading: false });
        }
      },

      verifyToken: async () => {
        try {
          if (get().loading) return;
          set({ loading: true });
          const { authorization } = get();
          if (authorization) {
            await authService.getVerifyToken({
              headers: { authorization: `Bearer ${authorization.accessToken}` },
            });
            set({ isAuth: true });
            return;
          }
          throw new Error(SESSION_EXPIRED_MESSAGE);
        } catch (error) {
          set({
            error: error as Error,
            isAuth: false,
          });
        } finally {
          set({ loading: false });
        }
      },

      refreshToken: async () => {
        try {
          set({ loading: true });
          const { authorization } = get();
          if (authorization) {
            const newAuthorization = await authService.postRefreshToken({
              headers: { authorization: `Bearer ${authorization.accessToken}` },
            });
            set({
              authorization: newAuthorization,
              isAuth: true,
            });
            return newAuthorization;
          }
          throw new Error(SESSION_EXPIRED_MESSAGE);
        } catch (error) {
          set({
            error: error as Error,
            isAuth: false,
          });
          return null;
        } finally {
          set({ loading: false });
        }
      },
    }),
    { name: 'authStore' }
  )
);
