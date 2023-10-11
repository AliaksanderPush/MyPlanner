import React from 'react';
import {AuthLayot} from '@src/widgets';
import {ForgotPassword} from '@src/features';
import {useAppSelector} from '@src/app/store';
import {selectUserInfo} from '@src/entities/user';

export const ForgotPassScreen = () => {
  const {loading} = useAppSelector(selectUserInfo);

  return (
    <AuthLayot loading={loading === 'loading'}>
      <ForgotPassword />
    </AuthLayot>
  );
};
