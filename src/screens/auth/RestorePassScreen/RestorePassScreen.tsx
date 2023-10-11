import React from 'react';
import {AuthLayot} from '@src/widgets';
import {RestorePassword} from '@src/features';
import {useAppSelector} from '@src/app/store';
import {selectUserInfo} from '@src/entities/user';

export const RestorePassScreen = () => {
  const {loading} = useAppSelector(selectUserInfo);

  return (
    <AuthLayot loading={loading === 'loading'}>
      <RestorePassword />
    </AuthLayot>
  );
};
