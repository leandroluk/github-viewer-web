import { IAuthorization, IGithubUser, IGithubUserRepo } from '#/domain/generics';
import { axiosHelper } from '#/helpers';
import vars from '#/vars';

export const apiService = {
  async getGithubUser(data: {
    accessToken: IAuthorization['accessToken'];
    params: Pick<IGithubUser, 'login'>;
  }): Promise<IGithubUser> {
    const url = `${vars.endpoints.api}/api/github/${data.params.login}`;
    const headers = { authorization: `Bearer ${data.accessToken}` };
    const response = await axiosHelper.getInstance().get<IGithubUser>(url, { headers });
    return response.data;
  },

  async listGithubUserRepo(data: {
    accessToken: IAuthorization['accessToken'];
    params: Pick<IGithubUser, 'login'>;
  }): Promise<Array<IGithubUserRepo>> {
    const url = `${vars.endpoints.api}/api/github/${data.params.login}/repo/_list`;
    const headers = { authorization: `Bearer ${data.accessToken}` };
    const response = await axiosHelper.getInstance().get<Array<IGithubUserRepo>>(url, { headers });
    return response.data;
  },
};
