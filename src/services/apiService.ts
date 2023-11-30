import {
  IAuthorization,
  IGithubUser,
  IGithubUserRepo,
} from "#/domain/generics";
import { axios } from "#/lib";
import vars from "#/vars";

export const apiService = {
  async getGithubUser(data: {
    accessToken: IAuthorization["accessToken"];
    login: IGithubUser["login"];
  }): Promise<IGithubUser> {
    const url = `${vars.endpoints.api}/api/github/${data.login}`;
    const headers = { authorization: `Bearer ${data.accessToken}` };
    const response = await axios.get<IGithubUser>(url, { headers });
    return response.data;
  },

  async listGithubUserRepo(data: {
    accessToken: IAuthorization["accessToken"];
    login: IGithubUser["login"];
  }): Promise<Array<IGithubUserRepo>> {
    const url = `${vars.endpoints.api}/api/github/${data.login}/repo/_list`;
    const headers = { authorization: `Bearer ${data.accessToken}` };
    const response = await axios.get<Array<IGithubUserRepo>>(url, { headers });
    return response.data;
  },
};
