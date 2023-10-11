import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from '@src/app/types';
import {SCREENS} from '@src/app/config/screens';

export type WelcomProps = NativeStackScreenProps<
  AuthStackParams,
  SCREENS.AUTH_WELCOME
>;
