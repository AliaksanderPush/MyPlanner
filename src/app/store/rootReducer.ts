import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from '@src/entities/auth';
import {languageReducer} from '@src/entities/language';
import {userReducer} from '@src/entities/user';

export const rootReducer = combineReducers({
  lang: languageReducer,
  user: userReducer,
  auth: authReducer,
});
