import {NavigatorScreenParams, ParamListBase} from '@react-navigation/native';
import {SCREENS} from './screenConst';
import type {
  DrawerScreenProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';

export type AuthStackParams = {
  [SCREENS.AUTH_SIGNIN]: undefined;
  [SCREENS.AUTH_WELCOME]: undefined;
  [SCREENS.AUTH_SIGNUP]: undefined;
};

export type TAbStackParams = {
  [SCREENS.TAB_MYDAY]: undefined;
  [SCREENS.TAB_CATEGORY]: undefined;
  [SCREENS.TAB_ADDTASK]: undefined;
  [SCREENS.TAB_CALENDAR]: undefined;
  [SCREENS.TAB_PROFILE]: undefined;
};

export type GeneralStackParams = {
  [SCREENS.DRAWER_SCREEN_STACK]: NavigatorScreenParams<DrawerStackParams>;
  [SCREENS.AUTH_SCREEN_STACK]: NavigatorScreenParams<AuthStackParams>;
};
export type DrawerStackParams = {
  [SCREENS.TAB_PROFILE]: undefined;
  [SCREENS.TAB_SCREEN_STACK]: NavigatorScreenParams<TAbStackParams>;
};

export type DrawerProps = DrawerNavigationProp<ParamListBase>;
