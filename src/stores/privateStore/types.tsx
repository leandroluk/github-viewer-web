import { IGithubUser, IGithubUserRepo } from '#/domain/generics';

export type PrivateStore = PrivateStore.State & PrivateStore.Actions;
export namespace PrivateStore {
  export type State = {
    loading: boolean;
    error: null | Error;
    searchHistoryOpened: boolean;
    searchHistory: string[];
    searchValue: string;
    githubUser: null | IGithubUser;
    listGithubUserRepo: null | IGithubUserRepo[];
  };
  export type Actions = {
    doSearch(searchValue: string): Promise<void>;
    toggleHistoryOpened(searchHistoryOpened?: boolean): void;
  };
}
