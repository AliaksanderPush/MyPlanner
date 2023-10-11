import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerStackParams} from '@src/app/types';
import {ProfileScreen} from '@src/screens';
import {TabScreenStack} from './TabNavigation';
import {SCREENS} from '@src/app/config/screens';

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerScreenStack = (): JSX.Element => {
  return (
    <Drawer.Navigator
      initialRouteName={SCREENS.TAB_SCREEN_STACK}
      screenOptions={{
        drawerActiveTintColor: '#2BB24C',
        drawerInactiveTintColor: '#9B9B9B',
        headerShown: false,
      }}>
      <Drawer.Screen name={SCREENS.TAB_PROFILE} component={ProfileScreen} />
      <Drawer.Screen name={SCREENS.TAB_SCREEN_STACK}>
        {({navigation}) => <TabScreenStack navigation={navigation} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
