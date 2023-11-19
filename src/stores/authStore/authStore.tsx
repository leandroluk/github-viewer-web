import { create } from "zustand"
import { persist } from 'zustand/middleware'

import { authService } from '#/services/authService'
import { IAuthStore } from './authStore.types'

const authStore = create(persist<IAuthStore>((set, get) => ({
  loading: null,
  error: null,
  authorization: null,
  profile: null,

  signIn: async (data) => {
    try {
      set({ loading: true })
      const authorization = await authService.postSignIn({ body: data })
      set({ authorization })
      return authorization
    } catch (error) {
      set({ error: error as Error })
      return null
    } finally {
      set({ loading: false })
    }
  },

  signUp: async (data) => {
    try {
      set({ loading: true })
      await authService.postSignUp({ body: data })
    } catch (error) {
      set({ error: error as Error })
    } finally {
      set({ loading: false })
    }
  },

  verifyToken: async () => {
    try {
      set({ loading: true })
      const { authorization } = get()
      if (authorization) {
        await authService.getVerifyToken({
          headers: { authorization: `Bearer ${authorization.accessToken}` }
        })
        return
      }
      set({ error: new Error('Session has expired.') })
    } catch (error) {
      set({ error: error as Error })
    } finally {
      set({ loading: false })
    }
  },

  refreshToken: async () => {
    try {
      set({ loading: true })
      const { authorization } = get()
      if (authorization) {
        const newAuthorization = await authService.postRefreshToken({
          headers: { authorization: `Bearer ${authorization.accessToken}` }
        })
        set({ authorization: newAuthorization })
        return newAuthorization
      }
      return null
    } catch (error) {
      set({ error: error as Error })
      return null
    } finally {
      set({ loading: false })
    }
  },

  signOut: () => {
    authStore.persist.clearStorage()
  }
}), { name: 'authStore' }))

export default authStore