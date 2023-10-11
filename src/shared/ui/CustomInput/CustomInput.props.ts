import React from 'react';

export interface ICustomTextInput {
  value: string;
  inputKey?: string | undefined;
  onChangeText?(value: string, inputKey?: string): void;
  err?: string | undefined;
  leftIcon: 'email' | 'lock';
  rightIcon?: 'password' | undefined;
  placeholder: string;
}
