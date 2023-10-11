import {NavigatorScreenParams, ParamListBase} from '@react-navigation/native';

import type {DrawerNavigationProp} from '@react-navigation/drawer';
import {SCREENS} from '@src/app/config/screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AuthStackParams = {
  [SCREENS.AUTH_SIGNIN]: undefined;
  [SCREENS.AUTH_WELCOME]: undefined;
  [SCREENS.AUTH_SIGNUP]: undefined;
  [SCREENS.AUTH_MY_PLANNER]: undefined;
  [SCREENS.AUTH_FORGOT_PASSWORD]: undefined;
  [SCREENS.AUTH_CONFIRM_CODE]: undefined;
  [SCREENS.AUTH_RESTORE_PASSWORD]: undefined;
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
export type AuthStackProps = NativeStackNavigationProp<AuthStackParams>;

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegistrRequest {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface IRestPassRequest {
  password: string;
  confirmPassword: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}
