import React from 'react';
import {AuthLayot} from '@src/widgets';
import {LogIn} from '@src/features';

export const SignInScreen = () => {
  return (
    <AuthLayot loading={false}>
      <LogIn />
    </AuthLayot>
  );
};
