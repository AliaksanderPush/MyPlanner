import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ILoginRequest, IRegistrRequest, ITokens} from '@src/app/types';
import {setTokens} from '@src/shared/storage';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://192.168.1.72:4000/`,
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
        console.log('query in=>', data);
        return {
          url: 'auth/login',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});
export const {useRegisterUserMutation, useLoginUserMutation} = authApi;
