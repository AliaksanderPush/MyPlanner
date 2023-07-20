import React from 'react';
import {View} from 'react-native';
import {AuthLayot} from '@src/widgets';
import {styles} from './MyPlannerScreen.styles';
import {CustomButton} from '@src/shared/ui';
import {MyPlannerProps} from './MyPlannerScreen.props';
import {SCREENS} from '@src/app/navigation';

export const MyPlannerScreen = ({navigation}: MyPlannerProps): JSX.Element => {
  const handleGoToSignIn = () => {
    navigation.navigate(SCREENS.AUTH_SIGNIN);
  };
  const handleGoToSignUp = () => {
    navigation.navigate(SCREENS.AUTH_SIGNUP);
  };

  return (
    <AuthLayot loading={false}>
      <View style={styles.button_container}>
        <View style={styles.button_box}>
          <CustomButton
            onPress={handleGoToSignIn}
            text="АВТОРИЗОВАТЬСЯ"
            appearance="containedXL"
          />
          <CustomButton
            onPress={handleGoToSignUp}
            text="ЗАРЕГИСТРИРОВАТЬСЯ"
            appearance="elevatedXL"
          />
        </View>

        <View style={styles.flexibleBox}></View>
      </View>
    </AuthLayot>
  );
};
