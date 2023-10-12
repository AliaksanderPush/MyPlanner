import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ITokens} from '@src/app/types';
import type {AuthState} from './types';
import {authApi} from './authApi';
import {setTokens} from '@src/shared/storage';
import {RootState} from '@src/app/store';

const initialState: AuthState = {
  tokens: null,
};

const authSlice = createSlice({
  name: '@@auth',
  initialState,
  reducers: {
    setToken: (state: AuthState, action: PayloadAction<ITokens>) => {
      state.tokens = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(authApi.endpoints.loginUser.matchPending, (state, action) => {
        console.log('pending', action);
      })
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, action: PayloadAction<ITokens>) => {
          state.tokens = action.payload;
        },
      )
      .addMatcher(authApi.endpoints.loginUser.matchRejected, action => {
        console.log('rejected', action);
      });
  },
});

export const {setToken} = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectAuthInfo = (state: RootState) =>
  state.rootReducer.auth.tokens;
