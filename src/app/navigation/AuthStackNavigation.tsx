import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from '@src/screens';
import {AuthStackParams} from './types';

const StackAuth = createNativeStackNavigator<AuthStackParams>();

export const AuthScreenStack = () => {
  return (
    <StackAuth.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <StackAuth.Screen name="SignInScreen" component={SignInScreen} />
    </StackAuth.Navigator>
  );
};
