import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreenStack} from './AuthStackNavigation';
import {DrawerScreenStack} from './DrawerNavigation';
import {GeneralStackParams} from '@src/app/types';
import {SCREENS} from '@src/app/config/screens';
import {useAppDispatch, useAppSelector} from '../store';
import {useFetchUserQuery} from '@src/entities/user/model/userApi';
import {selectAuthInfo, setToken, useRefreshMutation} from '@src/entities/auth';
import {getTokens, removeToken} from '@src/shared/storage';

const HomeScreenStack = createNativeStackNavigator<GeneralStackParams>();

export const GeneralNavigation = (): JSX.Element => {
  const token = useAppSelector(selectAuthInfo);
  const dispatch = useAppDispatch();
  console.log('token in root=>', token);

  const {
    data: user,
    error,
    isLoading,
  } = useFetchUserQuery(undefined, {
    skip: token === null,
  });

  console.log('user in root=>', user);
  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

  if (error) {
    console.log('err user=>', error);
  }

  useEffect(() => {
    if (!token) {
      (async () => {
        const tokens = await getTokens();
        console.log('res=>', tokens);
        if (tokens) {
          dispatch(setToken(tokens));
        }
      })();
    }
  }, [token]);

  return (
    <>
      <HomeScreenStack.Navigator
        initialRouteName={SCREENS.AUTH_SCREEN_STACK}
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}>
        {token && user ? (
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
