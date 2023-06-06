import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerStackParams} from './types';
import {ProfileScreen} from '@src/screens';
import {TabScreenStack} from './TabNavigation';

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerScreenStack = (): JSX.Element => {
  return (
    <Drawer.Navigator
      initialRouteName="TabScreenStack"
      screenOptions={{
        drawerActiveTintColor: '#2BB24C',
        drawerInactiveTintColor: '#9B9B9B',
      }}>
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="TabScreenStack" component={TabScreenStack} />
    </Drawer.Navigator>
  );
};
