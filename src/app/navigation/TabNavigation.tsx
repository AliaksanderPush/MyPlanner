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

const ButtomStack = createBottomTabNavigator();

export const TabScreenStack = (): JSX.Element => {
  return (
    <ButtomStack.Navigator
      initialRouteName="MyDayScreen"
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'red',
        headerShown: false,
      }}>
      <ButtomStack.Screen
        name="MyDayScreen"
        component={MyDayScreen}
        options={{
          tabBarIcon: ({color}) => <CalendarIcon size={24} color={color} />,
        }}
      />
      <ButtomStack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          title: 'Chat',
          tabBarIcon: ({color}) => <ListIcon size={32} color={color} />,
        }}
      />
      <ButtomStack.Screen
        name="AddTaskScreen"
        component={AddTaskScreen}
        options={{
          tabBarIcon: () => <AddIcon size={32} />,
        }}
      />
      <ButtomStack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          title: 'CalendarScreen',
          tabBarIcon: ({color}) => <DateIcon size={32} color={color} />,
        }}
      />
      <ButtomStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Sign',
          tabBarIcon: ({color}) => <ProfileIcon size={32} color={color} />,
        }}
      />
    </ButtomStack.Navigator>
  );
};
