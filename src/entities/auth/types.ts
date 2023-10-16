import {ITokens} from '@src/app/types';

export type AuthState = {
  tokens: ITokens | null;
  code: number;
  email: string;
};
