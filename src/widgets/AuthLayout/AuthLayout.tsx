import React from 'react';
import {View, Platform, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ActivityIndicator} from 'react-native-paper';
import {path} from '@src/app/config';
import {colors} from '@src/app/styles';
import {IAuthLayout} from './AuthLayout.props';
import {styles} from './AuthLayot.styles';
import {YourPlanner} from '@src/shared/ui';

export const AuthLayot = ({children, loading}: IAuthLayout): JSX.Element => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={Platform.OS === 'ios' ? -10 : -600}
      contentContainerStyle={{
        flex: 1,
        position: 'relative',
      }}>
      {loading ? (
        <View style={styles.loading_container}>
          <ActivityIndicator
            size="large"
            animating={true}
            color={colors.contained}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.top_container}>
            <YourPlanner />
          </View>
          <View style={styles.bottom_container}>{children}</View>
        </View>
      )}
    </KeyboardAwareScrollView>
  );
};
