import { IUser } from '#/domain/entities';

export type ISignInForm = Testable<{
  isLoading: boolean;
  onSubmit: (data: ISignInForm.OnSubmit.Data) => void;
}>;
export namespace ISignInForm {
  export namespace OnSubmit {
    export type Data = Pick<IUser, 'email' | 'password'>;
  }
}
