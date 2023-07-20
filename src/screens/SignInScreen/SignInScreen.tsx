import React from 'react';
import {AuthLayot} from '@src/widgets';
import {LogIn} from '@src/features';
import {useAppSelector} from '@src/app/store';
import {selectUserInfo} from '@src/entities/user';

export const SignInScreen = () => {
  const {loading} = useAppSelector(selectUserInfo);

  return (
    <AuthLayot loading={loading === 'loading'}>
      <LogIn />
    </AuthLayot>
  );
};
