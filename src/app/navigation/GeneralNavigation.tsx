import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreenStack} from './AuthStackNavigation';
import {DrawerScreenStack} from './DrawerNavigation';
import {GeneralStackParams} from './types';
import {SCREENS} from './screenConst';

const HomeScreenStack = createNativeStackNavigator<GeneralStackParams>();

export const GeneralNavigation = (): JSX.Element => {
  return (
    <HomeScreenStack.Navigator
      initialRouteName={SCREENS.AUTH_SCREEN_STACK}
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <HomeScreenStack.Screen
        name={SCREENS.AUTH_SCREEN_STACK}
        component={AuthScreenStack}
      />
      <HomeScreenStack.Screen
        name={SCREENS.DRAWER_SCREEN_STACK}
        component={DrawerScreenStack}
      />
    </HomeScreenStack.Navigator>
  );
};
