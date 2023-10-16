import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICode, ITokens} from '@src/app/types';
import type {AuthState} from './types';
import {authApi} from './authApi';
import {RootState} from '@src/app/store';

const initialState: AuthState = {
  tokens: null,
  code: 0,
  email: '',
};

const endpoint: any = authApi.endpoints;

const authSlice = createSlice({
  name: '@@auth',
  initialState,
  reducers: {
    setToken: (state: AuthState, action: PayloadAction<ITokens>) => {
      state.tokens = action.payload;
    },
    setEmail: (state: AuthState, action: PayloadAction<{email: string}>) => {
      state.email = action.payload.email;
    },
    cleatAuth: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        action => action.type.endsWith('/pending'),
        action => {
          console.log('pending', action);
        },
      )
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, action: PayloadAction<ITokens>) => {
          console.log('res server=>', action.payload);
          state.tokens = action.payload;
        },
      )
      .addMatcher(
        authApi.endpoints.registerUser.matchFulfilled,
        (state, action: PayloadAction<ITokens>) => {
          state.tokens = action.payload;
        },
      )
      .addMatcher(
        authApi.endpoints.refresh.matchFulfilled,
        (state, action: PayloadAction<ITokens>) => {
          state.tokens = action.payload;
        },
      )
      .addMatcher(
        authApi.endpoints.verifyEmail.matchFulfilled,
        (state, action: PayloadAction<ICode>) => {
          state.code = action.payload.code;
        },
      )

      .addMatcher(endpoint.logout.matchFulfilled, state => {
        state.tokens = null;
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        action => {
          console.log(' auth rejected', action);
        },
      );
  },
});

export const {setToken, cleatAuth, setEmail} = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectAuthInfo = (state: RootState) => state.auth;
