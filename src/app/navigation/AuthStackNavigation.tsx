import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignInScreen,
  WelcomeScreen,
  SignUpScreen,
  MyPlannerScreen,
  ForgotPassScreen,
  ConfirmCodeScreen,
  RestorePassScreen,
} from '@src/screens';
import {AuthStackParams} from '@src/app/types';
import {SCREENS} from '@src/app/config/screens';

const StackAuth = createNativeStackNavigator<AuthStackParams>();

export const AuthScreenStack = () => {
  return (
    <StackAuth.Navigator
      initialRouteName={SCREENS.AUTH_WELCOME}
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <StackAuth.Screen name={SCREENS.AUTH_SIGNIN} component={SignInScreen} />
      <StackAuth.Screen name={SCREENS.AUTH_SIGNUP} component={SignUpScreen} />
      <StackAuth.Screen name={SCREENS.AUTH_WELCOME} component={WelcomeScreen} />
      <StackAuth.Screen
        name={SCREENS.AUTH_FORGOT_PASSWORD}
        component={ForgotPassScreen}
      />
      <StackAuth.Screen
        name={SCREENS.AUTH_CONFIRM_CODE}
        component={ConfirmCodeScreen}
      />
      <StackAuth.Screen
        name={SCREENS.AUTH_RESTORE_PASSWORD}
        component={RestorePassScreen}
      />
      <StackAuth.Screen
        name={SCREENS.AUTH_MY_PLANNER}
        component={MyPlannerScreen}
      />
    </StackAuth.Navigator>
  );
};
