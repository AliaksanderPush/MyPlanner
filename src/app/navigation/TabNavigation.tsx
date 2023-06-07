import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CalendarIcon,
  ListIcon,
  AddIcon,
  DateIcon,
  ProfileIcon,
} from '@src/shared/ui';
import {
  AddTaskScreen,
  CalendarScreen,
  ProfileScreen,
  MyDayScreen,
  CategoryScreen,
} from '@src/screens';
import {colors} from '@src/app/styles';
import {TAbStackParams} from './types';
import {SCREENS} from './screenConst';
import {Pressable} from 'react-native';
import {MenuIcon} from '@src/shared/ui';

const ButtomStack = createBottomTabNavigator<TAbStackParams>();

export const TabScreenStack = ({navigation}: any): JSX.Element => {
  return (
    <ButtomStack.Navigator
      initialRouteName={SCREENS.TAB_MYDAY}
      screenOptions={{
        tabBarActiveTintColor: colors.textColor,
        tabBarInactiveTintColor: colors.fonColor,
        headerShown: true,
        tabBarShowLabel: false,
        headerLeft: () => (
          <Pressable
            style={{marginLeft: 20}}
            onPress={() => navigation.toggleDrawer()}>
            <MenuIcon />
          </Pressable>
        ),
      }}>
      <ButtomStack.Screen
        name={SCREENS.TAB_MYDAY}
        component={MyDayScreen}
        options={{
          tabBarIcon: ({color}) => <CalendarIcon size={24} color={color} />,
        }}
      />
      <ButtomStack.Screen
        name={SCREENS.TAB_CATEGORY}
        component={CategoryScreen}
        options={{
          tabBarIcon: ({color}) => <ListIcon size={24} color={color} />,
        }}
      />
      <ButtomStack.Screen
        name={SCREENS.TAB_ADDTASK}
        component={AddTaskScreen}
        options={{
          tabBarIcon: () => <AddIcon size={24} />,
        }}
      />
      <ButtomStack.Screen
        name={SCREENS.TAB_CALENDAR}
        component={CalendarScreen}
        options={{
          tabBarIcon: ({color}) => <DateIcon size={24} color={color} />,
        }}
      />
      <ButtomStack.Screen
        name={SCREENS.TAB_PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon size={24} color={color} />,
        }}
      />
    </ButtomStack.Navigator>
  );
};
