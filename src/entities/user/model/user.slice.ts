import {
  createSlice,
  PayloadAction,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit';
import type {IUserState} from '../user.types';
import {IUser} from '@src/app/types';
import {userApi} from './userApi';

const initialState: IUserState = {
  user: null,
};

const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {
    clearUser: () => initialState,
  },
  extraReducers: (builder: ActionReducerMapBuilder<IUserState>) => {
    builder
      .addMatcher(userApi.endpoints.fetchUser.matchPending, (state, action) => {
        console.log('pending', action);
      })
      .addMatcher(
        userApi.endpoints.fetchUser.matchFulfilled,
        (state, action: PayloadAction<IUser>) => {
          console.log('get user=>', action.payload);
          state.user = action.payload;
        },
      )
      .addMatcher(userApi.endpoints.fetchUser.matchRejected, action => {
        console.log('rejected', action);
      });
  },
});

export const {clearUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
