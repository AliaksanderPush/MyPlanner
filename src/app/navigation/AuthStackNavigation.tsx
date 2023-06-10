import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignInScreen,
  WelcomeScreen,
  SignUpScreen,
  MyPlannerScreen,
} from '@src/screens';
import {AuthStackParams} from './types';
import {SCREENS} from './screenConst';

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
        name={SCREENS.AUTH_MY_PLANNER}
        component={MyPlannerScreen}
      />
    </StackAuth.Navigator>
  );
};
