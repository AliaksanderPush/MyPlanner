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
    update: builder.mutation<IUser, {email: string}>({
      query(body) {
        return {
          url: 'user/update',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});
export const {useFetchUserQuery, useLazyFetchUserQuery} = userApi;
