import { IProfile } from '#/domain/entities';
import { IAuthorizedHeaders } from '#/domain/generics';

export type IMyService = {
  getMyProfile(data: IMyService.GetMyProfile.Data): Promise<IMyService.GetMyProfile.Result>;
};
export namespace IMyService {
  export namespace GetMyProfile {
    export type Data = {
      headers: IAuthorizedHeaders;
    };
    export type Result = IProfile | null;
  }
}
