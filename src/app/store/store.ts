import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import {authApi} from '@src/entities/auth';
import {api} from '@src/shared/api';

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware, api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
