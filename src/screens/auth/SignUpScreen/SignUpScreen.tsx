import React from 'react';
import {useAppSelector} from '@src/app/store';
import {selectUserInfo} from '@src/entities/user';
import {AuthLayot} from '@src/widgets';
import {SignUp} from '@src/features';

export const SignUpScreen = () => {
  const {loading} = useAppSelector(selectUserInfo);

  return (
    <AuthLayot loading={loading === 'loading'}>
      <SignUp />
    </AuthLayot>
  );
};
