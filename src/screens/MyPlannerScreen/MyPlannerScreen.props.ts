import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from '@src/app/navigation/types';
import {SCREENS} from '@src/app/navigation';

export type MyPlannerProps = NativeStackScreenProps<
  AuthStackParams,
  SCREENS.AUTH_MY_PLANNER
>;
