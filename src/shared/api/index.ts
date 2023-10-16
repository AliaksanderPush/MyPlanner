import {RootState} from '@src/app/store';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {removeToken, setTokens} from '../storage';
import {ITokens} from '@src/app/types';

export const BASE_URL = 'http://192.168.1.72:4000/';
//export const BASE_URL = 'http://192.168.0.109:4000/';

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as RootState).auth.tokens;
    console.log('token is rfr store', token);
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
    //const tokens = await getTokens();
    const tokens = (api.getState() as any).auth.tokens.refreshToken;
    console.log('refresh store', tokens);
    const refreshResult = await baseQueryWithAuth(
      {
        url: `auth/refresh`,
        method: 'POST',
        body: {refreshToken: tokens?.refreshToken},
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
      await removeToken();
    }
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'api',
  endpoints: () => ({}),
});
