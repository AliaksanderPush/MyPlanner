import React from 'react';
import {AuthLayot} from '@src/widgets';
import {ForgotPassword} from '@src/features';
import {useAppSelector} from '@src/app/store';

export const ForgotPassScreen = () => {
  return (
    <AuthLayot>
      <ForgotPassword />
    </AuthLayot>
  );
};
