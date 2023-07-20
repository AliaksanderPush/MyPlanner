import React from 'react';
import {DimensionValue} from 'react-native/types';

export interface ICustomTextInput {
  label: string;
  value: string;
  setValue: (event: string | React.ChangeEvent<Element>) => void;
  onBlur?: () => void;
  err?: string | undefined;
  iconPos?: 'left' | 'right' | undefined;
  typeIcon?: 'password' | 'email' | undefined;
  w?: DimensionValue | undefined;
}
