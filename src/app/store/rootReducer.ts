import {combineReducers} from '@reduxjs/toolkit';
import {authApi, authReducer} from '@src/entities/auth';
import {languageReducer} from '@src/entities/language';
import {userReducer} from '@src/entities/user';
import {userApi} from '@src/entities/user/model/userApi';

export const rootReducer = combineReducers({
  lang: languageReducer,
  user: userReducer,
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});
