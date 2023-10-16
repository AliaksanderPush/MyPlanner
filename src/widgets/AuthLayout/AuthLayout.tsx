import React from 'react';
import {View, Platform} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {IAuthLayout} from './AuthLayout.props';
import {styles} from './AuthLayot.styles';
import {YourPlanner} from '@src/shared/ui/icons';

export const AuthLayot = ({children}: IAuthLayout): JSX.Element => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={Platform.OS === 'ios' ? -10 : -600}
      contentContainerStyle={{
        flex: 1,
        position: 'relative',
      }}>
      <View style={styles.container}>
        <View style={styles.top_container}>
          <YourPlanner />
        </View>
        <View style={styles.bottom_container}>{children}</View>
      </View>
    </KeyboardAwareScrollView>
  );
};
