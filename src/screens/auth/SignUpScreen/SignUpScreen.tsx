import React from 'react';
import {AuthLayot} from '@src/widgets';
import {SignUp} from '@src/features';

export const SignUpScreen = () => {
  return (
    <AuthLayot loading={false}>
      <SignUp />
    </AuthLayot>
  );
};
