export interface IUser {
  email: string;
  name: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IUserState {
  user: IUser | null;
  tokens: ITokens | null;
  loading: 'idle' | 'loading';
  error: null | string;
}
