import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerStackParams} from '@src/app/types';
import {ProfileScreen} from '@src/screens';
import {TabScreenStack} from './TabNavigation';
import {SCREENS} from '@src/app/config/screens';
import {DrawerMenu} from '@src/widgets';
import Account from '@src/shared/assets/icons/account.svg';
import {colors, textScale} from '../styles';
import {fonts} from '@src/shared/fonts';

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerScreenStack = (): JSX.Element => {
  return (
    <Drawer.Navigator
      initialRouteName={SCREENS.TAB_SCREEN_STACK}
      drawerContent={DrawerMenu}
      screenOptions={{
        drawerActiveTintColor: '#2BB24C',
        drawerInactiveTintColor: '#9B9B9B',
        headerShown: false,
        drawerLabelStyle: {
          color: colors.whiteColor,
          fontFamily: fonts.robotoB,
          fontSize: textScale(16),
          textAlign: 'left',
        },
        drawerItemStyle: {
          marginLeft: 20,
        },
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: () => <Account width={24} height={24} />,
          title: 'User profile',
        }}
        name={SCREENS.TAB_PROFILE}
        component={ProfileScreen}
      />
      <Drawer.Screen
        options={{
          drawerItemStyle: {display: 'none'},
          headerShown: false,
        }}
        name={SCREENS.TAB_SCREEN_STACK}>
        {({navigation}) => <TabScreenStack navigation={navigation} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
