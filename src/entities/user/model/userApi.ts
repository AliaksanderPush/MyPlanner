import {IUser} from '@src/app/types';
import {api} from '@src/shared/api';

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchUser: builder.query<IUser, void>({
      query() {
        return {
          url: 'user/profile',
          method: 'GET',
        };
      },
    }),
  }),
});
export const {useFetchUserQuery, useLazyFetchUserQuery} = userApi;
