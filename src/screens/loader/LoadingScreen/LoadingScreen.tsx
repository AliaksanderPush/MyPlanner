import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {View} from 'react-native';
import {styles} from './LoadingScreen.styles';
import {colors} from '@src/app/styles';

export const LoadingScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        animating={true}
        theme={{colors: {primary: colors.elevated}}}
      />
    </View>
  );
};
