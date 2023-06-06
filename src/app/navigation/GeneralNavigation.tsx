import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from '@src/screens';
import {AuthScreenStack} from './AuthStackNavigation';
import {DrawerScreenStack} from './DrawerNavigation';

const HomeScreenStack = createNativeStackNavigator();

export const GeneralNavigation = () => {
  return (
    <HomeScreenStack.Navigator
      initialRouteName="DrawerScreenStack"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <HomeScreenStack.Screen
        name="AuthScreenStack"
        component={AuthScreenStack}
      />
      <HomeScreenStack.Screen
        name="DrawerScreenStack"
        component={DrawerScreenStack}
      />
    </HomeScreenStack.Navigator>
  );
};
