import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit';
import {ITokens, IUser, IUserState} from '../user.types';
import axios from 'axios';
import {RootState} from '@src/app/store';

const initialState: IUserState = {
  user: null,
  tokens: null,
  loading: 'idle',
  error: null,
};

export const fetchUser = createAsyncThunk(
  '@@user/fetchUser',
  async (user, {rejectWithValue}) => {
    try {
      const {data} = await axios.post<IUser>(`/auth/login`, user);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const registration = createAsyncThunk(
  '@@user/registration',
  async (user, {rejectWithValue}) => {
    try {
      const {data} = await axios.post<IUser>(`/auth/registration`, user);
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  },
);

const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {
    upDateTokens: (state: IUserState, action: PayloadAction<ITokens>) => {
      state.tokens = action.payload;
    },
    permitToSession: (state: IUserState) => {
      state.tokens = {
        accessToken: 'dsdsd',
        refreshToken: 'oioqwoqwqo',
      };
    },
    permitCloseToSession: (state: IUserState) => {
      state.tokens = null;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IUserState>) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      })
      .addCase(
        registration.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.user = action.payload;
        },
      )

      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.loading = 'loading';
          state.error = null;
        },
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, {payload}) => {
          state.loading = 'idle';
          state.error = payload;
        },
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.loading = 'idle';
        },
      );
  },
});

export const {upDateTokens, permitToSession, permitCloseToSession} =
  userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectUserInfo = (state: RootState) => state.user;
