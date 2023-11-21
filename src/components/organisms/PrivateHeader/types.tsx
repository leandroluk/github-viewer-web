import { IProfile } from '#/domain/entities';

export type IPrivateHeader = Testable<{
  profile?: null | IProfile;
}>;
