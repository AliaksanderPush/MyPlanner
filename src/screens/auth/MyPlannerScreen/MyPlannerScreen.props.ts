import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from '@src/app/types';
import {SCREENS} from '@src/app/config/screens';

export type MyPlannerProps = NativeStackScreenProps<
  AuthStackParams,
  SCREENS.AUTH_MY_PLANNER
>;
