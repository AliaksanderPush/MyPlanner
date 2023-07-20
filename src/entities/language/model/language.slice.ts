import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ILanguageState} from '../language.types';
import {RootState} from '@src/app/store';

const initialState: ILanguageState = {
  language: 'English',
};

const languageSlice = createSlice({
  name: '@@tabs',
  initialState,
  reducers: {
    changeLanguage: (state: ILanguageState, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const {changeLanguage} = languageSlice.actions;
export const languageReducer = languageSlice.reducer;

export const selectLanguage = (state: RootState) => state.lang;
