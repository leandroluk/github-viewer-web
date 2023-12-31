import { IProfile, IUser } from "#/domain/entities";
import { IAuthorization, IEntity } from "#/domain/generics";
import { axios } from "#/lib";
import vars from "#/vars";

export const myService = {
  async getMyProfile(
    accessToken: IAuthorization["accessToken"],
  ): Promise<IProfile> {
    const url = `${vars.endpoints.api}/my/profile`;
    const headers = { authorization: `Bearer ${accessToken}` };
    const response = await axios.get<IProfile>(url, { headers });
    return response.data;
  },

  async editMyUser(
    accessToken: IAuthorization["accessToken"],
    body: Partial<Omit<IUser, keyof IEntity>>,
  ): Promise<void> {
    const url = `${vars.endpoints.api}/my`;
    const headers = { authorization: `Bearer ${accessToken}` };
    await axios.put(url, body, { headers });
  },

  async patchMyProfileGithub(
    accessToken: IAuthorization["accessToken"],
  ): Promise<void> {
    const url = `${vars.endpoints.api}/my/profile/github`;
    const headers = { authorization: `Bearer ${accessToken}` };
    await axios.patch(url, { headers });
  },
};
