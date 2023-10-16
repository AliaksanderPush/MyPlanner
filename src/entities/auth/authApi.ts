import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  ILoginRequest,
  IRegistrRequest,
  IRestorePassword,
  ITokens,
} from '@src/app/types';
import {BASE_URL} from '@src/shared/api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    registerUser: builder.mutation<ITokens, IRegistrRequest>({
      query(data) {
        return {
          url: 'auth/registration',
          method: 'POST',
          body: data,
        };
      },
    }),
    loginUser: builder.mutation<ITokens, ILoginRequest>({
      query(data) {
        return {
          url: 'auth/login',
          method: 'POST',
          body: data,
        };
      },
    }),
    logout: builder.mutation<any, {refreshToken: string}>({
      query(body) {
        return {
          url: 'auth/logout',
          responseHandler: 'content-type',
          method: 'POST',
          body,
        };
      },
    }),
    verifyEmail: builder.mutation<any, {email: string}>({
      query(body) {
        return {
          url: 'auth/verify-email',
          method: 'POST',
          body,
        };
      },
    }),
    restorePassword: builder.mutation<any, IRestorePassword>({
      query(body) {
        return {
          url: 'auth/update-password',
          method: 'POST',
          body,
        };
      },
    }),

    refresh: builder.mutation<ITokens, {refreshToken: string}>({
      query(body) {
        return {
          url: 'auth/refresh',
          responseHandler: 'content-type',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useRefreshMutation,
  useLogoutMutation,
  useVerifyEmailMutation,
  useRestorePasswordMutation,
} = authApi;
