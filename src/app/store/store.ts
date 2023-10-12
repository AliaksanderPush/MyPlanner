import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import {authApi} from '@src/entities/auth';
import {userApi} from '@src/entities/user/model/userApi';
import {api} from '@src/shared/api';

export const store = configureStore({
  reducer: {
    rootReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware, api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
