import React from 'react';
import {AuthLayot} from '@src/widgets';
import {ConfirmCode} from '@src/features';
import {useAppSelector} from '@src/app/store';
import {selectUserInfo} from '@src/entities/user';

export const ConfirmCodeScreen = () => {
  const {loading} = useAppSelector(selectUserInfo);

  return (
    <AuthLayot loading={loading === 'loading'}>
      <ConfirmCode />
    </AuthLayot>
  );
};
