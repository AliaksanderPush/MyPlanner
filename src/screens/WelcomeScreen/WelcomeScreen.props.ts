import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from '@src/app/navigation/types';
import {SCREENS} from '@src/app/navigation';

export type WelcomProps = NativeStackScreenProps<
  AuthStackParams,
  SCREENS.AUTH_WELCOME
>;
