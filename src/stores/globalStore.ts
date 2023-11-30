import { create } from "zustand";
import {
  IAuthorization,
  IGithubUser,
  IGithubUserRepo,
} from "#/domain/generics";
import customHistory from "#/lib/history";
import { apiService } from "../services";

export type IGlobalStore = IGlobalStore.State & IGlobalStore.Actions;
export namespace IGlobalStore {
  export type State = {
    loading: boolean;
    error: null | Error;
    searchHistoryOpened: boolean;
    searchHistory: string[];
    searchValue: string;
    githubUser: null | IGithubUser;
    listGithubUserRepo: IGithubUserRepo[];
  };
  export type Actions = {
    getGithubUser(data: Actions.GetGithubUser.Data): Promise<void>;
    toggleHistoryOpened(searchHistoryOpened?: boolean): void;
    resetInitialState(): void;
  };
  export namespace Actions {
    export namespace GetGithubUser {
      export type Data = Pick<IAuthorization, "accessToken"> &
        Pick<IGithubUser, "login">;
    }
  }
}

const makeInitialState = (): IGlobalStore.State => ({
  loading: false,
  error: null,
  searchHistoryOpened: false,
  searchHistory: [],
  searchValue: "",
  githubUser: null,
  listGithubUserRepo: [],
});

export const globalStore = create<IGlobalStore>((set, get) => ({
  ...makeInitialState(),

  getGithubUser: async (data) => {
    try {
      set((prev) => ({
        loading: true,
        searchValue: data.login!,
        searchHistory: Array<string>()
          .concat(prev.searchHistory, data.login!)
          .slice(0, 20),
      }));
      const [githubUser, listGithubUserRepo] = await Promise.all([
        apiService.getGithubUser(data),
        apiService.listGithubUserRepo(data),
      ]);
      set({ githubUser, listGithubUserRepo });
      customHistory.push(`/github/${data.login}`);
    } catch (error) {
      set({ error: error as Error });
    } finally {
      set({ loading: false });
    }
  },

  toggleHistoryOpened: (searchHistoryOpened) => {
    if (searchHistoryOpened === undefined)
      searchHistoryOpened = !get().searchHistoryOpened;
    set({ searchHistoryOpened });
  },

  resetInitialState: () => {
    set(makeInitialState());
  },
}));
