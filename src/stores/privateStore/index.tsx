import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PrivateStore } from './types';

export const privateStore = create(
  persist<PrivateStore>(
    (set) => ({
      loading: false,
      error: null,
      searchHistoryOpened: false,
      searchHistory: [],
      searchValue: '',
      githubUser: null,
      listGithubUserRepo: null,

      doSearch: async (searchValue) => {
        try {
          set((prev) => ({
            loading: true,
            searchValue,
            searchHistory: Array<string>().concat(prev.searchHistory, searchValue).slice(0, 20),
          }));
        } catch (error) {
          set({ error: error as Error });
        } finally {
          set({ loading: false });
        }
      },

      toggleHistoryOpened: (searchHistoryOpened) => {
        set((prev) => ({
          searchHistoryOpened: searchHistoryOpened ?? !prev.searchHistoryOpened,
        }));
      },
    }),
    { name: 'privateStore' }
  )
);
