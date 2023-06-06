import {NavigatorScreenParams} from '@react-navigation/native';

export type AuthStackParams = {
  SignInScreen: undefined;
};

export type TAbStackParams = {
  MyDayScreen: undefined;
  CategoryScreen: undefined;
  AddTaskScreen: undefined;
  CalendarScreen: undefined;
  ProfileScreen: undefined;
};

export type GeneralStackParams = {
  DrawerScreenStack: NavigatorScreenParams<DrawerStackParams>;
  AuthScreenStack: NavigatorScreenParams<AuthStackParams>;
};
export type DrawerStackParams = {
  ProfileScreen: undefined;
  TabScreenStack: NavigatorScreenParams<TAbStackParams>;
};
