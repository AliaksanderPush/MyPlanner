import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreenStack} from './AuthStackNavigation';
import {DrawerScreenStack} from './DrawerNavigation';
import {GeneralStackParams} from '@src/app/types';
import {SCREENS} from '@src/app/config/screens';
import {useAppDispatch, useAppSelector} from '../store';
import {useFetchUserQuery} from '@src/entities/user/model/userApi';
import {selectAuthInfo, setToken} from '@src/entities/auth';
import {getTokens} from '@src/shared/storage';
import {LoadingScreen} from '@src/screens';

const HomeScreenStack = createNativeStackNavigator<GeneralStackParams>();

export const GeneralNavigation = (): JSX.Element => {
  const {tokens} = useAppSelector(selectAuthInfo);
  const dispatch = useAppDispatch();

  const {
    data: user,
    error,
    isLoading,
  } = useFetchUserQuery(undefined, {
    skip: tokens === null,
    refetchOnFocus: true,
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  useEffect(() => {
    if (!tokens) {
      (async () => {
        const tokens = await getTokens();
        console.log('res=>', tokens);
        if (tokens) {
          dispatch(setToken(tokens));
        }
      })();
    }
  }, [tokens]);

  return (
    <>
      <HomeScreenStack.Navigator
        initialRouteName={SCREENS.AUTH_SCREEN_STACK}
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}>
        {tokens && user ? (
          <HomeScreenStack.Screen
            name={SCREENS.DRAWER_SCREEN_STACK}
            component={DrawerScreenStack}
          />
        ) : (
          <HomeScreenStack.Screen
            name={SCREENS.AUTH_SCREEN_STACK}
            component={AuthScreenStack}
          />
        )}
      </HomeScreenStack.Navigator>
    </>
  );
};
