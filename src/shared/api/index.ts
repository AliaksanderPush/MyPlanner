import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {getTokens, setTokens} from '../storage';
import {ITokens} from '@src/app/types';

export const BASE_URL = 'http://192.168.0.109:4000/';

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: async headers => {
    const token = await getTokens();
    console.log('token is fault!');
    if (!!token) {
      headers.set('Authorization', `Bearer ${token.accessToken}`);
    } else {
      console.log('token is fault!');
    }
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQueryWithAuth(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const tokens = await getTokens();
    const refreshResult = await baseQueryWithAuth(
      {
        url: `auth/refresh`,
        method: 'POST',
        body: tokens?.refreshToken,
      },
      api,
      extraOptions,
    );
    console.log('result in refresh=>', refreshResult);

    if (refreshResult.data) {
      const tokens = refreshResult.data as ITokens;
      await setTokens(tokens);
      // retry the initial query
      result = await baseQueryWithAuth(args, api, extraOptions);
    } else {
      console.log('logou');
      //api.dispatch(loggedOut())
    }
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'api',
  endpoints: () => ({}),
});
