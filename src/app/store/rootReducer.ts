import {combineReducers} from '@reduxjs/toolkit';
import {languageReducer} from '@src/entities/language';
import {userReducer} from '@src/entities/user';

export const rootReducer = combineReducers({
  lang: languageReducer,
  user: userReducer,
});
