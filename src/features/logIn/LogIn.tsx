import React from 'react';
import {View, Text} from 'react-native';
import {AuthLayot} from '@src/widgets';
import {CustomButton, CustomInput} from '@src/shared/ui';
import {styles} from './LogIn.styles';
import {useAppSelector} from '@src/app/store';
import {selectUserInfo} from '@src/entities/user';

export const LogIn = () => {
  const handleGoToSignIn = () => {};
  const handleGoToSignUp = () => {
    //
  };

  return (
    <View style={styles.button_container}>
      <View style={styles.button_box}>
        <CustomInput />
        <CustomButton
          onPress={handleGoToSignUp}
          text="SIGN UP"
          appearance="elevatedXL"
        />
      </View>
      <View style={styles.flexibleBox}>
        <Text>Ho</Text>
      </View>
    </View>
  );
};
