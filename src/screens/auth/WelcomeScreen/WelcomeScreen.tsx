import React from 'react';
import {View, Image} from 'react-native';
import {CustomButton, CustomText} from '@src/shared/ui';
import {path} from '@src/app/config';
import {WelcomProps} from './WelcomeScreen.props';
import {SCREENS} from '@src/app/config/screens';
import {styles} from './WelcomeScreen.styles';

export const WelcomeScreen = ({navigation}: WelcomProps) => {
  const handleContinue = () => {
    navigation.navigate(SCREENS.AUTH_MY_PLANNER);
  };
  return (
    <View style={styles.container}>
      <CustomText font="robotoM" size={24}>
        Добро пожаловать
      </CustomText>
      <View style={styles.middle_container}>
        <Image style={styles.image} source={path.goals} />
      </View>
      <CustomButton
        onPress={handleContinue}
        text="ПРОДОЛЖИТЬ"
        appearance="containedXL"
      />
    </View>
  );
};
